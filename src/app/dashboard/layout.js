import DashboardSidebar from "@/components/layout/DashboardSidebar"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";

async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);
    if (!session) redirect("/signin");
    console.log(session)
  return (
    <DashboardSidebar>
        {children}
    </DashboardSidebar>
  )
}

export default DashboardLayout