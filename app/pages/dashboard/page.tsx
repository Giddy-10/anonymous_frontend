import ProgressBar from "@/components/Charts/ProgressBar"
import RadialChart from "@/components/Charts/RadialChart"
import DashboardCard from "@/components/Dashboard/DashboardCard"
import DashboardNotifications from "@/components/Dashboard/DashboardNotifications"
import { notificationsData, feedbackData, historyData } from "@/utils/data.json"
import React from "react"
import { BiBell, BiMessage } from "react-icons/bi"
import { FaFile, FaPercentage } from "react-icons/fa"
import { FcCalculator } from "react-icons/fc"
import { GiNinjaHead } from "react-icons/gi"
import { RiReplyFill } from "react-icons/ri"

const page = () => {
    return (
        <>
            <div className="flex flex-row gap-2 mt-60 md:mt-32 w-[100vw]">
                <div className="flex flex-col gap-10 py-8">
                    <DashboardCard
                        className={"flex flex-col gap-8"}
                        link={"/pages/dashboard/form"}
                    >
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight px-4 pb-2 border-b-2 border-base-content transition-colors">
                            <GiNinjaHead className="inline" /> Send an Anonymous
                            Message
                        </h3>
                        <p className="block px-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero sapiente alias architecto quod natus
                            nobis voluptate officia delectus? Nisi officia
                            tempore fuga sapiente, amet eius dolorem cumque
                            fugit eum totam.
                        </p>
                    </DashboardCard>
                    <DashboardCard
                        className={"flex flex-col gap-8"}
                        link={"/pages/dashboard/stats"}
                    >
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight px-4 pb-2 border-b-2 border-base-content transition-colors">
                            <BiBell className="inline" /> Notifications
                        </h3>
                        <div className="overflow-y-hidden px-4">
                            {notificationsData.map((notif) => (
                                <DashboardNotifications
                                    data={notif}
                                    key={notif.text}
                                />
                            ))}
                        </div>
                    </DashboardCard>
                    <DashboardCard
                        className={"flex md:hidden flex-col gap-8"}
                        link={"/pages/dashboard/stats"}
                    >
                        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight px-4 pb-2 border-b-2 border-base-content transition-colors">
                            <FcCalculator className="inline" /> Stats
                        </h3>
                        <div className="h-full flex justify-center items-center">
                            <div className="stats stats-vertical shadow">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <BiMessage />
                                    </div>
                                    <div className="stat-title">
                                        Messages sent
                                    </div>
                                    <div className="stat-value">
                                        {historyData.length}
                                    </div>
                                </div>
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
                                    <div className="stat-figure text-secondary">
                                        <FaFile />
                                    </div>
                                    <div className="stat-title">Files sent</div>
                                    <div className="stat-value">
                                        {historyData.reduce(
                                            (accumulator, x) => {
                                                return (accumulator +=
                                                    x.files.length)
                                            },
                                            0
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DashboardCard>
                </div>
                <div className="hidden md:block w-fit px-4 py-8">
                    <div className="stats stats-vertical shadow sticky top-8 max-h-[85dvh]">
                        <div className="absolute bg-info w-2 aspect-square rounded-full right-[8px] top-[8px] animate-ping"></div>
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
                                <RiReplyFill />
                            </div>
                            <div className="stat-title">Feedback received</div>
                            <div className="stat-value">
                                {feedbackData.length}
                            </div>
                            <div className="stat-desc">
                                {(
                                    (feedbackData.length / historyData.length) *
                                    100
                                ).toFixed(0)}
                                % of messages responded
                            </div>
                            <div className="w-[50%] ml-auto mt-4">
                                <RadialChart
                                    bigNum={historyData.length}
                                    smallNum={feedbackData.length}
                                    delay={0.2}
                                />
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
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaPercentage />
                            </div>
                            <div className="stat-title">
                                Messages with files
                            </div>
                            <div className="stat-value">
                                {(
                                    (historyData.filter((x) => x.files.length)
                                        .length /
                                        historyData.length) *
                                    100
                                ).toFixed(0)}
                                %
                                <div className="py-2">
                                    <ProgressBar
                                        bigNum={historyData.length}
                                        smallNum={
                                            historyData.filter(
                                                (x) => x.files.length
                                            ).length
                                        }
                                        delay={0.6}
                                    />
                                </div>
                            </div>
                            <div className="stat-desc">
                                {
                                    historyData.filter((x) => x.files.length)
                                        .length
                                }{" "}
                                out of {historyData.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
