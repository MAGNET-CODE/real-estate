import DashboardSidebar from "@/components/layout/DashboardSidebar"

function DashboardLayout({ children }) {
  return (
    <DashboardSidebar>
        {children}
    </DashboardSidebar>
  )
}

export default DashboardLayout