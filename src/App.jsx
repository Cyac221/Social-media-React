import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistroPage from './pages/RegistroPage'
import PerfilPage from './pages/PerfilPage'
import ChatPage from './pages/ChatPage'
import ConfiguracionPage from './pages/ConfiguracionPage'
import GruposPage from './pages/GruposPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/login"         element={<LoginPage />} />
        <Route path="/registro"      element={<RegistroPage />} />
        <Route path="/perfil"        element={<PerfilPage />} />
        <Route path="/chat"          element={<ChatPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
        <Route path="/grupos"        element={<GruposPage />} />
      </Routes>
    </BrowserRouter>
  )
}
