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
                Notifications
            </h3>
            <Table>
                <TableCaption>A list of your notifications.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Type</TableHead>
                        <TableHead>Text</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.notifications.map((notification, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-bold min-w-40">
                                    {notification.type}
                                </TableCell>
                                <TableCell>
                                    <div className="max-h-24 overflow-auto">
                                        {notification.text}
                                    </div>
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
