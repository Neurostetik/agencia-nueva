import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase3_Branding() {
  const [naming, setNaming] = useState('')
  const [propuesta, setPropuesta] = useState('')
  const [personalidad, setPersonalidad] = useState('')

  const guardarMarca = () => toast.success('Plataforma de marca guardada (simulación)')
  const generarManifiesto = () => toast.success('Manifiesto generado (simulación)')

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Fase 3: Branding Estratégico</h1>
        <p className="text-amber-100 mt-2">Construcción del ADN, personalidad y posicionamiento de marca.</p>
      </div>

      {/* Naming */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-amber-600 text-2xl">🏷️</span> Naming (Creación de Nombre)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Opciones de nombre (mínimo 10-20)</label>
            <textarea className="border rounded w-full p-2" rows="3" placeholder="Lista de propuestas..."></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Evaluación lingüística y fonética</label>
            <textarea className="border rounded w-full p-2" rows="3" placeholder="Pronunciabilidad, memorabilidad, connotaciones"></textarea>
          </div>
        </div>
        <div className="mt-3">
          <label className="block font-medium text-gray-700">Shortlist (3-5 opciones con justificación)</label>
          <textarea className="border rounded w-full p-2" rows="2" placeholder="Opciones finales y por qué"></textarea>
        </div>
        <div className="mt-3">
          <label className="block font-medium text-gray-700">Nombre final seleccionado</label>
          <input type="text" className="border rounded w-full p-2" placeholder="Nombre aprobado" value={naming} onChange={e => setNaming(e.target.value)} />
        </div>
        <button className="mt-3 bg-amber-600 text-white px-4 py-1 rounded">Verificar disponibilidad (dominio, redes, IMPI)</button>
      </div>

      {/* Plataforma de Marca */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-amber-600 text-2xl">✨</span> Plataforma de Marca
        </h2>
        <div className="space-y-3">
          <div><label className="block font-medium">Propósito de marca (Brand Purpose)</label><input className="border rounded w-full p-2" placeholder="Por qué existe más allá de vender" /></div>
          <div><label className="block font-medium">Promesa de marca (Brand Promise)</label><input className="border rounded w-full p-2" placeholder="Qué garantiza al cliente" /></div>
          <div><label className="block font-medium">Propuesta única de valor (UVP)</label><input className="border rounded w-full p-2" placeholder="Diferenciador claro vs competencia" /></div>
          <div><label className="block font-medium">Posicionamiento de marca</label><textarea className="border rounded w-full p-2" rows="2" placeholder="Statement formal de posicionamiento"></textarea></div>
          <div><label className="block font-medium">Personalidad de marca (arquetipos)</label><input className="border rounded w-full p-2" placeholder="Ej: Héroe, Creador, Explorador..." value={personalidad} onChange={e => setPersonalidad(e.target.value)} /></div>
          <div><label className="block font-medium">Tono y voz de marca</label><textarea className="border rounded w-full p-2" rows="2" placeholder="Cómo habla, glosario, ejemplos permitidos y prohibidos"></textarea></div>
          <div><label className="block font-medium">Manifiesto de marca</label><textarea className="border rounded w-full p-2" rows="3" placeholder="Texto fundacional y declaración de intención"></textarea></div>
          <div><label className="block font-medium">Tagline / Slogan</label><input className="border rounded w-full p-2" placeholder="Frase memorable" /></div>
        </div>
        <button onClick={guardarMarca} className="mt-3 bg-amber-600 text-white px-4 py-1 rounded">Guardar plataforma de marca</button>
        <button onClick={generarManifiesto} className="mt-3 ml-2 bg-gray-600 text-white px-4 py-1 rounded">Generar manifiesto</button>
      </div>

      {/* Estrategia de Comunicación */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📢 Estrategia de Comunicación</h2>
        <div><label className="block font-medium">Mensajes clave por audiencia</label><textarea className="border rounded w-full p-2" rows="2"></textarea></div>
        <div className="mt-2"><label className="block font-medium">Pilares de contenido (3-5 ejes temáticos)</label><input className="border rounded w-full p-2" placeholder="Ej: educación, comunidad, producto" /></div>
        <div className="mt-2"><label className="block font-medium">Narrativa de marca (Brand Story)</label><textarea className="border rounded w-full p-2" rows="2"></textarea></div>
        <div className="mt-2"><label className="block font-medium">Elevator Pitch (30 segundos)</label><textarea className="border rounded w-full p-2" rows="2"></textarea></div>
      </div>

      {/* Entregables */}
      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
        <h3 className="font-bold text-amber-800">📦 Entregables</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>✔ Documento de naming con justificación</li>
          <li>✔ Certificados de disponibilidad (dominio, redes, legal)</li>
          <li>✔ Plataforma de marca completa (Brand Platform)</li>
          <li>✔ Manual de tono y voz de marca</li>
          <li>✔ Manifiesto de marca</li>
          <li>✔ Estrategia de comunicación y pilares de contenido</li>
        </ul>
      </div>
    </div>
  )
}
