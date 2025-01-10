"use client"
import React from "react"
import { motion } from "framer-motion"

interface ExpProps {
    radioName: string
    radioValues: string[]
    required: boolean
}

const TextRadio = (props: ExpProps) => {
    return (
        <div className="flex flex-wrap gap-4">
            {props.radioValues.map((currRadio) => (
                <motion.label
                    className="label cursor-pointer border-2 py-1 px-2 text-radio-label rounded-xl"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    key={currRadio}
                >
                    {currRadio}
                    <input
                        className="hidden"
                        type="radio"
                        name={props.radioName}
                        value={currRadio}
                        required={props.required}
                    />
                </motion.label>
            ))}
        </div>
    )
}

export default TextRadio
