import { client } from "../../router"

const tutorialHandler = (msg, token) => {
    const result = "วิธีการใช้งานคำสั่งต่าง ๆ\n 50f-บันทึกจำนวนเงินเเละหมวดหมู่ของรายจ่าย\nเเสดงหมวดหมู่-เเสดงหมวดหมู่รายจ่ายทั้งหมด\nเป้าหมาย-เเสดงเป้าหมายรายวันเเละรายเดือน ณ ปัจจุบัน"
    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default tutorialHandler