import api from './api';
import type { Car, CarFilters, PaginatedResponse, ApiResponse } from '@/types/car';

export interface GetCarsParams {
  page?: number;
  size?: number;
  sort?: string;
  brand?: string;
  model?: string;
  year?: number;
  fuelType?: string;
  transmission?: string;
  minPrice?: number;
  maxPrice?: number;
  maxMileage?: number;
  isAvailable?: boolean;
}

const carService = {
  // Tüm arabaları getir
  async getCars(params: GetCarsParams = {}): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>('/cars', { params });
    return response.data.data;
  },

  // ID ile araba getir
  async getCarById(id: number): Promise<Car> {
    const response = await api.get<ApiResponse<Car>>(`/cars/${id}`);
    return response.data.data;
  },

  // Yeni araba oluştur
  async createCar(car: Omit<Car, 'id' | 'createdAt' | 'updatedAt'>): Promise<Car> {
    const response = await api.post<ApiResponse<Car>>('/cars', car);
    return response.data.data;
  },

  // Araba güncelle
  async updateCar(id: number, car: Partial<Car>): Promise<Car> {
    const response = await api.put<ApiResponse<Car>>(`/cars/${id}`, car);
    return response.data.data;
  },

  // Araba sil
  async deleteCar(id: number): Promise<void> {
    await api.delete<ApiResponse<string>>(`/cars/${id}`);
  },

  // Marka ile ara
  async searchByBrand(brand: string, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>('/cars/search/brand', {
      params: { brand, page, size }
    });
    return response.data.data;
  },

  // Model ile ara
  async searchByModel(model: string, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>('/cars/search/model', {
      params: { model, page, size }
    });
    return response.data.data;
  },

  // Yıl ile filtrele
  async getByYear(year: number, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>(`/cars/filter/year/${year}`, {
      params: { page, size }
    });
    return response.data.data;
  },

  // Yakıt tipi ile filtrele
  async getByFuelType(fuelType: string, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>(`/cars/filter/fuel-type/${fuelType}`, {
      params: { page, size }
    });
    return response.data.data;
  },

  // Vites tipi ile filtrele
  async getByTransmission(transmission: string, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>(`/cars/filter/transmission/${transmission}`, {
      params: { page, size }
    });
    return response.data.data;
  },

  // Müsait arabalar
  async getAvailableCars(page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>('/cars/available', {
      params: { page, size }
    });
    return response.data.data;
  },

  // Fiyat aralığı ile filtrele
  async getByPriceRange(minPrice: number, maxPrice: number, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>('/cars/filter/price-range', {
      params: { minPrice, maxPrice, page, size }
    });
    return response.data.data;
  },

  // Maksimum km ile filtrele
  async getByMaxMileage(maxMileage: number, page = 0, size = 10): Promise<PaginatedResponse<Car>> {
    const response = await api.get<ApiResponse<PaginatedResponse<Car>>>(`/cars/filter/max-mileage/${maxMileage}`, {
      params: { page, size }
    });
    return response.data.data;
  },

  // Tüm markaları getir
  async getAllBrands(): Promise<string[]> {
    const response = await api.get<ApiResponse<string[]>>('/cars/brands');
    return response.data.data;
  },

  // Tüm yakıt tiplerini getir
  async getAllFuelTypes(): Promise<string[]> {
    const response = await api.get<ApiResponse<string[]>>('/cars/fuel-types');
    return response.data.data;
  },

  // Tüm vites tiplerini getir
  async getAllTransmissions(): Promise<string[]> {
    const response = await api.get<ApiResponse<string[]>>('/cars/transmissions');
    return response.data.data;
  },
};

export default carService;
