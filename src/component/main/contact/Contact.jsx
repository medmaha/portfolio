import SectionHeading from "../../utils/SectionHeading"
import "./style.css"

export default function Contact() {
    function handleFormSubmit() {}
    return (
        <section
            data-snap
            className="flex flex-col items-center mb-[55px] sm:px-3 "
            id="contactMe"
        >
            <div className="mt-[70px]"></div>
            <h3 className="text-center py-[25px] text-2xl tracking-wide font-semibold">
                <SectionHeading id={"contactMe"} />
            </h3>
            {/* <h3 className="text-center pt-[25px] text-3xl mb-[25px] p-3 tracking-wide font-bold">
                CTA
            </h3> */}
            <div className="flex flex-col items-center card-bold rounded-xl md:rounded-full pb-[25px] bg-gray-100 dark:bg-slate-800">
                <h2 className="text-center text-xl sm:text-2xl pt-[25px] pb-[5px] tracking-wide font-semibold">
                    CTA
                </h2>
                <form
                    action=""
                    onSubmit={handleFormSubmit}
                    className="flex flex-col sm:flex-row gap-3 p-3 w-auto"
                >
                    <div className="flex flex-col gap-1 ">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="outline-1 sm:w-[95%] outline-gray-400 outline py-1 px-2 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="outline-1 sm:w-[95%] outline-gray-400 outline py-1 px-2 w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="outline-1 sm:w-[95%] outline-gray-400 outline py-1 px-2 w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="outline-1 outline-gray-400 outline h-full w-full py-1 px-2 md:min-w-[350px] max-h-[240px] overflow-y-auto"
                        ></textarea>
                    </div>
                </form>
                <button className="px-3 py-1 text-lg rounded k dark:bg-primary-dark text-card-light dark:text-card-dark">
                    Submit
                </button>
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
