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

export interface Vehicle extends IEntity {
  brand: string;
  model: string;
  year: string;
  type: 'Light' | 'Medium' | 'Heavy' | 'Motorcycle' | '';
  providerId: string;
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
