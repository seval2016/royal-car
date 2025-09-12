import api from './api'

export interface Review {
  id: number
  rating: number
  comment: string
  reviewDate: string
  isApproved: boolean
  approvedAt: string | null
  approvedBy: string | null
  car: {
    id: number
    brand: string
    model: string
  }
  user: {
    id: number
    firstName: string
    lastName: string
  }
  createdAt: string
  updatedAt: string
}

export interface ReviewCreateRequest {
  carId: number
  userId: number
  rating: number
  comment: string
}

export interface ReviewUpdateRequest {
  rating?: number
  comment?: string
  isApproved?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const reviewService = {
  async getAllReviews(): Promise<ApiResponse<Review[]>> {
    const response = await api.get('/reviews')
    return response.data
  },

  async getReviewById(id: number): Promise<ApiResponse<Review>> {
    const response = await api.get(`/reviews/${id}`)
    return response.data
  },

  async createReview(review: ReviewCreateRequest): Promise<ApiResponse<Review>> {
    const response = await api.post('/reviews', review)
    return response.data
  },

  async updateReview(id: number, review: ReviewUpdateRequest): Promise<ApiResponse<Review>> {
    const response = await api.put(`/reviews/${id}`, review)
    return response.data
  },

  async deleteReview(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/reviews/${id}`)
    return response.data
  },

  async approveReview(id: number): Promise<ApiResponse<Review>> {
    const response = await api.put(`/reviews/${id}/approve`)
    return response.data
  }
}
