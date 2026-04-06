import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase2_Investigacion() {
  const [competidores, setCompetidores] = useState('')
  const guardarAnalisis = () => toast.success('Análisis guardado (simulación)')

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Fase 2: Investigación y Análisis de Mercado</h1>
        <p className="text-gray-600">Inteligencia competitiva, tendencias y oportunidades del sector.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">🔍 Análisis de la Competencia</h2>
        <textarea className="border rounded w-full p-2" rows="4" placeholder="Lista de competidores directos e indirectos..." value={competidores} onChange={e => setCompetidores(e.target.value)}></textarea>
        <button onClick={guardarAnalisis} className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Guardar análisis</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">📊 Benchmarking y Tendencias</h2>
        <p className="text-gray-700">Análisis de keywords, demanda digital, nichos desatendidos.</p>
        <button className="mt-2 bg-gray-200 px-4 py-1 rounded">Ver informe de tendencias</button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">👥 Buyer Personas</h2>
        <p className="text-gray-700">Creación de perfiles detallados con customer journey map y mapa de empatía.</p>
        <button className="mt-2 bg-purple-600 text-white px-4 py-1 rounded">Generar buyer persona</button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-bold">📦 Entregables</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>✔ Reporte de análisis competitivo completo</li>
          <li>✔ Mapa de posicionamiento competitivo</li>
          <li>✔ Buyer personas (2-3 perfiles)</li>
          <li>✔ Customer Journey Maps</li>
        </ul>
      </div>
    </div>
  )
}
