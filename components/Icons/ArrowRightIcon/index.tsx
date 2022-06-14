import { FC } from 'react';

interface IProps {
  [key: string]: any
}

const ArrowRightIcon: FC<IProps> = (props) => (
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
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default ArrowRightIcon;
