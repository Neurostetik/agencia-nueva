import React, { useState } from 'react'

export default function SimuladorROI() {
  const [presupuesto, setPresupuesto] = useState(1000)
  const [resultado, setResultado] = useState(null)

  const simular = () => {
    const leads = Math.floor(presupuesto / 10)
    setResultado({ leads, costoLead: (presupuesto / leads).toFixed(2) })
  }

  return (
    <div className="bg-white p-3 rounded shadow mt-4">
      <h3 className="font-bold">Simulador de ROI</h3>
      <input type="number" value={presupuesto} onChange={e => setPresupuesto(Number(e.target.value))} className="border p-1 mr-2" />
      <button onClick={simular} className="bg-blue-600 text-white px-3 py-1 rounded">Simular</button>
      {resultado && <p className="mt-2">Leads estimados: {resultado.leads} | Costo por lead: ${resultado.costoLead}</p>}
    </div>
  )
}
