// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(
    () => JSON.parse(localStorage.getItem('usuario')) || null
  )

  function login(userData) {
    setUsuario(userData)
    localStorage.setItem('usuario', JSON.stringify(userData))
  }

  function logout() {
    setUsuario(null)
    localStorage.removeItem('usuario')
  }

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)