export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  fuelType: string;
  transmission: string;
  mileage: number;
  description?: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
  
  // UI için gerekli alanlar
  manufacturer?: string;  // brand ile aynı, geriye uyumluluk için
  modelCode?: string;     // model varyantı
  engine?: string;        // motor bilgisi
  image?: string;         // araç resmi
}

export interface CarFilters {
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

export interface PaginationInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
  };
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  empty: boolean;
}
