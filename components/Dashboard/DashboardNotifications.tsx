import React from "react"

interface ExpProps {
    data: { read: boolean, text: string }
}

const DashboardNotifications = (props: ExpProps) => {
    return (
        <div
            className={
                props.data.read
                    ? "rounded-2xl rounded-tl-none w-fit mb-4 py-3 px-8 border border-info"
                    : "rounded-2xl rounded-tl-none w-fit mb-4 py-3 px-8 bg-info text-info-content"
            }
        >
            {props.data.text}
        </div>
    )
}

export default DashboardNotifications
