import { IColumn } from '@/types';
import TablePagination from './TablePagination';

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
  return (
    <div className="border rounded-md min-w-max">
      <table className="table-auto border-b min-w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.title}
                className="font-normal text-sm text-text-600 py-4 px-6 "
              >
                <div className="flex items-center gap-2">{column.title}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <TablePagination pageInfo={pageInfo} />
    </div>
  );
}

export default Table;
