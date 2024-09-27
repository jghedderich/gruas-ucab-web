export interface IPageInfo {
  page: number;
  perPage: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface IColumn {
  title: string;
  field: string;
}

export interface IPagination<T> {
  items: T[];
  pageInfo: IPageInfo;
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

export interface Order {
  id: number;
  status: string;
  clientPolicy: string;
  clientName: string;
  clientPhone: string;
  clientDni: string;
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

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  owner: string;
}

export enum Role {
  Admin = 'admin',
  Operator = 'operador de cabina',
  Provider = 'proveedor',
  Driver = 'conductor',
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  dni: string;
  email: string;
  role: Role;
  isActive: boolean;
}

export interface Policy {
  id: number;
  name: string;
  price: number;
  kilometersCovered: number;
  tripsCovered?: number;
  extraPerKm: number;
  isActive: boolean;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  employees: number;
}
