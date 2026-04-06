import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'

export default function Layout() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Agencia Digital</Link>
        <button onClick={handleLogout} className="text-red-500 text-sm">Cerrar sesión</button>
      </header>
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  )
}
