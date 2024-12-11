import { IColumn } from '@/types';
import TablePagination from './TablePagination';
import Image from 'next/image';

export interface IPageInfo {
  page: number;
  perPage: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface ITableProps {
  columns: IColumn[];
  pageIndex: number;
  pageSize: number;
  count: number;
  children: React.ReactNode;
}

function Table({ columns, pageIndex, pageSize, count, children }: ITableProps) {
  const pageInfo: IPageInfo = {
    page: pageIndex + 1,
    perPage: pageSize,
    itemCount: count,
    pageCount: Math.ceil(count / pageSize),
    hasPreviousPage: pageIndex > 1,
    hasNextPage: pageIndex < Math.round(count / pageSize) || false,
  };

  if (count === 0) {
    return (
      <div className="flex flex-col items-center max-w-sm mx-auto mt-16 gap-1">
        <Image
          src="/empty.png"
          width={200}
          height={200}
          alt="empty"
          className="opacity-75"
        />
        <h2 className="text-lg">No hay resultados</h2>
        <p className="text-gray-500 text-center text-sm">Intente más tarde.</p>
      </div>
    );
  }
  return (
    <div className="border rounded-md min-w-max">
      <table className="table-auto border-b min-w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                className="font-normal text-xs text-text-600 p-3 "
              >
                <div className="flex items-center gap-2">{column.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">{children}</tbody>
      </table>
      <TablePagination pageInfo={pageInfo} />
    </div>
  );
}

export default Table;
