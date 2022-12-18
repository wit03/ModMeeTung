import { client } from "../../router"
import Airtable from "airtable";

const summaryHandler = async (msg, token) => {
    var dailyGoal = 200;
    var monthlyGoal = 4000;

    var date = new Date().toISOString().split("T")[0];
    var month = new Date().toISOString().split("T")[0].split("-")[1];

    var dailySpending = 0;
    var monthlySpending = 0;

    const ATbase = new Airtable({
        apiKey: process.env.AIRTABLE_API,
    }).base((process.env.AIRTABLE_BASE)!);

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
        var todaySpending = dateTable.map((item) => item.amount).reduce((prev, curr) => prev + curr, 0,); //some spending
        var monthSpending = monthTable.map((item) => item.amount).reduce((prev, curr) => prev + curr, 0,); //some spending
        return { todaySpending, monthSpending };
    }

    await getSpending().then((res) => {
        dailySpending = res.todaySpending;
        monthlySpending = res.monthSpending;
    });




    var result: any = {
        type: "carousel",
        contents: [
            {
                type: "bubble",
                size: "nano",
                header: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "Daily",
                            color: "#ffffff",
                            align: "start",
                            size: "md",
                            gravity: "center"
                        },
                        {
                            type: "text",
                            text: JSON.stringify((dailySpending/dailyGoal) * 100) + "%",
                            color: "#ffffff",
                            align: "start",
                            size: "xs",
                            gravity: "center",
                            margin: "lg"
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "filler"
                                        }
                                    ],
                                    width: "70%",
                                    backgroundColor: "#0D8186",
                                    height: "6px"
                                }
                            ],
                            backgroundColor: "#9FD8E36E",
                            height: "6px",
                            margin: "sm"
                        }
                    ],
                    backgroundColor: "#27ACB2",
                    paddingTop: "19px",
                    paddingAll: "12px",
                    paddingBottom: "16px"
                },
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: JSON.stringify(dailySpending) + " " + "฿",
                                    color: "#8C8C8C",
                                    size: "sm",
                                    wrap: true
                                }
                            ],
                            flex: 1
                        }
                    ],
                    spacing: "md",
                    paddingAll: "12px"
                },
                styles: {
                    footer: {
                        separator: false
                    }
                }
            },
            {
                type: "bubble",
                size: "nano",
                header: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "text",
                            text: "Monthly",
                            color: "#ffffff",
                            align: "start",
                            size: "md",
                            gravity: "center"
                        },
                        {
                            type: "text",
                            text: JSON.stringify((monthlySpending/monthlyGoal) * 100) + "%",
                            color: "#ffffff",
                            align: "start",
                            size: "xs",
                            gravity: "center",
                            margin: "lg"
                        },
                        {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "filler"
                                        }
                                    ],
                                    width: "100%",
                                    backgroundColor: "#7D51E4",
                                    height: "6px"
                                }
                            ],
                            backgroundColor: "#9FD8E36E",
                            height: "6px",
                            margin: "sm"
                        }
                    ],
                    backgroundColor: "#A17DF5",
                    paddingTop: "19px",
                    paddingAll: "12px",
                    paddingBottom: "16px"
                },
                body: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        {
                            type: "box",
                            layout: "horizontal",
                            contents: [
                                {
                                    type: "text",
                                    text: JSON.stringify(monthlySpending) + " " + "฿",
                                    color: "#8C8C8C",
                                    size: "sm",
                                    wrap: true
                                }
                            ],
                            flex: 1
                        }
                    ],
                    spacing: "md",
                    paddingAll: "12px"
                },
                styles: {
                    footer: {
                        separator: false
                    }
                }
            }
        ]
    }

    return client.replyMessage(token, {
        type: "flex",
        altText: "Day and Month Progress",
        contents: result,
    });
}

export default summaryHandler