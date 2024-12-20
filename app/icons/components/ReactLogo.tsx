import type { FC } from "react";

type TProps = {
  className?: string;
};

const ReactLogo: FC<TProps> = ({className}) => {
  return (
    <svg className={className} width="160" height="143" viewBox="0 0 160 143" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M160 71.2572C160 60.658 146.726 50.6131 126.376 44.384C131.072 23.6421 128.985 7.13983 119.788 1.85651C117.668 0.617207 115.19 0.0301712 112.483 0.0301712V7.3029C113.983 7.3029 115.19 7.59642 116.201 8.15084C120.636 10.6947 122.56 20.3808 121.06 32.839C120.701 35.9046 120.114 39.1333 119.397 42.4272C113.004 40.8618 106.025 39.6551 98.6873 38.8724C94.2845 32.839 89.7187 27.36 85.1203 22.5658C95.7521 12.6841 105.732 7.27029 112.515 7.27029V-0.00244141C103.547 -0.00244141 91.806 6.38973 79.9348 17.4782C68.0636 6.45496 56.3229 0.128012 47.3543 0.128012V7.40074C54.1052 7.40074 64.1174 12.7819 74.7493 22.5985C70.1834 27.3926 65.6176 32.839 61.2801 38.8724C53.9095 39.6551 46.9303 40.8618 40.5381 42.4598C39.788 39.1985 39.2336 36.0351 38.8422 33.002C37.3094 20.5438 39.201 10.8577 43.6038 8.28129C44.5821 7.69426 45.8541 7.43335 47.3543 7.43335V0.160624C44.6148 0.160624 42.1362 0.74766 39.9837 1.98696C30.8194 7.27029 28.7648 23.7399 33.4937 44.4166C13.2083 50.6784 0 60.6906 0 71.2572C0 81.8565 13.2735 91.9013 33.6241 98.1304C28.9278 118.872 31.0151 135.375 40.212 140.658C42.3318 141.897 44.8104 142.484 47.5499 142.484C56.5186 142.484 68.2593 136.092 80.1305 125.004C92.0016 136.027 103.742 142.354 112.711 142.354C115.45 142.354 117.929 141.767 120.082 140.528C129.246 135.244 131.3 118.775 126.572 98.0978C146.792 91.8687 160 81.8239 160 71.2572ZM117.538 49.5043C116.331 53.7114 114.831 58.0489 113.135 62.3865C111.798 59.7774 110.395 57.1684 108.863 54.5593C107.362 51.9503 105.764 49.4064 104.166 46.9278C108.797 47.6127 113.265 48.4607 117.538 49.5043ZM102.601 84.2373C100.057 88.64 97.448 92.8145 94.7411 96.6955C89.8818 97.1194 84.9572 97.3477 80 97.3477C75.0754 97.3477 70.1508 97.1194 65.3241 96.7281C62.6172 92.8471 59.9755 88.7053 57.4317 84.3351C54.9531 80.0628 52.7028 75.7252 50.6482 71.3551C52.6702 66.9849 54.9531 62.6148 57.3991 58.3424C59.9429 53.9397 62.552 49.7652 65.2589 45.8842C70.1182 45.4603 75.0428 45.232 80 45.232C84.9246 45.232 89.8492 45.4603 94.6759 45.8516C97.3828 49.7326 100.024 53.8744 102.568 58.2446C105.047 62.5169 107.297 66.8545 109.352 71.2246C107.297 75.5948 105.047 79.9649 102.601 84.2373ZM113.135 79.9976C114.896 84.3677 116.396 88.7379 117.636 92.9776C113.363 94.0212 108.863 94.9018 104.199 95.5866C105.797 93.0754 107.395 90.499 108.895 87.8573C110.395 85.2483 111.798 82.6066 113.135 79.9976ZM80.0652 114.796C77.0322 111.665 73.9992 108.175 70.9988 104.36C73.934 104.49 76.9344 104.588 79.9674 104.588C83.033 104.588 86.066 104.523 89.0338 104.36C86.0987 108.175 83.0656 111.665 80.0652 114.796ZM55.8011 95.5866C51.17 94.9018 46.702 94.0538 42.4297 93.0102C43.6364 88.8031 45.1366 84.4656 46.8325 80.128C48.1696 82.7371 49.572 85.3461 51.1048 87.9552C52.6376 90.5642 54.203 93.108 55.8011 95.5866ZM79.9022 27.7187C82.9352 30.8496 85.9682 34.3392 88.9686 38.1549C86.0334 38.0245 83.033 37.9266 80 37.9266C76.9344 37.9266 73.9014 37.9918 70.9336 38.1549C73.8687 34.3392 76.9018 30.8496 79.9022 27.7187ZM55.7685 46.9278C54.1704 49.4391 52.5724 52.0155 51.0722 54.6572C49.572 57.2662 48.1696 59.8753 46.8325 62.4843C45.0713 58.1142 43.5711 53.744 42.3318 49.5043C46.6042 48.4933 51.1048 47.6127 55.7685 46.9278ZM26.2536 87.7595C14.7085 82.8349 7.24011 76.3775 7.24011 71.2572C7.24011 66.137 14.7085 59.647 26.2536 54.755C29.0583 53.5483 32.1239 52.4721 35.2874 51.4611C37.1464 57.8532 39.5923 64.5063 42.6254 71.3225C39.625 78.106 37.2116 84.7265 35.3853 91.086C32.1566 90.075 29.0909 88.9662 26.2536 87.7595ZM43.7994 134.364C39.364 131.82 37.4399 122.134 38.9401 109.675C39.2988 106.61 39.8859 103.381 40.6034 100.087C46.9955 101.653 53.9747 102.859 61.3127 103.642C65.7155 109.675 70.2813 115.155 74.8797 119.949C64.2479 129.83 54.2682 135.244 47.4847 135.244C46.0171 135.212 44.7778 134.918 43.7994 134.364ZM121.158 109.512C122.691 121.971 120.799 131.657 116.396 134.233C115.418 134.82 114.146 135.081 112.646 135.081C105.895 135.081 95.8826 129.7 85.2507 119.883C89.8166 115.089 94.3824 109.643 98.7199 103.609C106.091 102.827 113.07 101.62 119.462 100.022C120.212 103.316 120.799 106.479 121.158 109.512ZM133.714 87.7595C130.909 88.9662 127.843 90.0424 124.68 91.0534C122.821 84.6612 120.375 78.0081 117.342 71.192C120.342 64.4085 122.756 57.788 124.582 51.4285C127.811 52.4395 130.876 53.5483 133.746 54.755C145.291 59.6796 152.76 66.137 152.76 71.2572C152.727 76.3775 145.259 82.8675 133.714 87.7595Z" fill="#61DAFB"/>
      <path d="M79.9726 86.1521C88.2039 86.1521 94.8768 79.4793 94.8768 71.2479C94.8768 63.0166 88.2039 56.3438 79.9726 56.3438C71.7412 56.3438 65.0684 63.0166 65.0684 71.2479C65.0684 79.4793 71.7412 86.1521 79.9726 86.1521Z" fill="#61DAFB"/>
    </svg>
  );
};

export default ReactLogo;