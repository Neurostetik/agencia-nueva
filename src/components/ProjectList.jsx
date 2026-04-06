import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'

export default function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  async function loadProjects() {
    const { data, error } = await supabase
      .from('proyectos')
      .select('*')
      .order('created_at', { ascending: false })
    if (data) setProjects(data)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Proyectos</h1>
        <Link to="/proyecto/nuevo" className="bg-green-600 text-white px-3 py-1 rounded">+ Nuevo proyecto</Link>
      </div>
      <div className="grid gap-4">
        {projects.map(p => (
          <div key={p.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">{p.nombre || 'Sin nombre'}</p>
              <p className="text-sm text-gray-500">Creado: {new Date(p.created_at).toLocaleDateString()}</p>
            </div>
            <Link to={`/proyecto/${p.id}/fase/0`} className="text-blue-600">Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
