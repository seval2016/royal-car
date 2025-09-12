import api from './api'

export interface LoginRequest {
  usernameOrEmail: string
  password: string
}

export interface LoginResponse {
  success: boolean
  message: string
  data: {
    accessToken: string
    refreshToken: string
    tokenType: string
    expiresIn: number
    user: {
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
  }
  timestamp: string
}

export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await api.post('/auth/login', credentials)
    return response.data
  },

  async logout(): Promise<void> {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
  },

  getToken(): string | null {
    return localStorage.getItem('adminToken')
  },

  getUser(): any | null {
    const user = localStorage.getItem('adminUser')
    return user ? JSON.parse(user) : null
  },

  isAuthenticated(): boolean {
    return !!this.getToken()
  }
}
