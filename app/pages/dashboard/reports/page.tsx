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
import Link from "next/link"
import { PlusCircle } from "lucide-react"

const page = () => {
    return (
        <Dashboard>
            <h3 className="font-extrabold tracking-tight text-2xl mb-4">
                Reports
            </h3>
            <div className="w-full mb-2">
                <Link
                    className="block w-fit ml-auto mr-8 rounded-btn bg-info text-info-content py-2 px-4 hover:bg-neutral hover:text-neutral-content"
                    href="/pages/dashboard/form"
                >
                    <PlusCircle className="inline mr-2" /> Write a report
                </Link>
            </div>
            <Table>
                <TableCaption>A list of your recent complaints.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Files</TableHead>
                        <TableHead className="text-right">
                            Uploaded At
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.reports.map((report, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-bold">
                                    {report.title}
                                </TableCell>
                                <TableCell>{report.type}</TableCell>
                                <TableCell>
                                    <div className="max-h-24 overflow-auto">
                                        {report.description}
                                    </div>
                                </TableCell>
                                <TableCell>{report.status}</TableCell>
                                <TableCell>
                                    {
                                        <div className="flex flex-col gap-1 justify-start max-h-24 overflow-auto">
                                            {[
                                                ...report.image_data,
                                                ...report.audio_data,
                                                ...report.video_data,
                                            ].map((filename) => (
                                                <p>{filename}</p>
                                            ))}
                                        </div>
                                    }
                                </TableCell>
                                <TableCell className="text-info text-right">
                                    {report.uploaded_at}
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
