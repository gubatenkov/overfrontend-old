import { FC } from 'react';

interface IProps {
  [key: string]: any
}

const ArrowLeftIcon: FC<IProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default ArrowLeftIcon;
