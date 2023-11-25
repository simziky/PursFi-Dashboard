import { Icon } from "./type";

const AddIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.75 13.75H16.25V6.25C16.25 5.91848 16.1183 5.60054 15.8839 5.36612C15.6495 5.1317 15.3315 5 15 5C14.6685 5 14.3505 5.1317 14.1161 5.36612C13.8817 5.60054 13.75 5.91848 13.75 6.25V13.75H6.25C5.91848 13.75 5.60054 13.8817 5.36612 14.1161C5.1317 14.3505 5 14.6685 5 15C5 15.3315 5.1317 15.6495 5.36612 15.8839C5.60054 16.1183 5.91848 16.25 6.25 16.25H13.75V23.75C13.75 24.0815 13.8817 24.3995 14.1161 24.6339C14.3505 24.8683 14.6685 25 15 25C15.3315 25 15.6495 24.8683 15.8839 24.6339C16.1183 24.3995 16.25 24.0815 16.25 23.75V16.25H23.75C24.0815 16.25 24.3995 16.1183 24.6339 15.8839C24.8683 15.6495 25 15.3315 25 15C25 14.6685 24.8683 14.3505 24.6339 14.1161C24.3995 13.8817 24.0815 13.75 23.75 13.75Z"
        fill="black"
      />
    </svg>
  );
};

export default AddIcon;
