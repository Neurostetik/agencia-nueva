import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function Fase4_IdentidadVisual() {
  const [logo, setLogo] = useState(null)
  const [colores, setColores] = useState({ primario: '', secundario: '', acento: '' })
  const [tipografia, setTipografia] = useState('')

  const generarBrandbook = () => toast.success('Generando Brandbook (simulación)')
  const subirLogo = () => toast.success('Logo subido (simulación)')

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold">Fase 4: Identidad Visual y Sistema de Diseño</h1>
        <p className="text-emerald-100 mt-2">Creación del universo visual de la marca: logotipo, paleta, tipografía, brandbook y assets.</p>
      </div>

      {/* Diseño de Logotipo */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-emerald-600 text-2xl">🎨</span> Diseño de Logotipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Moodboard de inspiración visual</label>
            <textarea className="border rounded w-full p-2" rows="2" placeholder="Referencias estéticas, enlaces o descripciones"></textarea>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Rutas creativas (mínimo 3 conceptos)</label>
            <textarea className="border rounded w-full p-2" rows="2" placeholder="Concepto 1, Concepto 2, Concepto 3"></textarea>
          </div>
        </div>
        <div className="mt-2">
          <label className="block font-medium text-gray-700">Propuestas de logotipo (vectorizadas)</label>
          <button onClick={subirLogo} className="bg-gray-200 px-3 py-1 rounded text-sm">Subir archivos (simulación)</button>
        </div>
        <div className="mt-2">
          <label className="block font-medium text-gray-700">Versiones del logotipo aprobado</label>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Principal</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Secundario</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Ícono</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Monocromático</span>
            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Negativo</span>
          </div>
        </div>
      </div>

      {/* Sistema Visual Completo */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎨 Sistema Visual Completo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Paleta de colores corporativos</label>
            <input type="text" className="border rounded w-full p-2" placeholder="Primario (HEX)" value={colores.primario} onChange={e => setColores({...colores, primario: e.target.value})} />
            <input type="text" className="border rounded w-full p-2 mt-1" placeholder="Secundario" value={colores.secundario} onChange={e => setColores({...colores, secundario: e.target.value})} />
            <input type="text" className="border rounded w-full p-2 mt-1" placeholder="Acentos" value={colores.acento} onChange={e => setColores({...colores, acento: e.target.value})} />
          </div>
          <div>
            <label className="block font-medium">Tipografía corporativa</label>
            <input type="text" className="border rounded w-full p-2" placeholder="Fuente primaria" value={tipografia} onChange={e => setTipografia(e.target.value)} />
            <input type="text" className="border rounded w-full p-2 mt-1" placeholder="Fuente secundaria" />
          </div>
          <div>
            <label className="block font-medium">Elementos gráficos de soporte</label>
            <textarea className="border rounded w-full p-2" rows="2" placeholder="Patrones, texturas, formas, separadores"></textarea>
          </div>
        </div>
        <div className="mt-3">
          <label className="block font-medium">Estilo fotográfico y de ilustración</label>
          <textarea className="border rounded w-full p-2" rows="2" placeholder="Guía de estilo para fotos e ilustraciones"></textarea>
        </div>
      </div>

      {/* Brandbook */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📘 Brandbook / Manual de Identidad</h2>
        <p className="text-gray-700">Secciones: logotipo (usos correctos/incorrectos, zonas de protección), colores, tipografía, aplicaciones (papelería, digital, señalética, packaging), co-branding.</p>
        <button onClick={generarBrandbook} className="mt-3 bg-emerald-600 text-white px-4 py-2 rounded">Generar Brandbook (PDF interactivo)</button>
      </div>

      {/* Assets y Entregables */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📦 Assets y Entregables de Diseño</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Paquete de archivos de logotipo (AI, EPS, SVG, PNG, JPG)</li>
          <li>Papelería corporativa (tarjetas, membretada, sobres)</li>
          <li>Firma de correo electrónico (HTML responsive)</li>
          <li>Plantillas de presentación (PowerPoint/Keynote/Google Slides)</li>
          <li>Templates para redes sociales (editables)</li>
          <li>Favicon y app icons (todas resoluciones)</li>
        </ul>
        <button className="mt-3 bg-gray-200 px-4 py-1 rounded text-sm">Simular descarga de assets</button>
      </div>

      {/* Entregables finales */}
      <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
        <h3 className="font-bold text-emerald-800">📦 Entregables de esta fase</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>✔ Logotipo final en todas sus versiones y formatos</li>
          <li>✔ Sistema visual completo documentado</li>
          <li>✔ Brandbook / Manual de Identidad (PDF interactivo)</li>
          <li>✔ Paquete completo de papelería corporativa</li>
          <li>✔ Plantillas editables (redes, presentaciones, email)</li>
          <li>✔ Biblioteca de assets digitales organizada</li>
        </ul>
      </div>
    </div>
  )
}
