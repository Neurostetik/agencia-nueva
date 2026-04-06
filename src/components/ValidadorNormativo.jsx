import React, { useState } from 'react'

export default function ValidadorNormativo() {
  const [texto, setTexto] = useState('')
  const [warnings, setWarnings] = useState([])

  const validar = () => {
    let warns = []
    if (texto.toLowerCase().includes('garantía') && !texto.toLowerCase().includes('términos')) warns.push('PROFECO: La garantía debe detallarse')
    if (texto.toLowerCase().includes('cura')) warns.push('COFEPRIS: No se puede prometer cura sin respaldo')
    setWarnings(warns)
  }

  return (
    <div className="bg-white p-3 rounded shadow mt-4">
      <h3 className="font-bold">Validador legal (México)</h3>
      <textarea className="border w-full p-2" rows="3" value={texto} onChange={e => setTexto(e.target.value)} placeholder="Pega texto a validar..."></textarea>
      <button onClick={validar} className="bg-yellow-600 text-white px-3 py-1 rounded">Validar</button>
      {warnings.map(w => <p key={w} className="text-red-600 mt-2">⚠️ {w}</p>)}
      {warnings.length === 0 && texto && <p className="text-green-600 mt-2">✅ Sin problemas evidentes</p>}
    </div>
  )
}
