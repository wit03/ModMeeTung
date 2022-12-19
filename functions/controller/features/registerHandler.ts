import { client } from "../../router"

const registerHandler = (msg, token) => {
    const result = "กรุณากรอก AirTable API Key"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default registerHandler