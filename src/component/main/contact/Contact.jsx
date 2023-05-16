import { useState } from "react"
import SectionHeading from "../../utils/SectionHeading"
// import { sendMeMail } from "./emailMe"
import axios from "axios"

export default function Contact() {
    //
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid] = useState(true)

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        setLoading(true)
        const _form = ev.currentTarget
        if (!_form.checkValidity()) {
            _form.reportValidity()
            return
        }

        const form = new FormData(ev.currentTarget)

        try {
            axios
            // console.log(resp)
            const { data } = await axios.post("/api/contact", form, {
                withCredentials: true,
                headers: { "content-type": "application/json" },
            })
            const { error, name, message } = data

            if (!error) {
                alert(
                    `Thank you ${name} for sending me a message i'll get back to you as soon as possible`,
                )
                _form?.reset()
                return
            }
            alert(message)
        } catch (error) {
            const msg = error?.response?.data?.message || error.message
            console.error(error)
            console.error(msg)
            alert(msg)
        } finally {
            setLoading(false)
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
                className="flex w-full relative flex-col items-center overflow-hidden card-bold pb-4 sm:pb-[25px] bg-gray-100 dark:bg-slate-800"
            >
                {loading && (
                    <div className="absolute z-10 top-0 left-0 w-full h-full block dark:bg-black dark:bg-opacity-30 bg-white bg-opacity-30 backdrop-blur-[3px]">
                        <div className="flex w-full h-full justify-center items-center flex-col">
                            <div className="flex justify-center items-center h-max w-full min-w-[100px]">
                                <div className="loading-ping"></div>

                                <div className="loading-ping"></div>

                                <div className="loading-ping"></div>
                            </div>
                            <p className="animate-pulse text-lg text-center pt-2 tracking-wide text-primary-light  font-semibold">
                                Processing message{" "}
                                <span className=" font-bold text-xl ">...</span>
                            </p>
                        </div>
                    </div>
                )}
                <h2 className="text-center text-xl sm:text-2xl pt-[25px] pb-[5px] tracking-wide font-semibold">
                    #CTA
                </h2>

                <form
                    action="/api/contact"
                    method="post"
                    onSubmit={handleFormSubmit}
                    onInput={(ev) => {
                        setInvalid(!ev.currentTarget.checkValidity())
                    }}
                    className="gap-3 p-3 w-full"
                >
                    <div data-contact className="flex gap-3 p-3 w-full">
                        <div className="flex flex-col sm:gap-1 gap-2 w-full">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    name="name"
                                    placeholder="your name"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px] dark:text-card-dark dark:placeholder:opacity-50 placeholder:dark:text-card-dark"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    required
                                    id="email"
                                    name="email"
                                    placeholder="email address"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px] dark:text-card-dark dark:placeholder:opacity-50 placeholder:dark:text-card-dark"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="">Subject</label>
                                <input
                                    type="text"
                                    required
                                    id="subject"
                                    placeholder="subject"
                                    minLength={10}
                                    name="subject"
                                    className="outline-gray-400 outline-[2px] focus:outline-sky-500 outline py-2 px-2 w-full min-w-[200px] sm:min-w-[300px] dark:text-card-dark dark:placeholder:opacity-50 placeholder:dark:text-card-dark"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                minLength={25}
                                maxLength={300}
                                placeholder="message"
                                className="resize-none outline-gray-400 outline-[2px] focus:outline-sky-500 outline h-full w-full py-2 px-2 min-w-[200px] sm:min-w-[300px] overflow-y-auto dark:text-card-dark dark:placeholder:opacity-50 placeholder:dark:text-card-dark"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-4 flex items-end justify-center">
                        <button
                            disabled={loading || invalid}
                            type="submit"
                            className="disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed p-4 w-full max-w-[200px] text-xl rounded-lg dark:bg-primary-dark text-card-lightbg-primary-light  dark:text-card-dark"
                        >
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
