"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Card from "@/components/ui/Card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

export default function Dashboard() {
  const [summary, setSummary] = useState<any>(null)
  const [chartData, setChartData] = useState<any[]>([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data } = await supabase.rpc("get_dashboard_summary")
    if (data) setSummary(data)

    const { data: dispatch } = await supabase
      .from("dispatch")
      .select("load_qty, created_at")

    if (dispatch) {
      const grouped: any = {}

      dispatch.forEach((d: any) => {
        const date = d.created_at.slice(0, 10)
        grouped[date] = (grouped[date] || 0) + d.load_qty
      })

      const chart = Object.keys(grouped).map((date) => ({
        date,
        qty: grouped[date]
      }))

      setChartData(chart)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <Card title="Total DO" value={summary?.total_do || 0} />
        <Card title="Total Dispatch" value={summary?.total_dispatch || 0} />
        <Card title="Total Load Qty" value={summary?.total_load || 0} />
        <Card title="Shortage" value={summary?.total_shortage || 0} />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border h-96">
        <h2 className="font-semibold mb-4">Dispatch Trend</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="qty" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
