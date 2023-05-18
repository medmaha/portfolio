import axios from "axios"

export default async function handler(req, res) {
    const { name, email, subject, message } = req.body

    if (!email || !name || !subject || !message) {
        res.status(400).json({
            error: true,
            message: "Form data is invalid",
        })
        return res.end()
    }

    // return new Promise((resolve) => {
    //     setTimeout(() => {
    //         // res.status(200).json({ name })
    //         res.status(400).json({ message: "Invalid request" })
    //         resolve(res.end())
    //     }, 5000)
    // })

    try {
        const myEmail = process.env.PRIMARY_EMAIL
        // "https://medluxe-smtp.glitch.me/send-mail",
        const { data } = await axios.post(
            "https://medluxe-smtp.glitch.me/send-mail",
            {
                to_mail: myEmail,
                from_host: "My Portfolio",
                mailType: "contact",
                subject: `${subject}`,
                html: buildEmailHtml({
                    name,
                    email,
                    subject,
                    message,
                    heading: "A new message from your Portfolio site",
                }),
            },
        )

        if (data.success) {
            res.status(200).json({ name })
            return res.end()
        } else if (data.error) {
            res.status(400).json({
                error: true,
                message: data.error || data.message,
            })
            return res.end()
        }
    } catch (error) {
        res.status(403).json({
            error: true,
            message: error?.response?.data?.message || error.message,
        })
        return res.end()
    }

    res.status(200).json({ error: true, message: "An Error occurred " + name })
}

function buildEmailHtml({ heading, name, email, subject, message }) {
    // prettier-ignore
    const html = ` <div class="" style=" margin: 0; display: flex; justify-content: center; align-items: center; height: 100%; padding: 3px 0; " ><div class="container" style=" max-width: 650px; padding: 0.5em; width: 100%; min-width: 300px; height: 100%; border-radius: 0.5em; text-align: center; color: #071e50b8; box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2); font-family: Verdana, Geneva, Tahoma, sans-serif; " ><div class="wrapper" style="padding: 0.5em 1em"><h1 style="margin: 0">${heading}</h1><div style=" display: block; text-align: left; color: #0a2153b8; " ><h3 style="color: #071e50b8; margin: 1em 0 5px 0">Message Information </h3><ul style=" margin: 0; display: flex; gap: 0.5em; flex-direction: column; " ><li><b>Sender Name</b>: <a style="color: #071e50b8">${name}</a></li><li><b>Sender Email</b>: <a style="color: #4c34e6" href=${`mailto://${email}`} >${email}</a ></li><li><b>Message Subject</b>: <a style="color: #071e50b8">${subject}</a></li></ul><div class="" style="display: block; padding-top: 1.5em" ><h4 style="margin: 0; color: #071e50b8">Message Body </h4><p style=" margin: 0; padding: 0; padding-top: 2px; font-weight: lighter; font-size: 14px; color: #071e50da; letter-spacing: 1px; " >${message} </p></div></div></div></div></div>`

    return html
}
