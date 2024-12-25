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
  type: 'Light' | 'Medium' | 'Heavy' | 'Motorcycle';
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
  location: Address;
  email: string;
  password: string;
  status: 'Available' | 'Unavailable';
  providerId: string;
  vehicleId?: string;
}

export enum StatusC {
  Pending = 'Pending',
  Approved = 'Approved',
  Rejected = 'Rejected',
}

export interface CostDetail {
  id: string;
  statusC: StatusC;
  amount: number;
  description: string;
}

export enum Status {
  ToBeAssigned = 'ToBeAssigned',
  ToBeAccepted = 'ToBeAccepted',
  Accepted = 'Accepted',
  InProcess = 'InProcess',
  Completed = 'Completed',
  Canceled = 'Canceled',
}

export interface Order extends IEntity {
  orderStatus: Status;
  policyId: string;
  operatorId: string;
  client: Client;
  driver: Driver;
  driverId: string;
  costDetails: CostDetail[];
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
  Admin = 'administrator',
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

export interface NavigationLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  roles: UserType[];
}

export interface Fee {
  id: number;
  name: string;
  base: number;
  perKm: number;
  isActive: boolean;
}

export interface Department extends IEntity {
  departmentName: string;
  description: string;
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

export type UserType = 'provider' | 'administrator' | 'operator';

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

export interface DriverWithVehicle {
  driver: Driver;
  provider: Provider;
  vehicle: Vehicle;
}

export interface AddressDetails {
  coordinates: {
    latitude: string;
    longitude: string;
  };
  zip: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
}
