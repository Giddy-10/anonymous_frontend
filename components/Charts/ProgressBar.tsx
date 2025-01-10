"use client"
import { motion, useInView } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

interface ExpProps {
    bigNum: number
    smallNum: number
    delay?: number
}

const ProgressBar = (props: ExpProps) => {
    const [lengthPercentage, setLengthPercentage] = useState<number>()
    useEffect(() => {
        setLengthPercentage((props.smallNum / props.bigNum) * 100)
    }, [props])

    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const [hasAnimated, setHasAnimated] = useState(false)

    React.useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [isInView, hasAnimated])

    return (
        <div
            className="w-full h-2 flex flex-start p-0 shadow shadow-base-content rounded overflow-hidden"
            style={{ background: "inherit" }}
            ref={ref}
        >
            <motion.div
                className="h-full bg-[oklch(var(--s))] relative rounded-r m-0"
                initial={{ width: 0 }}
                animate={hasAnimated ? { width: `${lengthPercentage}%` } : {}}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: props.delay ? props.delay : 0,
                }}
            ></motion.div>
        </div>
    )
}

export default ProgressBar
