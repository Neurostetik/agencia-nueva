import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import toast from 'react-hot-toast'

export default function ProjectForm() {
  const [nombre, setNombre] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase
      .from('proyectos')
      .insert({ nombre })
      .select()
    if (error) {
      toast.error('Error al crear proyecto')
    } else {
      toast.success('Proyecto creado')
      navigate(`/proyecto/${data[0].id}/fase/0`)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Nuevo proyecto</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Nombre del cliente / proyecto</label>
        <input className="border rounded w-full p-2 mb-4" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
          {loading ? 'Creando...' : 'Crear proyecto'}
        </button>
      </form>
    </div>
  )
}
