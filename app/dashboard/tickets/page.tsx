import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function TicketsPage() {
  const supabase = await createClient()
  
  // Mengambil data tiket milik user yang sedang login
  const { data: tickets, error } = await supabase
    .from('tickets')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Riwayat Komplain</h1>
          <p className="text-gray-500">Pantau status perbaikan fasilitas kamu</p>
        </div>
        <Link 
          href="/dashboard/tickets/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          + Buat Laporan
        </Link>
      </div>

      {tickets && tickets.length > 0 ? (
        <div className="grid gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center">
              {ticket.image_url && (
                <img 
                  src={ticket.image_url} 
                  alt={ticket.title} 
                  className="w-full md:w-24 h-24 object-cover rounded-lg border"
                />
              )}
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-800">{ticket.title}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase ${
                    ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
                    ticket.status === 'in_progress' ? 'bg-blue-100 text-blue-700' : 
                    'bg-green-100 text-green-700'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">{ticket.description}</p>
                <p className="text-gray-400 text-xs mt-2">
                  Dilaporkan pada: {new Date(ticket.created_at).toLocaleDateString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-dashed rounded-2xl">
          <p className="text-gray-500">Belum ada laporan kerusakan.</p>
        </div>
      )}
    </div>
  )
}