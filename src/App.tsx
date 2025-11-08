import { Route, Routes } from 'react-router-dom'

import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
