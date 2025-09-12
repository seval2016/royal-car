import api from './api'

export interface Car {
  id: number
  brand: string
  manufacturer: string
  model: string
  modelCode: string
  year: number
  price: number
  engine: string
  transmission: string
  fuelType: string
  mileage: string
  image: string
  description: string
  isAvailable: boolean
  createdAt: string
  updatedAt: string
}

export interface CarCreateRequest {
  brand: string
  manufacturer: string
  model: string
  modelCode: string
  year: number
  price: number
  engine: string
  transmission: string
  fuelType: string
  mileage: string
  image: string
  description: string
  isAvailable: boolean
}

export interface CarUpdateRequest {
  brand?: string
  manufacturer?: string
  model?: string
  modelCode?: string
  year?: number
  price?: number
  engine?: string
  transmission?: string
  fuelType?: string
  mileage?: string
  image?: string
  description?: string
  isAvailable?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const carService = {
  async getAllCars(): Promise<ApiResponse<Car[]>> {
    const response = await api.get('/cars')
    return response.data
  },

  async getCarById(id: number): Promise<ApiResponse<Car>> {
    const response = await api.get(`/cars/${id}`)
    return response.data
  },

  async createCar(car: CarCreateRequest): Promise<ApiResponse<Car>> {
    const response = await api.post('/cars', car)
    return response.data
  },

  async updateCar(id: number, car: CarUpdateRequest): Promise<ApiResponse<Car>> {
    const response = await api.put(`/cars/${id}`, car)
    return response.data
  },

  async deleteCar(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/cars/${id}`)
    return response.data
  },

  async updateCarAvailability(id: number, isAvailable: boolean): Promise<ApiResponse<Car>> {
    const response = await api.put(`/cars/${id}/availability`, { isAvailable })
    return response.data
  }
}
