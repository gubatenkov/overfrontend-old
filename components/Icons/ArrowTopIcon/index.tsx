import { FC } from 'react';

interface IProps {
  [key: string]: any
}

const ArrowRightIcon: FC<IProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 20V4m-7 7l7-7l7 7"
    />
  </svg>
);

export default ArrowRightIcon;
