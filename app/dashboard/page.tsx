import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Jika tidak ada user (tambahan proteksi di level page)
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Selamat Datang di Dashboard!</h1>
      <p className="mt-2 text-gray-600">Email kamu: {user.email}</p>
      
      <div className="mt-8 p-4 bg-green-100 border border-green-400 rounded-lg">
        <p className="text-green-700 font-medium">
          ✅ Middleware Berhasil! Kamu hanya bisa melihat ini karena sudah login.
        </p>
      </div>
    </div>
  )
}