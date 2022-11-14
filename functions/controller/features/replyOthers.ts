import { client } from "../../router"

const replyOthers = (msg, token) => {
    const result = "สวัสดีครับ ModMeeTung คือ Line Bot สำหรับบันทึกรายรับรายจ่าย"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default replyOthers