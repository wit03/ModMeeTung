import { client } from "../../router"

const goalHandler = (msg, token) => {
    const result = "เป้าหมายปัจจุบัน\nรายวัน: 200 บาท\nรายเดือน: 4000 บาท"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default goalHandler