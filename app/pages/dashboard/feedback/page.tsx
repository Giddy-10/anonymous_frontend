import React from "react"
import Dashboard from "../page"

import data from "@/utils/database.json"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const page = () => {
    return (
        <Dashboard>
            <h3 className="font-extrabold tracking-tight text-2xl mb-4">
                Feedback
            </h3>
            <Table>
                <TableCaption>A list of feedback.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">
                            Uploaded At
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.feedbacks.map((feedback, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-bold">
                                    {feedback.title}
                                </TableCell>
                                <TableCell>
                                    <div className="max-h-24 overflow-auto">
                                        {feedback.text}
                                    </div>
                                </TableCell>
                                <TableCell className="text-info text-right">
                                    {feedback.uploaded_at}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Dashboard>
    )
}

export default page
