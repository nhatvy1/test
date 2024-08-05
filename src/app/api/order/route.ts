import { mailOptions, transporter } from '@/config/config.nodemailer'
import calculateTotalPrice from '@/utils/calculateTotalPrice'

const generateEmailContent = (data: any, orderInfo: any) => {
  const tbody = data
    ?.map(
      (item: any, index: number) =>
        `
      <tr>
        <td>
          <p>${index + 1}</p>
        </td>
        <td>
          <p>${item?.id}</p>
        </td>
        <td>
          <p>${item?.name}</p>
        </td>
        <td>
          <p>
            ${
              item.trongluong
                ? `${(
                    item?.trongluong?.price * item?.quantity
                  )?.toLocaleString()} đ`
                : `${(item?.price * item?.quantity)?.toLocaleString()} đ`
            }
          </p>
        </td>
        <td>
          <p>${item?.quantity}</p>
        </td>
        <td>
          <p>${
            item.trongluong
              ? `${item.trongluong?.weight}g - ${item.trongluong?.egg} trứng`
              : ''
          }</p>
        </td>
        <td>
          <p>${item?.type}</p>
        </td>
        </tr>
        `
    )
    .join('')

  return {
    text: 'Đơn hàng',
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
      table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      }
  
      td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      }
      .title {
        background-color: rgb(220, 173, 243);
        padding: 10px;
        color: white;
        margin-bottom: 5px;
      }

      .list {
        list-style: none;
        padding: 0;
      }
      </style>
    </head>
    <body>
<div class="container">
      <div class="title">
        <h1>Cảm ơn quý khách</h1>
      </div>
      <ul class="list">
        <li>Khách hàng: ${orderInfo?.fullName}</li>
        <li>Email: ${orderInfo?.email}</li>
        <li>Số điện thoại: ${orderInfo?.phone}</li>
        <li>Địa chỉ: ${orderInfo?.address}</li>
        <li>Ghi chú: Bạn có thể tư vấn cho tôi được không</li>
        <li><strong>Tổng tiền: ${calculateTotalPrice(
          data
        )?.toLocaleString()} đ</strong></li>
      </ul>
      <p>Kính chúc quý khách hàng có một mùa Trung thu thật vui vẻ và ấm áp bên gia đình.💕💕💕</p>
      <table>
        <thead>
          <tr>
            <td>
              <p><strong>STT</strong></p>
            </td>
            <td>
              <p><strong>Mã hàng</strong></p>
            </td>
            <td>
              <p><strong>Tên hàng hóa</strong></p>
            </td>
            <td>
              <p><strong>Giá tiền</strong></p>
            </td>
            <td>
              <p><strong>Số lượng</strong></p>
            </td>
            <td>
              <p><strong>Trọng lượng</strong> (Gram)</p>
            </td>
            <td>
              <p><strong>Loại bánh</strong></p>
            </td>
          </tr>
        </thead>
        <tbody>
          ${tbody}
        </tbody>
      </table>
    </div>
    </body>
    </html>`
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await transporter.sendMail({
      from: mailOptions.from,
      to: body.order.email,
      ...generateEmailContent(body.data, body.order),
      subject: 'Đơn hàng bánh trung thu'
    })

    return Response.json({
      message: 'Mua thành cồng'
    })
  } catch (e) {
    console.log('Da co loi')
  }
}
