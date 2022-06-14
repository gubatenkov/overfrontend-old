import { FC } from 'react';

interface IProps {
  [key: string]: any
}

const SearchIcon: FC<IProps> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export default SearchIcon;
