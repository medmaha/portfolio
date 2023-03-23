import React from "react"

export default function ContactForm() {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-center capitalize text-xl font-bold tracking-wider">
                #CTA
            </h3>
            <div className="max-w-[400px] flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                    <label htmlFor="email text-lg">
                        Email
                        <span
                            title="required"
                            className="dark:text-blue-300 px-1 text-red-400"
                        >
                            *
                        </span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="email address"
                        required
                        className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="subject text-lg">
                        Subject
                        <span
                            title="required"
                            className="dark:text-blue-300 px-1 text-red-400"
                        >
                            *
                        </span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required
                        placeholder="subject"
                        className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message text-lg">
                        Message
                        <span
                            title="required"
                            className="dark:text-blue-300 px-1 text-red-400"
                        >
                            *
                        </span>
                    </label>
                    <textarea
                        rows={4}
                        id="message"
                        required
                        placeholder="Message"
                        className="p-1 outline-slate-500 dark:outline-slate-500 outline-2 outline rounded-sm focus:outline-blue-400 dark:focus:outline-cyan-400 max-w-[400px]"
                    ></textarea>
                </div>
                <div className="text-right mt-2">
                    <span className="p-2 rounded-md text-slate-800 bg-blue-400">
                        Submit
                    </span>
                </div>
            </div>
        </div>
    )
}
