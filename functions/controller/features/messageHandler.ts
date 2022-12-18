import { client } from "../../router"
import noContextHandler from "./noContextHandler"
import summaryHandler from "./summaryHandler"
import transactionLogHandler from "./transactionLogHandler"
import tutorialHandler from "./tutorialHandler"

const messageHandler = (event) => {
    var msg = event.message.text
    var token = event.replyToken
    if (msg.match(/^([\d.]+)(j?)([fdtmsola])$/i)) { //match transaction record
        return transactionLogHandler(msg, token)
    } else if (msg.match(/ใช้งาน/g)) {
        return tutorialHandler(msg, token)
    } else if (msg.match(/สรุป/g)) {
        return summaryHandler(msg, token)
    } else {
        return noContextHandler(msg, token)
    }
}

export default messageHandler