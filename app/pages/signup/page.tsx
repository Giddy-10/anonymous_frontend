import React from "react"
import { BsLink } from "react-icons/bs"
import { CgChevronRight, CgMail } from "react-icons/cg"
import { FcKey, FcLink } from "react-icons/fc"

const page = () => {
    return (
        <div className="mt-60 md:mt-32">
            <form className="max-w-96 flex flex-col gap-2 mx-auto py-6 px-4 rounded-lg shadow">
                <h2 className="text-2xl tracking-tight font-bold border-b pb-2 mb-2">
                    Sign up
                </h2>
                <div className="py-4 flex justify-end items-center">
                    <p className="inline mx-2">Already have an account?</p>
                    <a
                        href="/pages/login"
                        className="bg-info text-info-content rounded-btn py-2 px-4 hover:bg-neutral hover:text-neutral-content active:py-1 transition-all flex items-center gap-1"
                    >
                        <BsLink className="inline" /> Log in
                    </a>
                </div>
                <label className="input input-bordered flex items-center gap-2">
                    <CgMail />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your School Email"
                        className="grow"
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <FcKey />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="grow"
                    />
                </label>
                <button className="btn bg-[var(--red)] text-gray-100 my-4">
                    Send
                </button>
            </form>
        </div>
    )
}

export default page
