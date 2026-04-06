import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import { generateContractDocx } from '../services/documentGenerator'
import toast from 'react-hot-toast'

export default function Fase0_Onboarding() {
  const { id } = useParams()
  const [formData, setFormData] = useState({ empresa: '', contacto: '', email: '', presupuesto: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const { data } = await supabase.from('proyectos').select('fase0_data').eq('id', id).single()
    if (data?.fase0_data) setFormData(data.fase0_data)
  }

  async function guardarYGenerar() {
    setLoading(true)
    await supabase.from('proyectos').update({ fase0_data: formData, fase0_completada: true }).eq('id', id)
    const blob = await generateContractDocx(formData)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `contrato_${formData.empresa || 'cliente'}.docx`
    a.click()
    toast.success('Contrato generado y datos guardados')
    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Fase 0: Onboarding</h1>
      <div className="bg-white p-4 rounded shadow mt-4 space-y-3">
        <input className="border p-2 w-full" placeholder="Empresa" value={formData.empresa} onChange={e => setFormData({...formData, empresa: e.target.value})} />
        <input className="border p-2 w-full" placeholder="Contacto" value={formData.contacto} onChange={e => setFormData({...formData, contacto: e.target.value})} />
        <input className="border p-2 w-full" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        <input className="border p-2 w-full" placeholder="Presupuesto USD" value={formData.presupuesto} onChange={e => setFormData({...formData, presupuesto: e.target.value})} />
        <button onClick={guardarYGenerar} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Procesando...' : 'Guardar y generar contrato DOCX'}
        </button>
      </div>
    </div>
  )
}
