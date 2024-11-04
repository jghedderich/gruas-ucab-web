export interface IColumn {
  title: string;
  field: string;
}

export interface IPagination<T> {
  data: T[];
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface Address {
  street: string;
  urbanization: string;
  municipality: string;
  zipCode: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface ClientVehicle {
  brand: string;
  model: string;
  type: 'car' | 'motorcycle' | 'vehicle' | 'sedan' | 'suv' | 'van';
  year: number;
  licensePlate: string;
  color: string;
}

export interface Client {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  dni: string;
  vehicle: ClientVehicle;
}

export interface AdditionalCost {
  id: number;
  name: string;
  description: string;
}

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  type: 'lightTruck' | 'heavyTruck' | 'mediumTruck' | 'motorcycle';
  licensePlate: string;
  color: string;
  owner: string;
}

export interface Driver {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  dni: string;
  provider: string;
}

export interface ExtraPaymentRequest {
  amount: number;
  reason: string;
  status: string;
}

export interface Order {
  id: string;
  status: string;
  client: Client;
  driver: Driver;
  vehicle: Vehicle;
  extraPaymentRequest: {
    amount: number;
    reason: string;
    status: string;
  };
  extraCosts: {
    amount: number;
    reason: string;
  };
  totalDistance: number;
  location: Address;
  destination: Address;
  description: string;
}

// admin might need to be of type User, or maybe create adminId
export interface Provider {
  id: number;
  name: string;
  admin: string;
  fleet: Vehicle[];
  drivers: User[];
  isActive: boolean;
}

export enum Role {
  Admin = 'admin',
  Operator = 'operador',
  Provider = 'proveedor',
  Driver = 'conductor',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  dni: string;
  email: string;
  role: Role;
  companyName?: string;
  rif?: string;
  companyAddress?: string;
  companyPhone?: string;
  isActive: boolean;
}

export interface Policy {
  id: number;
  name: string;
  price: number;
  amountCovered: number;
  isActive: boolean;
}

export interface Fee {
  id: number;
  name: string;
  base: number;
  perKm: number;
  isActive: boolean;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  employees: number;
}
