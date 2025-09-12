import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { authService, LoginRequest, LoginResponse } from '../services/authService'

interface User {
  id: number
  firstName: string
  lastName: string
  username: string
  email: string
  phoneNumber: string
  city: string
  country: string
  address: string | null
  role: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginRequest) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initAuth = () => {
      const token = authService.getToken()
      const userData = authService.getUser()
      
      if (token && userData) {
        setUser(userData)
      }
      setIsLoading(false)
    }

    initAuth()
  }, [])

  const login = async (credentials: LoginRequest) => {
    try {
      const response: LoginResponse = await authService.login(credentials)
      
      if (response.success) {
        localStorage.setItem('adminToken', response.data.accessToken)
        localStorage.setItem('adminUser', JSON.stringify(response.data.user))
        setUser(response.data.user)
      } else {
        throw new Error(response.message)
      }
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
