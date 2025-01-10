import ProgressBar from "@/components/Charts/ProgressBar"
import RadialChart from "@/components/Charts/RadialChart"
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout"
import React from "react"
import { BiMessage } from "react-icons/bi"
import { FaFile, FaPercentage } from "react-icons/fa"
import { RiReplyFill } from "react-icons/ri"

import data from "@/utils/database.json"

const Dashboard = ({ children }: { children: React.ReactNode }) => {
    return (
        <DashboardLayout>
            <div className="stats shadow relative mb-8">
                <div className="absolute bg-info w-2 aspect-square rounded-full right-[8px] top-[8px] animate-ping"></div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BiMessage />
                    </div>
                    <div className="stat-title">Reports sent</div>
                    <div className="stat-value">{data.reports.length}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <RiReplyFill />
                    </div>
                    <div className="stat-title">Feedback received</div>
                    <div className="stat-value">{data.feedbacks.length}</div>
                </div>
                <div className="stat">
                    <div className="w-[50%] mx-auto mb-1">
                        <RadialChart
                            bigNum={data.reports.length}
                            smallNum={data.feedbacks.length}
                            delay={0.2}
                        />
                    </div>
                    <div className="stat-desc">
                        {(
                            (data.feedbacks.length / data.reports.length) *
                            100
                        ).toFixed(0)}
                        % of reports responded
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaFile />
                    </div>
                    <div className="stat-title">Files sent</div>
                    <div className="stat-value">
                        {data.reports.reduce((accumulator, x) => {
                            return (accumulator +=
                                x.image_data.length +
                                x.audio_data.length +
                                x.video_data.length)
                        }, 0)}
                    </div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <FaPercentage />
                    </div>
                    <div className="stat-title">Reports with files</div>
                    <div className="stat-value">
                        {(
                            (data.reports.filter(
                                (x) =>
                                    x.image_data.length +
                                    x.audio_data.length +
                                    x.video_data.length
                            ).length /
                                data.reports.length) *
                            100
                        ).toFixed(0)}
                        %
                        <div className="py-2">
                            <ProgressBar
                                bigNum={data.reports.length}
                                smallNum={
                                    data.reports.filter(
                                        (x) =>
                                            x.image_data.length +
                                            x.audio_data.length +
                                            x.video_data.length
                                    ).length
                                }
                                delay={0.6}
                            />
                        </div>
                    </div>
                    <div className="stat-desc">
                        {
                            data.reports.filter(
                                (x) =>
                                    x.image_data.length +
                                    x.audio_data.length +
                                    x.video_data.length
                            ).length
                        }{" "}
                        out of {data.reports.length}
                    </div>
                </div>
            </div>
            <div>{children}</div>
        </DashboardLayout>
    )
}

export default Dashboard
