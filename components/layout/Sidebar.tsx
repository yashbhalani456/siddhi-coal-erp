"use client"

import Link from "next/link"
import { LayoutDashboard, FileText, Truck, BarChart } from "lucide-react"

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Delivery Orders", href: "/do", icon: FileText },
  { name: "Dispatch", href: "/dispatch", icon: Truck },
  { name: "Reports", href: "/reports", icon: BarChart }
]

export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r flex flex-col items-center py-6 space-y-6 shadow-sm">
      <div className="text-indigo-600 font-bold text-lg">SC</div>

      {menu.map((item, i) => {
        const Icon = item.icon
        return (
          <Link
            key={i}
            href={item.href}
            className="p-3 rounded-lg hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition"
          >
            <Icon size={22} />
          </Link>
        )
      })}
    </div>
  )
}
