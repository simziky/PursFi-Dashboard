import { Icon } from "./type";

const ContactIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_2355_25419)">
        <path
          d="M13.17 4L18 8.83V20H6V4H13.17ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14ZM16 17.43C16 16.62 15.52 15.9 14.78 15.58C13.93 15.21 12.99 15 12 15C11.01 15 10.07 15.21 9.22 15.58C8.48 15.9 8 16.62 8 17.43V18H16V17.43Z"
          fill="#515B6F"
        />
      </g>
      <defs>
        <clipPath id="clip0_2355_25419">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ContactIcon;
