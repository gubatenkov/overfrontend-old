import { FC } from 'react';
import Link from 'next/link';

import usePagination from 'utils/hooks/usePagination';
import { ArrowRightIcon, ArrowLeftIcon } from 'components';

interface IProps {
  totalItems: number
  currentPage: number
  itemsPerPage?: number
}

const Pagination: FC<IProps> = ({
  totalItems,
  currentPage,
  itemsPerPage = 10,
}) => {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  const renderPageLink = (page: number) => (page === 1 ? '/' : `/page/${page}`);

  return (
    <div className="text-gray-800 flex justify-center gap-3 space-x-1">
      <button
        className="bg-gray-50 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-primary"
        title="Previous page"
        type="button"
      >
        <ArrowLeftIcon />
      </button>
      {pages.map((pageNumber) => (pageNumber === '...' ? (
        <span
          key={pageNumber}
          className="rounded-full px-4 py-2 text-sm font-semibold text-black"
        >
          {pageNumber}
        </span>
      ) : (
        <Link key={pageNumber} href={renderPageLink(pageNumber as number)} passHref>
          <button
            className={`${
              pageNumber === currentPage
                ? 'border-primary bg-primary text-[#fff] shadow-md'
                : 'border-black text-black hover:border-primary hover:text-primary'
            } bg-gray-50 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold hover:shadow-md`}
            type="button"
          >
            {pageNumber}
          </button>
        </Link>
      )))}
      <button
        className="bg-gray-50 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-primary"
        title="Next page"
        type="button"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
