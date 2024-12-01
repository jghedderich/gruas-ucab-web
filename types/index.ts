export interface IColumn {
  title: string;
  field: string;
}

export interface IEntity {
  id: string;
  isActive: boolean;
}

export interface IPagination<T> {
  data: T[];
  count: number;
  pageIndex: number;
  pageSize: number;
}

export interface Address {
  addressLine1: string;
  addressLine2: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  city: string;
  state: string;
  zip: string;
}

export interface Client {
  name: {
    firstName: string;
    lastName: string;
  };
  clientVehicle: Vehicle;
  email: string;
  phone: string;
  dni: {
    type: string;
    number: string;
  };
}

export interface AdditionalCost extends IEntity {
  name: string;
  description: string;
}

export interface Vehicle extends IEntity {
  brand: string;
  model: string;
  year: string;
  type: string;
  providerId?: string;
}

export interface Driver extends IEntity {
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  dni: {
    type: string;
    number: string;
  };
  email: string;
  password: string;
  status: 'Available' | 'Unavailable';
  providerId: string;
  vehicleId: string;
}

export interface ExtraPaymentRequest {
  amount: number;
  reason: string;
  status: string;
}

export interface Order extends IEntity {
  orderStatus: string;
  policyId: string;
  operatorId: string;
  client: Client;
  driver: Driver;
  extraPaymentRequest: {
    amount: number;
    reason: string;
    status: string;
  };
  costDetails: {
    amount: number;
    reason: string;
  }[];
  totalDistance: number;
  incidentAddress: Address;
  destinationAddress: Address;
  description: string;
}

export interface Provider extends IEntity {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  phone: string;
  dni: {
    type: string;
    number: string;
  };
  company: {
    name: string;
    description: string;
    rif: string;
    state: string;
    city: string;
  };
  vehicles: Vehicle[];
  drivers: Driver[];
}

export enum Role {
  Admin = 'admin',
  Operator = 'operador',
  Provider = 'proveedor',
  Driver = 'conductor',
}

export interface Policy extends IEntity {
  name: string;
  amountCovered: number;
  price: {
    annualPrice: number;
    monthlyPrice: number;
  };
  fees: {
    baseFee: number;
    perKm: number;
  };
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

export interface Operator extends IEntity {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  phone: string;
  dni: {
    type: string;
    number: string;
  };
  orders: unknown[];
}

export type UserType = 'provider' | 'admin' | 'operator';

export interface User {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  phone: string;
  dni: {
    type: string;
    number: string;
  };
  company?: {
    name: string;
    description: string;
    rif: string;
    state: string;
    city: string;
  };
  userType: UserType;
}

export const dniTypes = ['V', 'E', 'J'];
