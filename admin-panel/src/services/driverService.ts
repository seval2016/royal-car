import api from './api'

export interface Driver {
  id: number
  name: string
  surname: string
  email: string
  image: string
  experience: number
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface DriverCreateRequest {
  name: string
  surname: string
  email: string
  image: string
  experience: number
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  isActive: boolean
}

export interface DriverUpdateRequest {
  name?: string
  surname?: string
  email?: string
  image?: string
  experience?: number
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
  isActive?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const driverService = {
  async getAllDrivers(): Promise<ApiResponse<Driver[]>> {
    const response = await api.get('/drivers')
    return response.data
  },

  async getDriverById(id: number): Promise<ApiResponse<Driver>> {
    const response = await api.get(`/drivers/${id}`)
    return response.data
  },

  async createDriver(driver: DriverCreateRequest): Promise<ApiResponse<Driver>> {
    const response = await api.post('/drivers', driver)
    return response.data
  },

  async updateDriver(id: number, driver: DriverUpdateRequest): Promise<ApiResponse<Driver>> {
    const response = await api.put(`/drivers/${id}`, driver)
    return response.data
  },

  async deleteDriver(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/drivers/${id}`)
    return response.data
  }
}
