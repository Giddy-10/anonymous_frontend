"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"

const DashboardRerouter = () => {
    const router = useRouter()
    const pathname = usePathname()
    if (pathname == "/pages/dashboard") {
        router.replace("/pages/dashboard/reports")
    }
    return <div></div>
}

export default DashboardRerouter
