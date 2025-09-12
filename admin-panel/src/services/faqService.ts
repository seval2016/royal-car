import api from './api'

export interface FAQ {
  id: number
  question: string
  answer: string
  category: string
  displayOrder: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface FAQCreateRequest {
  question: string
  answer: string
  category: string
  displayOrder: number
  isActive: boolean
}

export interface FAQUpdateRequest {
  question?: string
  answer?: string
  category?: string
  displayOrder?: number
  isActive?: boolean
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const faqService = {
  async getAllFAQs(): Promise<ApiResponse<FAQ[]>> {
    const response = await api.get('/faqs')
    return response.data
  },

  async getFAQById(id: number): Promise<ApiResponse<FAQ>> {
    const response = await api.get(`/faqs/${id}`)
    return response.data
  },

  async createFAQ(faq: FAQCreateRequest): Promise<ApiResponse<FAQ>> {
    const response = await api.post('/faqs', faq)
    return response.data
  },

  async updateFAQ(id: number, faq: FAQUpdateRequest): Promise<ApiResponse<FAQ>> {
    const response = await api.put(`/faqs/${id}`, faq)
    return response.data
  },

  async deleteFAQ(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/faqs/${id}`)
    return response.data
  },

  async getFAQsByCategory(category: string): Promise<ApiResponse<FAQ[]>> {
    const response = await api.get(`/faqs/category/${category}`)
    return response.data
  }
}
