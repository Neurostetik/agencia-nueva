import React, { useState } from 'react'

const estilos = [
  { nombre: 'Minimalista', precio: 25, imagen: 'https://picsum.photos/id/1/200/150' },
  { nombre: 'Ilustración plana', precio: 45, imagen: 'https://picsum.photos/id/10/200/150' },
  { nombre: 'Fotografía auténtica', precio: 80, imagen: 'https://picsum.photos/id/20/200/150' }
]

export default function CarruselImagenes() {
  const [seleccion, setSeleccion] = useState({})
  const [recomendacion, setRecomendacion] = useState('')

  const toggle = (nombre) => setSeleccion(prev => ({ ...prev, [nombre]: !prev[nombre] }))

  const recomendar = () => {
    const seleccionados = Object.keys(seleccion).filter(k => seleccion[k])
    if (seleccionados.length === 0) return setRecomendacion('Selecciona al menos un estilo')
    setRecomendacion(`✅ Recomendación: invierte 70% en ${seleccionados[0]} y 30% en otro.`)
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Carrusel de estilos de imagen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {estilos.map(e => (
          <div key={e.nombre} className="border p-2 rounded">
            <img src={e.imagen} alt={e.nombre} className="w-full h-32 object-cover rounded" />
            <p className="font-bold">{e.nombre}</p>
            <p>Precio: ${e.precio} USD</p>
            <button onClick={() => toggle(e.nombre)} className={`px-2 py-1 rounded ${seleccion[e.nombre] ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>
              {seleccion[e.nombre] ? 'Seleccionado' : 'Seleccionar'}
            </button>
          </div>
        ))}
      </div>
      <button onClick={recomendar} className="mt-2 bg-purple-600 text-white px-3 py-1 rounded">Recomendar</button>
      {recomendacion && <p className="mt-2 p-2 bg-blue-50 rounded">{recomendacion}</p>}
    </div>
  )
}
