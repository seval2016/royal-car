import api from './api'

export interface User {
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

export interface UserUpdateRequest {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  city?: string
  country?: string
  address?: string
  isActive?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const userService = {
  async getAllUsers(): Promise<ApiResponse<User[]>> {
    const response = await api.get('/users')
    return response.data
  },

  async getUserById(id: number): Promise<ApiResponse<User>> {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  async updateUser(id: number, user: UserUpdateRequest): Promise<ApiResponse<User>> {
    const response = await api.put(`/users/${id}`, user)
    return response.data
  },

  async deleteUser(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/users/${id}`)
    return response.data
  },

  async deactivateUser(id: number): Promise<ApiResponse<void>> {
    const response = await api.put(`/users/${id}/deactivate`)
    return response.data
  }
}
