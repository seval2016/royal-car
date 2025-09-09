// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  timestamp: string;
}

// User Types
export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  city: string;
  country: string;
  address: string;
  role: string | null;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
}

// Authentication Types
export interface AuthenticationResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  user: UserResponse;
}

// Request Types
export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

// Car Types
export interface Car {
  id: number;
  manufacturer: string;
  model: string;
  modelCode: string;
  year: number;
  price: number;
  engine: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  image: string;
  description: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

// Driver Types
export interface Driver {
  id: number;
  name: string;
  surname: string;
  email: string;
  image: string;
  experience: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Booking Types
export interface Booking {
  id: number;
  user: UserResponse;
  car: Car;
  driver: Driver | null;
  pickupDate: string;
  returnDate: string;
  totalPrice: number;
  status: BookingStatus;
  driverRequired: boolean;
  createdAt: string;
  updatedAt: string;
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Contact Types
export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: ContactStatus;
  readAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export enum ContactStatus {
  NEW = 'NEW',
  READ = 'READ',
  REPLIED = 'REPLIED'
}

// Review Types
export interface Review {
  id: number;
  user: UserResponse;
  car: Car;
  rating: number;
  comment: string;
  reviewDate: string;
  isApproved: boolean;
  approvedAt: string | null;
  approvedBy: string | null;
  createdAt: string;
  updatedAt: string;
}
