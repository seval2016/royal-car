import api from './api'

export interface Booking {
  id: number
  pickupDate: string
  returnDate: string
  pickupLocation: string
  returnLocation: string
  totalPrice: number
  status: string
  notes: string
  driverRequired: boolean
  car: {
    id: number
    brand: string
    model: string
  }
  driver?: {
    id: number
    name: string
    surname: string
  }
  user: {
    id: number
    firstName: string
    lastName: string
    email: string
  }
  createdAt: string
  updatedAt: string
}

export interface BookingCreateRequest {
  carId: number
  driverId?: number
  userId: number
  pickupDate: string
  returnDate: string
  pickupLocation: string
  returnLocation: string
  totalPrice: number
  notes?: string
  driverRequired: boolean
}

export interface BookingUpdateRequest {
  carId?: number
  driverId?: number
  userId?: number
  pickupDate?: string
  returnDate?: string
  pickupLocation?: string
  returnLocation?: string
  totalPrice?: number
  status?: string
  notes?: string
  driverRequired?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const bookingService = {
  async getAllBookings(): Promise<ApiResponse<Booking[]>> {
    const response = await api.get('/bookings')
    return response.data
  },

  async getBookingById(id: number): Promise<ApiResponse<Booking>> {
    const response = await api.get(`/bookings/${id}`)
    return response.data
  },

  async createBooking(booking: BookingCreateRequest): Promise<ApiResponse<Booking>> {
    const response = await api.post('/bookings', booking)
    return response.data
  },

  async updateBooking(id: number, booking: BookingUpdateRequest): Promise<ApiResponse<Booking>> {
    const response = await api.put(`/bookings/${id}`, booking)
    return response.data
  },

  async deleteBooking(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/bookings/${id}`)
    return response.data
  },

  async updateBookingStatus(id: number, status: string): Promise<ApiResponse<Booking>> {
    const response = await api.put(`/bookings/${id}/status`, { status })
    return response.data
  }
}
