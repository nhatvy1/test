import nodemailer from "nodemailer";

const email = 'trungthugivral1950@gmail.com' // tên địa chỉ email
const pass = 'ehibdwqplulvafre' // mật khẩu xác thực 2 lớp
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};