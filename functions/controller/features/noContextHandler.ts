import { client } from "../../router"

const noContextHandler = (msg, token) => {
    const result = "ขอโทษครับ เรายังไม่เข้าใจคำสั่งของคุณในขณะนี้"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default noContextHandler