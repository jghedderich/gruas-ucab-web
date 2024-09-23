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

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  owner: string;
}

export enum Rol {
  Admin = 'admin',
  Operador = 'operador de cabina',
  Proveedor = 'proveedor',
  Conductor = 'conductor',
}

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  password: string;
  dni: string;
  email: string;
  rol: Rol;
}
