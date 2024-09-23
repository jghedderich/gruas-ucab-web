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

export interface Provider {
  id: number;
  nombre: string;
  admin: User;
  flota: Vehicle[];
  conductores: User[];
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
