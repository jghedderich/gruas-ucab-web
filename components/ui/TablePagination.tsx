'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './button';
import { IPageInfo } from './Table';

interface ITablePaginationProps {
  pageInfo: IPageInfo;
}

function TablePagination({ pageInfo }: ITablePaginationProps) {
  const router = useRouter();

  const handlePrevPage = () => {
    if (pageInfo.hasPreviousPage) router.push(`?page=${pageInfo.page - 1}`);
  };

  const handleNextPage = () => {
    if (pageInfo.hasNextPage) router.push(`?page=${pageInfo.page + 1}`);
  };

  return (
    <div className="flex justify-between items-center py-2 px-3">
      <Button
        variant={'outline'}
        onClick={handlePrevPage}
        disabled={pageInfo.hasPreviousPage === false}
      >
        Anterior
      </Button>
      <div>
        Página {pageInfo.page} de {pageInfo.pageCount}
      </div>
      <Button
        variant={'outline'}
        onClick={handleNextPage}
        disabled={pageInfo.hasNextPage === false}
      >
        Siguiente
      </Button>
    </div>
  );
}

export default TablePagination;
