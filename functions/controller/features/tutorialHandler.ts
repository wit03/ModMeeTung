import { client } from "../../router"

const tutorialHandler = (msg, token) => {
    const result = "วิธีการใช้งานคำสั่ง\n\n50f - บันทึกจำนวนเงินเเละหมวดหมู่ของรายจ่าย\n\nเเสดงหมวดหมู่ - เเสดงหมวดหมู่รายจ่ายทั้งหมด\n\nเป้าหมาย - เเสดงเป้าหมายรายวันเเละรายเดือน ณ ปัจจุบัน"
    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default tutorialHandler