import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ProjectList from './components/ProjectList'
import ProjectForm from './components/ProjectForm'
import Fase0_Onboarding from './components/Fase0_Onboarding'
import { supabase } from './services/supabaseClient'
import { Toaster } from 'react-hot-toast'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96 text-center">
          <h1 className="text-2xl font-bold mb-4">Sistema de Agencia Digital</h1>
          <button
            onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Iniciar sesión con Google
          </button>
          <p className="text-xs text-gray-500 mt-4">Solo para equipo autorizado</p>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectList />} />
          <Route path="proyecto/nuevo" element={<ProjectForm />} />
          <Route path="proyecto/:id/fase/0" element={<Fase0_Onboarding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
