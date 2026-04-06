import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase1_Discovery() {
  const [brief, setBrief] = useState({
    empresa: '',
    mision: '',
    vision: '',
    producto: '',
    objetivos: ''
  })

  const handleChange = (e) => {
    setBrief({ ...brief, [e.target.name]: e.target.value })
  }

  const guardarBrief = () => {
    // Aquí luego se conectará con base de datos o generación de PDF
    toast.success('Brief guardado (simulación)')
    console.log(brief)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800">Fase 1: Discovery & Brief Estratégico</h1>
        <p className="text-gray-600 mt-2">Recolección profunda de información y definición del ADN del negocio.</p>
      </div>

      {/* Cuestionario Maestro */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">📋 Cuestionario Maestro del Proyecto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Nombre de la empresa</label>
            <input type="text" name="empresa" className="border rounded w-full p-2" value={brief.empresa} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium">Misión</label>
            <input type="text" name="mision" className="border rounded w-full p-2" value={brief.mision} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium">Visión</label>
            <input type="text" name="vision" className="border rounded w-full p-2" value={brief.vision} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium">Producto o servicio principal</label>
            <input type="text" name="producto" className="border rounded w-full p-2" value={brief.producto} onChange={handleChange} />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium">Objetivos de negocio (corto, mediano y largo plazo)</label>
            <textarea name="objetivos" rows="3" className="border rounded w-full p-2" value={brief.objetivos} onChange={handleChange}></textarea>
          </div>
        </div>
        <button onClick={guardarBrief} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar Brief</button>
      </div>

      {/* Entrevista Estratégica */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">🎙️ Entrevista Estratégica Profunda</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Sesión de inmersión con el fundador (historia, motivación, sueño del negocio)</li>
          <li>Workshop de descubrimiento de marca (arquetipos, personalidad, promesa)</li>
          <li>Mapeo de stakeholders (quienes influyen, deciden y consumen)</li>
          <li>Análisis FODA preliminar (fortalezas, oportunidades, debilidades, amenazas)</li>
        </ul>
        <button className="mt-3 bg-gray-200 text-gray-800 px-3 py-1 rounded">Simular grabación de entrevista</button>
      </div>

      {/* Documento de Brief */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">📄 Documento de Brief Estratégico</h2>
        <p className="text-gray-700">Compilación y validación de información. Documento formal resumen ejecutivo.</p>
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded">Generar Brief en PDF</button>
      </div>

      {/* Entregables */}
      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-bold">📦 Entregables de esta fase</h3>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          <li>✔ Cuestionario maestro completado (100%)</li>
          <li>✔ Grabación y transcripción de entrevista estratégica</li>
          <li>✔ Documento de Brief Estratégico aprobado</li>
          <li>✔ FODA preliminar documentado</li>
          <li>✔ Mapa de stakeholders</li>
        </ul>
      </div>
    </div>
  )
}
