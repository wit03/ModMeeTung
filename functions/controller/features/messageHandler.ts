import { client } from "../../router"
import howToHandler from "./howToHandler"
import summaryHandler from "./summaryHandler"
import transactionLogHandler from "./transactionLogHandler"

const messageHandler = (event) => {
    var msg = event.message.text
    var token = event.replyToken
    if (msg.match(/^([\d.]+)(j?)([fdtmsola])$/i)) { //match transaction record
        return transactionLogHandler(msg, token)
    } else if (msg.match(/สรุป/g)) {
        return summaryHandler(msg, token)
    } else if (msg.match(/วิธีการใช้งาน/g)) {
        return howToHandler(msg, token)
    }else {
        return client.replyMessage(token, {
            type: "text",
            text: "ขอโทษครับ, เรายังไม่เข้าใจสิ่งที่คุณพิมพ์",
        });
    }
}

export default messageHandler