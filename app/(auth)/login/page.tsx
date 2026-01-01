'use client'

import { useActionState } from 'react'
import { login } from './actions'

export default function LoginPage() {
  // Kita definisikan initialState sebagai null atau object kosong
  // Fungsi login sekarang sesuai dengan overload yang diharapkan
  const [state, formAction, isPending] = useActionState(login, {
    message: '',
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form action={formAction} className="flex flex-col gap-4 w-80">
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded"
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          className="border p-2 rounded"
          required 
        />
        
        {/* Sekarang state.message tidak lagi dianggap 'never' */}
        {state?.message && (
          <p className="text-red-500 text-sm italic">{state.message}</p>
        )}
        
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
        >
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}