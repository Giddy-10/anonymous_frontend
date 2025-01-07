import RadialChart from "@/components/Charts/RadialChart"
import DashboardFeedback from "@/components/Dashboard/DashboardFeedback"
import DashboardHistory from "@/components/Dashboard/DashboardHistory"
import DashboardNotifications from "@/components/Dashboard/DashboardNotifications"
import { notificationsData, feedbackData, historyData } from "@/utils/data.json"
import React from "react"
import { BiMath, BiMessage, BiNotification } from "react-icons/bi"
import { BsReplyFill } from "react-icons/bs"
import { FaFile } from "react-icons/fa"
import { FcDocument } from "react-icons/fc"
import { RiReplyFill } from "react-icons/ri"

const page = () => {
    return (
        <div className=" mt-60 md:mt-32">
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-96 p-2 flex flex-col border-2 rounded-lg shadow-md">
                    <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8 flex items-center gap-2">
                        <BiNotification className="inline" /> Notifications
                    </h3>
                    <div className="overflow-auto py-4 px-2">
                        <div className="w-full px-4 pb-4 flex justify-start items-center">
                            <span className="mx-2 text-6xl text-secondary font-extrabold font-mono">
                                {
                                    notificationsData.filter((x) => !x.read)
                                        .length
                                }
                            </span>{" "}
                            unread
                        </div>
                        {notificationsData.map((notif) => (
                            <DashboardNotifications
                                data={notif}
                                key={notif.text}
                            />
                        ))}
                    </div>
                </div>
                <div className="h-96 p-2 flex flex-col  border-2 rounded-lg shadow-md">
                    <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8 flex items-center gap-2">
                        <BsReplyFill className="inline" /> Feedback
                    </h3>
                    <div className="overflow-auto">
                        {feedbackData.length ? (
                            feedbackData.map((reply) => (
                                <DashboardFeedback
                                    data={reply}
                                    key={reply.text}
                                />
                            ))
                        ) : (
                            <p className="block w-fit mx-auto">Empty...</p>
                        )}
                    </div>
                </div>
                <div className="h-96 p-2 flex flex-col border-2 rounded-lg shadow-md">
                    <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8 flex items-center gap-2">
                        <FcDocument className="inline" /> History
                    </h3>
                    <div className="flex flex-col overflow-auto py-4 px-2">
                        {historyData.map((hist) => (
                            <DashboardHistory data={hist} key={String(hist)} />
                        ))}
                    </div>
                </div>
                <div className="h-96 p-2 flex flex-col border-2 rounded-lg shadow-md">
                    <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8 flex items-center gap-2">
                        <BiMath className="inline" /> Stats
                    </h3>
                    <div className="flex flex-col items-center gap-2 overflow-y-auto py-4 px-2">
                        <div className="stats shadow h-fit overflow-clip">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <BiMessage />
                                </div>
                                <div className="stat-title">Messages sent</div>
                                <div className="stat-value">
                                    {historyData.length}
                                </div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <FaFile />
                                </div>
                                <div className="stat-title">Files sent</div>
                                <div className="stat-value">
                                    {historyData.reduce((accumulator, x) => {
                                        return (accumulator += x.files.length)
                                    }, 0)}
                                </div>
                            </div>
                        </div>
                        <div className="stats shadow h-fit overflow-clip">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <RiReplyFill />
                                </div>
                                <div className="stat-title">
                                    Feedback received
                                </div>
                                <div className="stat-value">
                                    {feedbackData.length}
                                </div>
                                <div className="stat-desc">
                                    {(
                                        (feedbackData.length /
                                            historyData.length) *
                                        100
                                    ).toFixed(0)}
                                    % of messages responded
                                </div>
                            </div>
                            <div className="stat">
                                <RadialChart
                                    bigNum={historyData.length}
                                    smallNum={feedbackData.length}
                                    delay={0.3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
