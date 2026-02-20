import "../styles/globals.css"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"

export const metadata = {
  title: "Siddhi Coal ERP"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
