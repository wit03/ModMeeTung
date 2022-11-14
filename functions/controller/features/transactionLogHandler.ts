import { client } from "../../router";
import Airtable from "airtable";

const transactionLogHandler = (msg, token) => {
  const ATbase = new Airtable({
    apiKey: process.env.AIRTABLE_API,
  }).base((process.env.AIRTABLE_BASE)!);

  const category = {
    f: "Foods",
    d: "Drinks",
    t: "Transportations",
    m: "Miscellaneous",
    s: "Snacks",
    o: "Online Shoppings",
    l: "Liqueurs",
    a: "Alcohol"
  };
  var amount: number = +(msg.match(/\d+/g)[0]);
  var categoryType: string = category[msg.match(/[fdtmsola]+/g)[0]];
  var date = new Date().toISOString().split("T")[0];
  var month = new Date().toISOString().split("T")[0].split("-")[1]
  const field = {
    "fields": {
      "Date": date,
      "Category": categoryType,
      "Amount": amount,
    },
  };

  function writeToAirtable() {
    return new Promise((resolve, reject) => {
      ATbase("Expense Tracker").create([field], function (err, record) {
        if (err) {
          reject(err);
          return;
        }
        resolve(record);
      });
    });
  }

  async function getSpending() {
    var data: any = [];
    const records = await ATbase("Expense Tracker").select().all();
    records.forEach((record) => {
      data.push({
        date: record.get("Date"),
        amount: record.get("Amount"),
      });
    });

    var dateTable = data.filter((list) => list.date === date); //filter data by date
    var monthTable = data.filter((list) => list.date.split("-")[1] == month) // filter data by month
    var todaySpending = dateTable.map((item) => item.amount).reduce((prev, curr) => prev + curr,0,); //some spending
    var monthSpending = monthTable.map((item) => item.amount).reduce((prev, curr) => prev + curr,0,); //some spending
    return { todaySpending, monthSpending };
  }

  const replyLine = async () => {
    var dailySpending = "";
    var monthlySpending = ""

    await writeToAirtable();
    await getSpending().then((res) => {
      dailySpending = JSON.stringify(res.todaySpending);
      monthlySpending = JSON.stringify(res.monthSpending);
    });

    var result: any = {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "Transaction Logger",
            weight: "bold",
            color: "#1DB446",
            size: "sm",
          },
          {
            type: "text",
            text: "Paid",
            weight: "bold",
            size: "xxl",
            margin: "md",
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "vertical",
            margin: "xxl",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: categoryType,
                    size: "sm",
                    color: "#555555",
                    flex: 0,
                  },
                  {
                    type: "text",
                    text: amount + "฿",
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              },
              {
                type: "separator",
                margin: "xxl",
              },
              {
                type: "box",
                layout: "horizontal",
                margin: "xxl",
                contents: [
                  {
                    type: "text",
                    text: "Today's Spending",
                    size: "sm",
                    color: "#555555",
                  },
                  {
                    type: "text",
                    text: dailySpending + "฿",
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                margin: "xxl",
                contents: [
                  {
                    type: "text",
                    text: "Month's Spending",
                    size: "sm",
                    color: "#555555",
                  },
                  {
                    type: "text",
                    text: monthlySpending + "฿",
                    size: "sm",
                    color: "#111111",
                    align: "end",
                  },
                ],
              }
            ],
          },
          {
            type: "separator",
            margin: "xxl",
          },
          {
            type: "box",
            layout: "horizontal",
            margin: "md",
            contents: [
              {
                type: "text",
                text: "Date",
                size: "xs",
                color: "#aaaaaa",
                flex: 0,
              },
              {
                type: "text",
                text: date,
                color: "#aaaaaa",
                size: "xs",
                align: "end",
              },
            ],
          },
        ],
      },
      styles: {
        footer: {
          separator: true,
        },
      },
    };

    return client.replyMessage(token, {
      type: "flex",
      altText: "Paid " + amount + "฿" + " for " + categoryType,
      contents: result,
    });
  };

  return replyLine();
};

export default transactionLogHandler;
