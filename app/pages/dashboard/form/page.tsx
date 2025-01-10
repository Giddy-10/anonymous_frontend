import TextRadio from "@/components/TextRadio/TextRadio"
import React from "react"
import { GiNinjaHead } from "react-icons/gi"
import Dashboard from "../page"

const page = () => {
    return (
        <Dashboard>
            <div className="min-h-dvh bg-inherit">
                <form className="mx-auto my-5 pt-8 pb-20 px-4 w-96 shadow-2xl rounded-lg">
                    <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8">
                        Anonymous <GiNinjaHead className="inline" />
                    </h3>
                    <p className="block text-2xl tracking-tight my-4">
                        Type...
                    </p>
                    <TextRadio
                        radioName={"report_type"}
                        radioValues={[
                            "Mistreatment",
                            "Law Break",
                            "Unsatisfaction",
                        ]}
                        required={true}
                    />
                    <div className="divider"></div>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="report_title"
                            placeholder="Title"
                            className="input input-bordered w-full max-w-xs"
                            required
                        />
                        <textarea
                            className="textarea textarea-bordered"
                            name="report_description"
                            cols={40}
                            rows={4}
                            placeholder="Write here..."
                        ></textarea>
                        <input
                            type="file"
                            multiple
                            accept={
                                ".png,.jpg,.jpeg,.mp4,.mov,.avi,.gif,.mp3,.wav,.m4a,.ogg"
                            }
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                        <button className="btn btn-info">Send</button>
                    </div>
                </form>
            </div>
        </Dashboard>
    )
}

export default page
