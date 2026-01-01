'use client'

import { useActionState } from 'react'
import { signup } from './actions'
import Link from 'next/link'

export default function SignupPage() {
  // Hubungkan UI dengan server action di folder yang sama
  const [state, formAction, isPending] = useActionState(signup, {
    message: '',
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border border-gray-100">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          RentFlow
        </h1>
        <p className="text-center text-gray-500 mb-8">Buat akun untuk kelola hunianmu</p>
        
        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="nama@email.com" 
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="Minimal 6 karakter" 
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              required 
            />
          </div>
          
          {/* Menampilkan pesan sukses atau error */}
          {state?.message && (
            <div className={`p-3 rounded-lg text-sm ${state.message.includes('berhasil') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              {state.message}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold hover:bg-blue-700 disabled:bg-gray-400 transition-colors shadow-lg shadow-blue-200"
          >
            {isPending ? 'Sedangkan Mendaftarkan...' : 'Daftar Sekarang'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  )
}