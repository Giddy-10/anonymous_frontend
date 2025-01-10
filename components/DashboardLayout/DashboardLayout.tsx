"use client"

import { DashboardSidebar } from "./DashboardSidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen>
            <div className="flex h-screen">
                <DashboardSidebar />
                <SidebarInset className="flex-grow">
                    <div className="flex h-16 items-center border-b px-4">
                        <SidebarTrigger />
                    </div>
                    <main className="p-4">{children}</main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
