import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase1_Discovery() {
  const [brief, setBrief] = useState({
    empresa: '',
    mision: '',
    vision: '',
    valores: '',
    producto: '',
    objetivos: '',
    publico: '',
    presupuesto: ''
  })

  const handleChange = (e) => {
    setBrief({ ...brief, [e.target.name]: e.target.value })
  }

  const guardarBrief = () => {
    toast.success('Brief guardado correctamente (simulación)')
    console.log('Datos del brief:', brief)
  }

  const generarPDF = () => {
    toast.success('Generando PDF del Brief (simulación)')
  }

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Fase 1: Discovery & Brief Estratégico</h1>
        <p className="text-blue-100 mt-2">Recolección profunda de información y definición del ADN del negocio.</p>
      </div>

      {/* Cuestionario Maestro */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-blue-600 text-2xl">📋</span> Cuestionario Maestro del Proyecto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Nombre de la empresa / emprendedor</label>
            <input type="text" name="empresa" className="border rounded w-full p-2" value={brief.empresa} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Misión</label>
            <input type="text" name="mision" className="border rounded w-full p-2" value={brief.mision} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Visión</label>
            <input type="text" name="vision" className="border rounded w-full p-2" value={brief.vision} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Valores</label>
            <input type="text" name="valores" className="border rounded w-full p-2" value={brief.valores} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Producto o servicio principal</label>
            <input type="text" name="producto" className="border rounded w-full p-2" value={brief.producto} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Público objetivo preliminar</label>
            <input type="text" name="publico" className="border rounded w-full p-2" value={brief.publico} onChange={handleChange} />
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">Objetivos de negocio (corto, mediano y largo plazo)</label>
            <textarea name="objetivos" rows="3" className="border rounded w-full p-2" value={brief.objetivos} onChange={handleChange}></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Presupuesto de inversión en marketing (mensual)</label>
            <input type="text" name="presupuesto" className="border rounded w-full p-2" value={brief.presupuesto} onChange={handleChange} />
          </div>
        </div>
        <button onClick={guardarBrief} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Guardar Brief</button>
      </div>

      {/* Entrevista Estratégica */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-blue-600 text-2xl">🎙️</span> Entrevista Estratégica Profunda
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Sesión de inmersión con el fundador:</strong> historia, motivación, sueño del negocio.</li>
          <li><strong>Workshop de descubrimiento de marca:</strong> arquetipos, personalidad, promesa de marca.</li>
          <li><strong>Mapeo de stakeholders:</strong> quiénes influyen, deciden y consumen.</li>
          <li><strong>Análisis FODA preliminar:</strong> fortalezas, oportunidades, debilidades, amenazas.</li>
        </ul>
        <button className="mt-3 bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 transition">Simular grabación de entrevista</button>
      </div>

      {/* Documento de Brief */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-blue-600 text-2xl">📄</span> Documento de Brief Estratégico
        </h2>
        <p className="text-gray-700">Compilación y validación de información. Documento formal resumen ejecutivo del proyecto.</p>
        <button onClick={generarPDF} className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Generar Brief en PDF</button>
      </div>

      {/* Entregables */}
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="font-bold text-blue-800">📦 Entregables de esta fase</h3>
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
