"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LogIn, PieChart, MessageSquare, Bell, FileText } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"

const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LogIn, label: "Log In", href: "/pages/login" },
    { isSeparator: true },
    { icon: FileText, label: "Write a report", href: "/pages/dashboard/form" },
    { icon: PieChart, label: "Reports", href: "/pages/dashboard/reports" },
    { icon: MessageSquare, label: "Feedback", href: "/pages/dashboard/feedback" },
    { icon: Bell, label: "Notifications", href: "/pages/dashboard/notifications" },
]

export function DashboardSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar className="border-r bg-[var(--red)]">
            <SidebarHeader className="flex items-center p-4 bg-[var(--red)] text-white">
                <span className="text-xl font-bold">Dashboard</span>
            </SidebarHeader>
            <SidebarContent className="bg-[var(--red)] text-white">
                <SidebarMenu>
                    {menuItems.map((item, index) =>
                        item.isSeparator ? (
                            <SidebarSeparator key={index} />
                        ) : item.href && item.icon ? (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={pathname === item.href}
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-2"
                                    >
                                        <item.icon className="h-4 w-4" />
                                        <span>{item.label}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ) : (
                            ""
                        )
                    )}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
