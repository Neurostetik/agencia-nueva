import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase2_Investigacion() {
  const [competidores, setCompetidores] = useState('')
  const [keywords, setKeywords] = useState('')
  const [personas, setPersonas] = useState([])

  const guardarAnalisis = () => {
    toast.success('Análisis guardado (simulación)')
  }

  const generarReporte = () => {
    toast.success('Generando reporte de investigación (simulación)')
  }

  const agregarPersona = () => {
    toast.success('Buyer persona agregada (simulación)')
  }

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Fase 2: Investigación y Análisis de Mercado</h1>
        <p className="text-purple-100 mt-2">Inteligencia competitiva, tendencias y oportunidades del sector.</p>
      </div>

      {/* Análisis de la Competencia */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-purple-600 text-2xl">🔍</span> Análisis de la Competencia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Competidores directos (mínimo 5)</label>
            <textarea className="border rounded w-full p-2" rows="3" placeholder="Ej: Competidor A, Competidor B..." value={competidores} onChange={e => setCompetidores(e.target.value)}></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Competidores indirectos</label>
            <textarea className="border rounded w-full p-2" rows="3" placeholder="Ej: Alternativas sustitutas..."></textarea>
          </div>
        </div>
        <div className="mt-3">
          <label className="block font-medium text-gray-700">Fortalezas y debilidades competitivas</label>
          <textarea className="border rounded w-full p-2" rows="2" placeholder="Análisis de propuesta de valor, precios, presencia digital..."></textarea>
        </div>
        <button onClick={guardarAnalisis} className="mt-3 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700">Guardar análisis</button>
      </div>

      {/* Investigación de Mercado */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-purple-600 text-2xl">📊</span> Investigación de Mercado
        </h2>
        <div className="space-y-3">
          <div>
            <label className="block font-medium text-gray-700">Análisis del sector e industria (tamaño, crecimiento, regulaciones)</label>
            <textarea className="border rounded w-full p-2" rows="2"></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Tendencias de consumo y comportamiento</label>
            <textarea className="border rounded w-full p-2" rows="2"></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Análisis de keywords y demanda digital</label>
            <input type="text" className="border rounded w-full p-2" placeholder="Ej: palabras clave principales" value={keywords} onChange={e => setKeywords(e.target.value)} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Benchmarking de mejores prácticas del sector</label>
            <textarea className="border rounded w-full p-2" rows="2" placeholder="Referentes nacionales e internacionales"></textarea>
          </div>
        </div>
        <button onClick={generarReporte} className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Generar reporte de mercado</button>
      </div>

      {/* Definición del Público Objetivo */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-purple-600 text-2xl">👥</span> Buyer Personas y Customer Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Segmentación demográfica</label>
            <input className="border rounded w-full p-2" placeholder="Edad, género, ubicación, ingresos..." />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Segmentación psicográfica</label>
            <input className="border rounded w-full p-2" placeholder="Valores, intereses, estilo de vida..." />
          </div>
        </div>
        <div className="mt-3">
          <label className="block font-medium text-gray-700">Buyer Personas (mínimo 2-3 perfiles)</label>
          <textarea className="border rounded w-full p-2" rows="3" placeholder="Nombre, historia, pain points, objetivos..."></textarea>
          <button onClick={agregarPersona} className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm">+ Agregar buyer persona</button>
        </div>
        <div className="mt-3">
          <label className="block font-medium text-gray-700">Customer Journey Map por persona</label>
          <textarea className="border rounded w-full p-2" rows="2" placeholder="Etapas: descubrimiento, consideración, decisión, lealtad"></textarea>
        </div>
        <button className="mt-3 bg-purple-600 text-white px-4 py-1 rounded">Generar mapa de empatía</button>
      </div>

      {/* Entregables */}
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h3 className="font-bold text-purple-800">📦 Entregables de esta fase</h3>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li>✔ Reporte de análisis competitivo completo</li>
          <li>✔ Mapa de posicionamiento competitivo</li>
          <li>✔ Reporte de investigación de mercado</li>
          <li>✔ Análisis de keywords y demanda digital</li>
          <li>✔ Fichas de Buyer Personas (2-3 perfiles)</li>
          <li>✔ Customer Journey Maps por persona</li>
          <li>✔ Mapas de empatía</li>
        </ul>
      </div>
    </div>
  )
}
