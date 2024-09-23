import { IColumn, IPageInfo } from '@/types';
import TablePagination from './TablePagination';

interface ITableProps {
  columns: IColumn[];
  pageInfo: IPageInfo;
  children: React.ReactNode;
}

function Table({ columns, pageInfo, children }: ITableProps) {
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
