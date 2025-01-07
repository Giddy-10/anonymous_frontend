import React from "react"

interface ExpProps {
    data: { text: string, timestamp: string }
}

const DashboardFeedback = (props: ExpProps) => {
    return (
        <div className="w-full border-t-2 border-success text-success-content mb-4 p-3">
            <div className="opacity-50 text-sm text-primary mb-2 flex justify-between">{props.data.timestamp.split(" ").map(x => <span>{x}</span>)}</div>
            {props.data.text}
        </div>
    )
}

export default DashboardFeedback
