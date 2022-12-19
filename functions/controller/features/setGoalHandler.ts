import { client } from "../../router"

const setGoalHandler = (msg, token) => {
    const result = "กรุณากำหนดเป้าหมายการใช้เงินรายวันเเละรายเดือนของคุณ \nเช่น เป้าหมายรายวัน:เป้าหมายรายเดือน (300:7000)"

    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default setGoalHandler