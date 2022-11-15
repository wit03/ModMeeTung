import { client } from "../../router"

const summaryHandler = (msg, token) => {
    const result = "สรุป"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default summaryHandler