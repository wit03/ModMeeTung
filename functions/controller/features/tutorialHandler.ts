import { client } from "../../router"

const tutorialHandler = (msg, token) => {
    const result = "วิธีการใช้งานคำสั่ง\n\nลงทะเบียน - กรอกข้อมูล Airtable API เพื่อเชื่อมต่อ\n\n50f - บันทึกจำนวนเงินเเละหมวดหมู่ของรายจ่าย\n\nเเสดงหมวดหมู่ - เเสดงหมวดหมู่รายจ่ายทั้งหมด\n\nกำหนดเป้าหมาย - กำหนดเป้าหมายการใช้จ่ายรายวันเเละรายเดือนเป้าหมาย\n\nเป้าหมาย - เเสดงเป้าหมายรายวันเเละรายเดือน ณ ปัจจุบัน"
    return client.replyMessage(token, {
        type: "text",
        text: result
    })
}

export default tutorialHandler