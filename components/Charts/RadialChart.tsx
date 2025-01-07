"use client"
import { motion, useInView } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

interface ExpProps {
    bigNum: number
    smallNum: number
    delay?: number
}

const RadialChart = (props: ExpProps) => {
    const [angle, setAngle] = useState<number>()
    useEffect(() => {
        setAngle((props.smallNum / props.bigNum) * 360)
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
            className="h-full aspect-square"
            style={{ background: "inherit" }}
            ref={ref}
        >
            <motion.div
                className="h-full w-full relative rounded p-2"
                initial={{
                    backgroundImage: `conic-gradient(oklch(var(--s)) 0deg, transparent 0deg)`,
                }}
                animate={
                    hasAnimated
                        ? {
                              backgroundImage: `conic-gradient(oklch(var(--s)) ${angle}deg, transparent ${angle}deg)`,
                          }
                        : {}
                }
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: props.delay ? props.delay : 0,
                }}
                style={{
                    background: "inherit",
                    borderRadius: "50%",
                }}
            >
                <div
                    className="h-full w-full bg-base-100 flex justify-center items-center"
                    style={{ borderRadius: "50%" }}
                >
                    <motion.div
                        initial={{ scale: 0.2, opacity: 0 }}
                        animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 6,
                            restSpeed: 0.2,
                            delay: props.delay ? props.delay + 0.2 : 0,
                        }}
                    >
                        {((props.smallNum / props.bigNum) * 100).toFixed(0)}%
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default RadialChart
