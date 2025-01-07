"use client"
import React, { ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { CgChevronRight } from "react-icons/cg"
import { useRouter } from "next/navigation"
import ClickHere from "../Instructions/ClickHere"

interface PropsWithChildren {
    children: ReactNode
    className?: string
    link?: string
}

const DashboardCard = ({ children, className, link }: PropsWithChildren) => {
    const [displayLink, setDisplayLink] = useState(false)
    const router = useRouter()
    return (
        <motion.div
            className={`dashboard-card relative mx-8 md:mx-4 h-72 md:h-80 border-2 border-base-content px-2 md:p-4 rounded-l-[50px] rounded-r-md shadow-xl shadow-base-content overflow-hidden ${className}`}
            whileHover={{ padding: 0, scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onHoverStart={() => {
                setDisplayLink(true)
            }}
            onHoverEnd={() => {
                setDisplayLink(false)
            }}
            onClick={() => (link ? router.push(link) : "")}
        >
            <div className="block md:hidden h-full w-full">
                <ClickHere />
            </div>

            {children}
            {displayLink && link && (
                <a
                    href={link}
                    className="absolute primary-radial-gradient text-info-content h-full w-full opacity-100 flex flex-row justify-end items-center p-4 always-visible"
                >
                    <CgChevronRight size={50} />
                </a>
            )}
        </motion.div>
    )
}

export default DashboardCard
