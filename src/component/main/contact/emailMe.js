import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "celesup00@gmail.com",
        pass: "obszcndtjnpqrjxa",
    },
})

const mailOptions = {
    to: "toure925@gmail.com",
    from: "",
    subject: "",
    text: "",
}

export async function sendMeMail(options) {
    const data = { ...mailOptions, options }
    return new Promise((resolve, reject) => {
        transporter.sendMail(data, function (err, info) {
            if (info) {
                const accepted = info.accepted
                    ? info.accepted[0] === options.from
                    : false
                resolve({
                    accepted,
                    response: info.response,
                })
            }
            if (err) {
                reject(err)
            }
        })
    })
}
