import api from './api'

export interface Contact {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: string
  adminReply: string | null
  createdAt: string
  updatedAt: string
}

export interface ContactCreateRequest {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactUpdateRequest {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  status?: string
  adminReply?: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
  timestamp: string
}

export const contactService = {
  async getAllContacts(): Promise<ApiResponse<Contact[]>> {
    const response = await api.get('/contacts')
    return response.data
  },

  async getContactById(id: number): Promise<ApiResponse<Contact>> {
    const response = await api.get(`/contacts/${id}`)
    return response.data
  },

  async createContact(contact: ContactCreateRequest): Promise<ApiResponse<Contact>> {
    const response = await api.post('/contacts', contact)
    return response.data
  },

  async updateContact(id: number, contact: ContactUpdateRequest): Promise<ApiResponse<Contact>> {
    const response = await api.put(`/contacts/${id}`, contact)
    return response.data
  },

  async deleteContact(id: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/contacts/${id}`)
    return response.data
  }
}
