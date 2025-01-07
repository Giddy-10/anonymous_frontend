import React from "react"

interface ExpProps {
    data: { files: string[]; text?: string; timestamp: string }
}

const DashboardHistory = (props: ExpProps) => {
    return (
        <div className="rounded-2xl rounded-br-none bg-neutral text-neutral-content w-fit mb-4 p-3 flex flex-col">
            <div className="text-sm opacity-50 mb-2 flex justify-between">
                {props.data.timestamp.split(" ").map((x) => (
                    <span>{x}</span>
                ))}
            </div>
            {props.data.files.length ? (
                <>
                    <div>
                        <p className="text-lg font-bold">File(s):</p>
                        <p>{props.data.files.join(", ")}</p>
                    </div>
                    <div className="divider divider-info"></div>
                </>
            ) : (
                ""
            )}
            {props.data.text && <div>{props.data.text}</div>}
        </div>
    )
}

export default DashboardHistory
