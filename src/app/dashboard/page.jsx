import DashboardPage from '@/components/template/DashboardPage'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/api/auth/[...nextauth]/route'
import connectDB from '@/utils/connectDB'
import User from '@/models/User';

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  console.log(user)
  return (
    <DashboardPage createdAt={user.createdAt} user={user} />
  )
}

export default Dashboard