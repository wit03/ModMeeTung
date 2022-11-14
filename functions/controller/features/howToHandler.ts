import { client } from "../../router"

const howToHandler = (msg, token) => {
    const result = "วิธีการใช้งาน"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default howToHandler