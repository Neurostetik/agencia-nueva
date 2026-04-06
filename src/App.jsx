import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Fase0 from './components/Fase0_Onboarding'
import Fase1 from './components/Fase1_Discovery'
import Fase2 from './components/Fase2_Investigacion'
import Fase3 from './components/Fase3_Branding'
import Fase4 from './components/Fase4_IdentidadVisual'
import Fase5 from './components/Fase5_UXUI'
import Fase6 from './components/Fase6_DesarrolloWeb'
import Fase7 from './components/Fase7_Contenidos'
import Fase8 from './components/Fase8_RedesSociales'
import Fase9 from './components/Fase9_EmailCRM'
import Fase10 from './components/Fase10_Automatizacion'
import Fase11 from './components/Fase11_PaidMedia'
import Fase12 from './components/Fase12_Legal'
import Fase13 from './components/Fase13_Lanzamiento'
import Fase14 from './components/Fase14_Operacion'
import Fase15 from './components/Fase15_Cierre'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex flex-wrap gap-2 justify-center sticky top-0">
          {Array.from({ length: 16 }, (_, i) => (
            <Link key={i} to={`/fase/${i}`} className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition">
              Fase {i}
            </Link>
          ))}
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/fase/0" element={<Fase0 />} />
            <Route path="/fase/1" element={<Fase1 />} />
            <Route path="/fase/2" element={<Fase2 />} />
            <Route path="/fase/3" element={<Fase3 />} />
            <Route path="/fase/4" element={<Fase4 />} />
            <Route path="/fase/5" element={<Fase5 />} />
            <Route path="/fase/6" element={<Fase6 />} />
            <Route path="/fase/7" element={<Fase7 />} />
            <Route path="/fase/8" element={<Fase8 />} />
            <Route path="/fase/9" element={<Fase9 />} />
            <Route path="/fase/10" element={<Fase10 />} />
            <Route path="/fase/11" element={<Fase11 />} />
            <Route path="/fase/12" element={<Fase12 />} />
            <Route path="/fase/13" element={<Fase13 />} />
            <Route path="/fase/14" element={<Fase14 />} />
            <Route path="/fase/15" element={<Fase15 />} />
            <Route path="*" element={<Fase0 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
