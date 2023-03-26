import SectionHeading from "../../utils/SectionHeading"
// import { sendMeMail } from "./emailMe"
import "./style.css"

export default function Contact() {
    async function handleFormSubmit(ev) {
        ev.preventDefault()
        const form = new FormData(ev.currentTarget)
        const data = {}

        const entries = form.entries()

        for (const [key, value] of entries) {
            if (key === "email") {
                data["from"] = value
                continue
            }
            if (key === "message") {
                data["text"] = value
                continue
            }
            data[key] = value
        }

        // todo validate form

        try {
            // const resp = await sendMeMail(data)
            // console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <section
            data-snap
            className="flex flex-col items-center pb-[55px] sm:px-3 mx-1"
            id="contactMe"
        >
            <div className="mt-[70px]"></div>
            <h3 className="text-center py-[25px] text-2xl tracking-wide font-semibold">
                <SectionHeading id={"contactMe"} />
            </h3>
            {/* <h3 className="text-center pt-[25px] text-3xl mb-[25px] p-3 tracking-wide font-bold">
                CTA
            </h3> */}
            <div
                data-contact-wrapper
                className="flex w-full flex-col items-center card-bold pb-4 sm:pb-[25px] bg-gray-100 dark:bg-slate-800"
            >
                <h2 className="text-center text-xl sm:text-2xl pt-[25px] pb-[5px] tracking-wide font-semibold">
                    #CTA
                </h2>
                <form
                    action=""
                    onSubmit={handleFormSubmit}
                    className="gap-3 p-3 w-full"
                >
                    <div data-contact className="flex gap-3 p-3 w-full">
                        <div className="flex flex-col sm:gap-1 gap-2 w-full">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="your name"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email address"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="subject"
                                    name="subject"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="message"
                                className="resize-none outline-gray-400 outline-[2px] focus:outline-sky-500 outline h-full w-full py-2 px-2 min-w-[200px] sm:min-w-[300px] overflow-y-auto"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-4 flex items-end justify-center">
                        <button className="p-4 w-full max-w-[200px] text-xl rounded dark:bg-primary-dark text-card-light dark:text-card-dark">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            <EmailAndPhone />
            <h3 className="text-center pt-4 mt-4 text-2xl tracking-wide font-semibold">
                <SectionHeading wrap />
            </h3>
        </section>
    )
}

function EmailAndPhone() {
    return (
        <div className="max-w-[500px] w-full pt-[15px]">
            <div className="flex justify-evenly flex-wrap gap-3">
                <div className="flex flex-col items-start ">
                    <span className="font-semibold">Email</span>
                    <span className="opacity-95">toure925@outlook.com</span>
                </div>
                <div className="phone flex flex-col items-start">
                    <span className="font-semibold">Phone</span>
                    <span className="opacity-95">+220 310 1417</span>
                </div>
            </div>
        </div>
    )
}
