interface IconProps {
    size?: number;
    [key: string]: any;
}


export function UnorderedListIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M8 8.5C8 9.32842 7.32842 10 6.5 10C5.67158 10 5 9.32842 5 8.5C5 7.67158 5.67158 7 6.5 7C7.32842 7 8 7.67158 8 8.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15.5C8 16.3283 7.32842 17 6.5 17C5.67158 17 5 16.3283 5 15.5C5 14.6717 5.67158 14 6.5 14C7.32842 14 8 14.6717 8 15.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 8.5H19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 15.5H19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
}


export function HomeIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
        ></path>
      </svg>
    );
}

export function BookmarkIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
        ></path>
      </svg>
    );
}

export function NewHeartIcon(props: IconProps) {
    const { size = 24, ...rest } = props

    return (
        <svg width={size} height={size} viewBox="0 0 28 29" fill="none" {...rest}>
        <rect y="0.472778" width="28" height="28" rx="14" fill="#FEE2E2" fillOpacity="0.01"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9966 11.0407C12.9969 9.87198 11.3299 9.5576 10.0773 10.6278C8.82482 11.698 8.64848 13.4873 9.6321 14.753C10.4499 15.8053 12.9249 18.0248 13.7361 18.7432C13.8268 18.8236 13.8722 18.8637 13.9251 18.8795C13.9713 18.8933 14.0218 18.8933 14.068 18.8795C14.121 18.8637 14.1663 18.8236 14.2571 18.7432C15.0683 18.0248 17.5432 15.8053 18.3611 14.753C19.3447 13.4873 19.1899 11.6867 17.9158 10.6278C16.6417 9.56886 14.9963 9.87198 13.9966 11.0407Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export function ToolsIcon(props: IconProps) {
    const { size = 24, ...rest } = props

    return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...rest}>
    <rect width="28" height="27.4728" rx="13.7364" fill="#F4F4F5" fillOpacity="0.01"/>
    <path d="M10.4 10.4L13.1 13.1M10.4 10.4H8.6L8 8.6L8.6 8L10.4 8.6V10.4ZM18.3554 8.44461L16.7788 10.0212C16.5412 10.2588 16.4224 10.3776 16.3779 10.5146C16.3387 10.6351 16.3387 10.7649 16.3779 10.8854C16.4224 11.0224 16.5412 11.1412 16.7788 11.3788L16.9212 11.5212C17.1588 11.7588 17.2776 11.8776 17.4146 11.9221C17.5351 11.9613 17.6649 11.9613 17.7854 11.9221C17.9224 11.8776 18.0412 11.7588 18.2788 11.5212L19.7536 10.0464C19.9124 10.4329 20 10.8562 20 11.3C20 13.1225 18.5225 14.6 16.7 14.6C16.4803 14.6 16.2656 14.5785 16.0579 14.5376C15.7662 14.48 15.6203 14.4513 15.5319 14.4601C15.4379 14.4694 15.3916 14.4835 15.3083 14.5281C15.23 14.57 15.1514 14.6486 14.9942 14.8058L10.7 19.1C10.2029 19.597 9.39706 19.597 8.9 19.1C8.40294 18.6029 8.40294 17.797 8.9 17.3L13.1942 13.0058C13.3514 12.8486 13.43 12.77 13.4719 12.6917C13.5165 12.6084 13.5306 12.5621 13.5399 12.4681C13.5487 12.3797 13.52 12.2338 13.4624 11.9421C13.4215 11.7344 13.4 11.5197 13.4 11.3C13.4 9.47746 14.8775 8 16.7 8C17.3033 8 17.8688 8.16189 18.3554 8.44461ZM14 15.8L17.3 19.0999C17.7971 19.597 18.6029 19.597 19.1 19.0999C19.597 18.6029 19.597 17.797 19.1 17.2999L16.3852 14.5852C16.193 14.567 16.0056 14.5323 15.8245 14.4826C15.591 14.4185 15.335 14.465 15.1638 14.6362L14 15.8Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    )
}

export function RocketIcon(props: IconProps) {
    const { size = 24, ...rest } = props

    return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...rest}>
    <rect width="28" height="28" rx="14" fill="#F4F4F5" fillOpacity="0.01"/>
    <g clipPath="url(#clip0_212_35)">
    <path d="M14 15.5L12.5 14M14 15.5C14.6984 15.2344 15.3684 14.8994 16 14.5M14 15.5V18C14 18 15.515 17.725 16 17C16.54 16.19 16 14.5 16 14.5M12.5 14C12.7661 13.3097 13.1011 12.648 13.5 12.025C14.0826 11.0935 14.8938 10.3265 15.8565 9.79705C16.8192 9.26757 17.9013 8.99319 19 9C19 10.36 18.61 12.75 16 14.5M12.5 14H10C10 14 10.275 12.485 11 12C11.81 11.46 13.5 12 13.5 12M10.25 16.25C9.5 16.88 9.25 18.75 9.25 18.75C9.25 18.75 11.12 18.5 11.75 17.75C12.105 17.33 12.1 16.685 11.705 16.295C11.5107 16.1095 11.2546 16.0023 10.9861 15.994C10.7176 15.9857 10.4554 16.0769 10.25 16.25Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_212_35">
    <rect width="12" height="12" fill="white" transform="translate(8 8)"/>
    </clipPath>
    </defs>
    </svg>
    )
}


export function MedalIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
        <svg width={size} height={size} viewBox="0 0 28 28" fill="none" {...rest}>
            <rect width="28" height="28" rx="14" fill="#FFEDD5" fillOpacity="0.01"/>
            <g clipPath="url(#clip0_212_33)">
            <path d="M11.5676 13.5945L9.6652 10.1903C9.44646 9.79882 9.33708 9.60311 9.35552 9.44286C9.3716 9.30306 9.44585 9.1765 9.56005 9.09426C9.69094 9 9.91515 9 10.3636 9H11.481C11.6476 9 11.7309 9 11.8057 9.02407C11.8718 9.04536 11.9328 9.08021 11.9847 9.12638C12.0434 9.17856 12.0857 9.25035 12.1702 9.39394L14.0001 12.5L15.8299 9.39394C15.9144 9.25035 15.9567 9.17856 16.0154 9.12638C16.0673 9.08021 16.1283 9.04536 16.1944 9.02407C16.2692 9 16.3525 9 16.5191 9H17.6366C18.085 9 18.3092 9 18.4401 9.09426C18.5543 9.1765 18.6285 9.30306 18.6446 9.44286C18.663 9.60311 18.5536 9.79882 18.3349 10.1903L16.4325 13.5945M13.2501 15L14.0001 14.5V17M13.3751 17H14.6251M16.2982 13.4519C17.5674 14.7211 17.5674 16.7789 16.2982 18.0481C15.029 19.3173 12.9712 19.3173 11.702 18.0481C10.4328 16.7789 10.4328 14.7211 11.702 13.4519C12.9712 12.1827 15.0289 12.1827 16.2982 13.4519Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_212_33">
            <rect width="12" height="12" fill="white" transform="translate(8 8)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export function RefreshIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
        <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
            <path
                d="M11.25 14.75L8.75 17M8.75 17L11.25 19.25M8.75 17H13.25C16.5637 17 19.25 14.3137 19.25 11V10.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
            <path
                d="M15.25 7H10.75C7.43629 7 4.75 9.68629 4.75 13V13.25M15.25 7L12.75 9.25M15.25 7L12.75 4.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></path>
        </svg>
    );
}


export function ButtonPlusIcon(props: IconProps) {
    const { size = 16, ...rest } = props;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M8 3.83337V12.1667"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12.1667 8H3.83334"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function FaceSmileIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.75 13.75C9.75 13.75 10 15.25 12 15.25C14 15.25 14.25 13.75 14.25 13.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.5 10C10.5 10.2761 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.72386 9.5 10 9.5C10.2761 9.5 10.5 9.72386 10.5 10Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5 10C14.5 10.2761 14.2761 10.5 14 10.5C13.7239 10.5 13.5 10.2761 13.5 10C13.5 9.72386 13.7239 9.5 14 9.5C14.2761 9.5 14.5 9.72386 14.5 10Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
}

export function ChatBubbleIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          d="M1 5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V11.2C19 12.8802 19 13.7202 18.673 14.362C18.3854 14.9265 17.9265 15.3854 17.362 15.673C16.7202 16 15.8802 16 14.2 16H7.68375C7.0597 16 6.74767 16 6.44921 16.0613C6.18443 16.1156 5.9282 16.2055 5.68749 16.3285C5.41617 16.4671 5.17252 16.662 4.68521 17.0518L2.29976 18.9602C1.88367 19.2931 1.67563 19.4595 1.50054 19.4597C1.34827 19.4599 1.20422 19.3906 1.10923 19.2716C1 19.1348 1 18.8684 1 18.3355V5.8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"/>
      </svg>
    );
  }

  export function CloseIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 6.75L6.75 17.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75 6.75L17.25 17.25"
        ></path>
      </svg>
    );
  }

  export function BroadcastIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 10C12.5 10.2761 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.72386 12.5 10Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.24993 13.2499C7.21088 11.5624 7.33603 8.49988 9.25002 6.74988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.7673 13.25C16.8063 11.5625 16.6812 8.5 14.7672 6.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.25 12.75H11.75L9.75 19.25H14.25L12.25 12.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.24999 15.2501C3.91407 11.9141 3.92971 8.07812 7.24994 4.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.7539 15.2501C20.0898 11.9141 20.0742 8.07812 16.754 4.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function AlertIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75V14.25ZM12.01 15.75C12.4242 15.75 12.76 15.4142 12.76 15C12.76 14.5858 12.4242 14.25 12.01 14.25V15.75ZM12 15.75H12.01V14.25H12V15.75Z"
          fill="currentColor"
        ></path>
        <path
          d="M10.4033 5.41136L10.9337 5.94169L10.4033 5.41136ZM5.41136 10.4033L4.88103 9.87301L4.88103 9.87301L5.41136 10.4033ZM5.41136 13.5967L5.94169 13.0663L5.94169 13.0663L5.41136 13.5967ZM10.4033 18.5886L10.9337 18.0583L10.4033 18.5886ZM13.5967 18.5886L14.127 19.119L14.127 19.119L13.5967 18.5886ZM18.5886 10.4033L19.119 9.87301L19.119 9.87301L18.5886 10.4033ZM13.5967 5.41136L14.127 4.88103L14.127 4.88103L13.5967 5.41136ZM9.87301 4.88103L4.88103 9.87301L5.94169 10.9337L10.9337 5.94169L9.87301 4.88103ZM4.88103 14.127L9.87301 19.119L10.9337 18.0583L5.94169 13.0663L4.88103 14.127ZM14.127 19.119L19.119 14.127L18.0583 13.0663L13.0663 18.0583L14.127 19.119ZM19.119 9.87301L14.127 4.88103L13.0663 5.94169L18.0583 10.9337L19.119 9.87301ZM19.119 14.127C20.2937 12.9523 20.2937 11.0477 19.119 9.87301L18.0583 10.9337C18.6472 11.5226 18.6472 12.4774 18.0583 13.0663L19.119 14.127ZM9.87301 19.119C11.0477 20.2937 12.9523 20.2937 14.127 19.119L13.0663 18.0583C12.4774 18.6472 11.5226 18.6472 10.9337 18.0583L9.87301 19.119ZM4.88103 9.87301C3.70632 11.0477 3.70632 12.9523 4.88103 14.127L5.94169 13.0663C5.35277 12.4774 5.35277 11.5226 5.94169 10.9337L4.88103 9.87301ZM10.9337 5.94169C11.5226 5.35277 12.4774 5.35277 13.0663 5.94169L14.127 4.88103C12.9523 3.70632 11.0477 3.70632 9.87301 4.88103L10.9337 5.94169Z"
          fill="currentColor"
        ></path>
        <path
          d="M12 8.75V12.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function CheckIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
        ></path>
      </svg>
    );
  }

  export function CheckCircleIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
        ></path>
      </svg>
    );
  }

  export function TrashIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 7.75L6.59115 17.4233C6.68102 18.4568 7.54622 19.25 8.58363 19.25H14.4164C15.4538 19.25 16.319 18.4568 16.4088 17.4233L17.25 7.75H5.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.75 10.75V16.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.25 10.75V16.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.75 7.75V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H12.25C13.3546 4.75 14.25 5.64543 14.25 6.75V7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.75 7.75H18.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function VideoIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
        ></path>
      </svg>
    );
  }

  export function PlayIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 12L5.75 5.75V18.25L18.25 12Z"
        ></path>
      </svg>
    );
  }

  export function ArrowUpRightCircleIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.25 13.25V9.75H10.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14 10L9.75 14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function ArrowDownIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 13.75L12 19.25L6.75 13.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18.25V4.75"
        ></path>
      </svg>
    );
  }

  export function ArrowLeftIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M10.25 6.75L4.75 12L10.25 17.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 12H5"
        ></path>
      </svg>
    );
  }

  export function SparklesIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 4.75C17 5.89705 15.8971 7 14.75 7C15.8971 7 17 8.10295 17 9.25C17 8.10295 18.1029 7 19.25 7C18.1029 7 17 5.89705 17 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17 14.75C17 15.8971 15.8971 17 14.75 17C15.8971 17 17 18.1029 17 19.25C17 18.1029 18.1029 17 19.25 17C18.1029 17 17 15.8971 17 14.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9 7.75C9 9.91666 6.91666 12 4.75 12C6.91666 12 9 14.0833 9 16.25C9 14.0833 11.0833 12 13.25 12C11.0833 12 9 9.91666 9 7.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function ShieldTickIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4.75L4.75002 8C4.75002 8 4.00002 19.25 12 19.25C20 19.25 19.25 8 19.25 8L12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.75 12.75L11 14.25L14.25 9.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function DotsHorizontal(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          fill="currentColor"
          d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
        ></path>
        <path
          fill="currentColor"
          d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
        ></path>
        <path
          fill="currentColor"
          d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z"
        ></path>
      </svg>
    );
  }

  export function ClipboardIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 6.75H7.75C6.64543 6.75 5.75 7.64543 5.75 8.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V8.75C18.25 7.64543 17.3546 6.75 16.25 6.75H15"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14 8.25H10C9.44772 8.25 9 7.80228 9 7.25V5.75C9 5.19772 9.44772 4.75 10 4.75H14C14.5523 4.75 15 5.19772 15 5.75V7.25C15 7.80228 14.5523 8.25 14 8.25Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 12.25H14.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 15.25H14.25"
        ></path>
      </svg>
    );
  }

  export function GearIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.62117 14.9627L6.72197 15.1351C7.53458 15.2623 8.11491 16.0066 8.05506 16.8451L7.97396 17.9816C7.95034 18.3127 8.12672 18.6244 8.41885 18.7686L9.23303 19.1697C9.52516 19.3139 9.87399 19.2599 10.1126 19.0352L10.9307 18.262C11.5339 17.6917 12.4646 17.6917 13.0685 18.262L13.8866 19.0352C14.1252 19.2608 14.4733 19.3139 14.7662 19.1697L15.5819 18.7678C15.8733 18.6244 16.0489 18.3135 16.0253 17.9833L15.9441 16.8451C15.8843 16.0066 16.4646 15.2623 17.2772 15.1351L18.378 14.9627C18.6985 14.9128 18.9568 14.6671 19.0292 14.3433L19.23 13.4428C19.3025 13.119 19.1741 12.7831 18.9064 12.5962L17.9875 11.9526C17.3095 11.4774 17.1024 10.5495 17.5119 9.82051L18.067 8.83299C18.2284 8.54543 18.2017 8.18538 17.9993 7.92602L17.4363 7.2035C17.2339 6.94413 16.8969 6.83701 16.5867 6.93447L15.5221 7.26794C14.7355 7.51441 13.8969 7.1012 13.5945 6.31908L13.1866 5.26148C13.0669 4.95218 12.7748 4.7492 12.4496 4.75L11.5472 4.75242C11.222 4.75322 10.9307 4.95782 10.8126 5.26793L10.4149 6.31344C10.1157 7.1004 9.27319 7.51683 8.4842 7.26874L7.37553 6.92078C7.0645 6.82251 6.72591 6.93044 6.52355 7.19142L5.96448 7.91474C5.76212 8.17652 5.73771 8.53738 5.90228 8.82493L6.47 9.81487C6.88812 10.5446 6.68339 11.4814 6.00149 11.9591L5.0936 12.5954C4.82588 12.7831 4.69754 13.119 4.76998 13.442L4.97077 14.3425C5.04242 14.6671 5.30069 14.9128 5.62117 14.9627Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.5911 10.4089C14.4696 11.2875 14.4696 12.7125 13.5911 13.5911C12.7125 14.4696 11.2875 14.4696 10.4089 13.5911C9.53036 12.7125 9.53036 11.2875 10.4089 10.4089C11.2875 9.53036 12.7125 9.53036 13.5911 10.4089Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function UserCircleIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5V20C16.4183 20 20 16.4183 20 12H18.5ZM12 18.5C8.41015 18.5 5.5 15.5899 5.5 12H4C4 16.4183 7.58172 20 12 20V18.5ZM5.5 12C5.5 8.41015 8.41015 5.5 12 5.5V4C7.58172 4 4 7.58172 4 12H5.5ZM12 5.5C15.5899 5.5 18.5 8.41015 18.5 12H20C20 7.58172 16.4183 4 12 4V5.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M13.5 10C13.5 10.8284 12.8284 11.5 12 11.5V13C13.6569 13 15 11.6569 15 10H13.5ZM12 11.5C11.1716 11.5 10.5 10.8284 10.5 10H9C9 11.6569 10.3431 13 12 13V11.5ZM10.5 10C10.5 9.17157 11.1716 8.5 12 8.5V7C10.3431 7 9 8.34315 9 10H10.5ZM12 8.5C12.8284 8.5 13.5 9.17157 13.5 10H15C15 8.34315 13.6569 7 12 7V8.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M6.62148 16.5197C6.35622 16.8378 6.39908 17.3108 6.71721 17.576C7.03535 17.8413 7.50828 17.7984 7.77354 17.4803L6.62148 16.5197ZM16.2266 17.4803C16.4918 17.7984 16.9648 17.8413 17.2829 17.576C17.601 17.3108 17.6439 16.8378 17.3786 16.5197L16.2266 17.4803ZM7.77354 17.4803C8.78362 16.2689 10.3017 15.5 12.0001 15.5V14C9.83796 14 7.90434 14.9811 6.62148 16.5197L7.77354 17.4803ZM12.0001 15.5C13.6984 15.5 15.2165 16.2689 16.2266 17.4803L17.3786 16.5197C16.0958 14.9811 14.1622 14 12.0001 14V15.5Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }

  export function SpeechBubblePlusIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18.25C15.866 18.25 19.25 16.1552 19.25 11.5C19.25 6.84483 15.866 4.75 12 4.75C8.13401 4.75 4.75 6.84483 4.75 11.5C4.75 13.2675 5.23783 14.6659 6.05464 15.7206C6.29358 16.0292 6.38851 16.4392 6.2231 16.7926C6.12235 17.0079 6.01633 17.2134 5.90792 17.4082C5.45369 18.2242 6.07951 19.4131 6.99526 19.2297C8.0113 19.0263 9.14752 18.722 10.0954 18.2738C10.2933 18.1803 10.5134 18.1439 10.7305 18.1714C11.145 18.224 11.5695 18.25 12 18.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.75 12H14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 9.75V14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function LogOutIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.75 8.75L19.25 12L15.75 15.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 12H10.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"
        ></path>
      </svg>
    );
  }

  export function PicturePlusIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V16M4.75 16V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V12.25L16.5856 9.43947C15.7663 8.48581 14.2815 8.51598 13.5013 9.50017L13.4914 9.51294C13.3977 9.63414 11.9621 11.4909 10.9257 12.8094M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L10.9257 12.8094M10.9257 12.8094L12.25 14.25M10.9257 12.8094C10.9221 12.814 10.9186 12.8185 10.915 12.823"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17 14.75V19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.25 17L14.75 17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function PlusIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 5.75V18.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 12L5.75 12"
        ></path>
      </svg>
    );
  }

  export function PlusCircleIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8.75003V15.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 12L8.75 12"
        ></path>
      </svg>
    );
  }

  export function PencilIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 19.25L9 18.25L18.9491 8.30083C19.3397 7.9103 19.3397 7.27714 18.9491 6.88661L17.1134 5.05083C16.7228 4.6603 16.0897 4.6603 15.6991 5.05083L5.75 15L4.75 19.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.0234 7.03906L17.0234 10.0391"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function LinkIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16.75 13.25L18 12C19.6569 10.3431 19.6569 7.65685 18 6V6C16.3431 4.34315 13.6569 4.34315 12 6L10.75 7.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.25 10.75L6 12C4.34315 13.6569 4.34315 16.3431 6 18V18C7.65685 19.6569 10.3431 19.6569 12 18L13.25 16.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.25 9.75L9.75 14.25"
        ></path>
      </svg>
    );
  }

  export function DownloadIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 14.25L12 4.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.75 10.75L12 14.25L15.25 10.75"
        ></path>
      </svg>
    );
  }

  export function DoubleChevronRightIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.75 8.75L11.25 12L7.75 15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.75 8.75L16.25 12L12.75 15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function DoubleChevronLeftIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        {...rest}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.25 8.75L7.75 12L11.25 15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.25 8.75L12.75 12L16.25 15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function ChevronDownIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 10.75L12 14.25L8.75 10.75"
        ></path>
      </svg>
    );
  }

  export function ChevronUpIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.25 14.25L12 10.75L8.75 14.25"
        ></path>
      </svg>
    );
  }

  export function ChevronLeftIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.25 8.75L9.75 12L13.25 15.25"
        ></path>
      </svg>
    );
  }

  export function InformationIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 13V15"
        ></path>
        <circle cx="12" cy="9" r="1" fill="currentColor"></circle>
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></circle>
      </svg>
    );
  }

  export function CreditCardIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 10.25H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.75 14.25H10.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.75 14.25H16.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function FileIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18 9.25H13.75V5"
        ></path>
      </svg>
    );
  }

  export function FireIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M18.2499 14C18.2499 18 15.5 19.25 11.9999 19.25C8 19.25 5.75 16.4 5.75 14C5.75 11.6 7 9.41667 8 8.75C8 11.55 10.6666 13.3333 11.9999 13.25C9.59994 9.65 11.6666 5.66667 12.9999 4.75C12.9999 9.25 18.2499 10 18.2499 14Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function HeartIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  export function ThumbsUpIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M12.25 9.75001H11.5C11.5 10.1642 11.8358 10.5 12.25 10.5V9.75001ZM18 9.75001L18 9.00001H18V9.75001ZM12.25 6.897L11.5 6.897V6.897H12.25ZM9.77107 5.59894L9.02168 5.56871L9.02168 5.56871L9.77107 5.59894ZM7.25 9.75001L7.25 9.00001C7.05109 9.00001 6.86032 9.07903 6.71967 9.21968C6.57902 9.36033 6.5 9.5511 6.5 9.75001L7.25 9.75001ZM18 12.25L18 11.5H18V12.25ZM16.75 11.5C16.3358 11.5 16 11.8358 16 12.25C16 12.6642 16.3358 13 16.75 13V11.5ZM17.2658 17.5267L16.523 17.4234L17.2658 17.5267ZM15.0809 19.2407L15.0044 19.9868L15.0044 19.9868L15.0809 19.2407ZM8.14797 18.5296L8.22449 17.7835L8.22449 17.7835L8.14797 18.5296ZM7.25 17.5348L8 17.5348L7.25 17.5348ZM10.9795 4.84133L10.6441 5.51215L10.6441 5.51215L10.9795 4.84133ZM12.25 10.5H18V9.00001H12.25V10.5ZM13 9.75001V6.897H11.5V9.75001H13ZM9.02168 5.56871C8.98986 6.35737 8.87029 7.28162 8.55917 7.98426C8.25916 8.66183 7.85682 9.00001 7.25 9.00001L7.25 10.5C8.66762 10.5 9.49282 9.58057 9.93074 8.59156C10.3575 7.62762 10.4863 6.47634 10.5205 5.62917L9.02168 5.56871ZM18 11.5H16.75V13H18V11.5ZM17.2572 12.1467L16.523 17.4234L18.0087 17.6301L18.7428 12.3534L17.2572 12.1467ZM15.1574 18.4946L8.22449 17.7835L8.07145 19.2757L15.0044 19.9868L15.1574 18.4946ZM8 17.5348L8 9.75001L6.5 9.75001L6.5 17.5348L8 17.5348ZM8.22449 17.7835C8.09697 17.7704 8 17.663 8 17.5348L6.5 17.5348C6.5 18.4322 7.17877 19.1841 8.07145 19.2757L8.22449 17.7835ZM18.5 11C18.5 11.2762 18.2761 11.5 18 11.5L18 13C19.1046 13 20 12.1046 20 11L18.5 11ZM16.523 17.4234C16.4303 18.0898 15.8267 18.5632 15.1574 18.4946L15.0044 19.9868C16.4769 20.1378 17.8047 19.0962 18.0087 17.6301L16.523 17.4234ZM11.3149 4.17051C10.2352 3.63063 9.06523 4.48919 9.02168 5.56871L10.5205 5.62917C10.5217 5.59822 10.5406 5.5562 10.5864 5.52693C10.6071 5.51378 10.6234 5.51013 10.6311 5.50947C10.6361 5.50905 10.6385 5.50932 10.6441 5.51215L11.3149 4.17051ZM13 6.897C13 5.74239 12.3477 4.68687 11.3149 4.17051L10.6441 5.51215C11.1687 5.77443 11.5 6.31055 11.5 6.897L13 6.897ZM18 10.5C18.2761 10.5 18.5 10.7239 18.5 11L20 11C20 9.89544 19.1046 9.00001 18 9.00001L18 10.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M5.75 9.5H6.25V8H5.75V9.5ZM6.5 9.75V18.25H8V9.75H6.5ZM6.25 18.5H5.75V20H6.25V18.5ZM5.5 18.25V9.75H4V18.25H5.5ZM5.75 18.5C5.61193 18.5 5.5 18.3881 5.5 18.25H4C4 19.2165 4.7835 20 5.75 20V18.5ZM6.5 18.25C6.5 18.3881 6.38807 18.5 6.25 18.5V20C7.2165 20 8 19.2165 8 18.25H6.5ZM6.25 9.5C6.38807 9.5 6.5 9.61193 6.5 9.75H8C8 8.7835 7.2165 8 6.25 8V9.5ZM5.75 8C4.7835 8 4 8.7835 4 9.75H5.5C5.5 9.61193 5.61193 9.5 5.75 9.5V8Z"
          fill="currentColor"
        ></path>
      </svg>
    );
  }

  export function TagIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <circle cx="15" cy="9" r="1" fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 4.75H19.25V12L12.5535 18.6708C11.7544 19.4668 10.4556 19.445 9.68369 18.6226L5.28993 13.941C4.54041 13.1424 4.57265 11.8895 5.36226 11.1305L12 4.75Z"
        ></path>
      </svg>
    );
  }

  export function NotificationBellIcon(props: IconProps) {
      const { size = 24, ...rest } = props;

      return (
        <svg width={size} height={size} fill="none" viewBox="0 0 19 19" {...rest}>
            <path d="M10.5 16.75H7.5M13.5 7C13.5 5.80653 13.0259 4.66193 12.182 3.81802C11.3381 2.97411 10.1935 2.5 9 2.5C7.80652 2.5 6.66193 2.97411 5.81802 3.81802C4.9741 4.66193 4.5 5.80653 4.5 7C4.5 9.31764 3.91535 10.9045 3.26225 11.9541C2.71134 12.8394 2.43589 13.2821 2.44599 13.4056C2.45718 13.5423 2.48614 13.5944 2.59633 13.6762C2.69584 13.75 3.14444 13.75 4.04164 13.75H13.9584C14.8556 13.75 15.3042 13.75 15.4037 13.6762C15.5139 13.5944 15.5428 13.5423 15.554 13.4056C15.5641 13.2821 15.2887 12.8394 14.7378 11.9541C14.0846 10.9045 13.5 9.31764 13.5 7Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="14" cy="5" r="4" fill="#EF4444" stroke="#8B5CF6"/>
        </svg>
    )
  }

export function UserIcon(props: IconProps) {
    const { size = 20, ...rest } = props;

    return (
        <svg
            width={size}
            height={size}
            {...rest}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="12"
                cy="8"
                r="3.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            ></circle>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
            ></path>
        </svg>
    );
}


export function BellIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
        <svg width={size} height={size} fill="none"  viewBox="0 0 19 19"  {...rest}>
            <path d="M10.5 15.75H7.49995M13.5 6C13.5 4.80653 13.0258 3.66193 12.1819 2.81802C11.338 1.97411 10.1934 1.5 8.99995 1.5C7.80648 1.5 6.66189 1.97411 5.81797 2.81802C4.97406 3.66193 4.49995 4.80653 4.49995 6C4.49995 8.31764 3.91531 9.90447 3.2622 10.9541C2.7113 11.8394 2.43585 12.2821 2.44595 12.4056C2.45713 12.5423 2.4861 12.5944 2.59628 12.6762C2.6958 12.75 3.1444 12.75 4.04159 12.75H13.9583C14.8555 12.75 15.3041 12.75 15.4036 12.6762C15.5138 12.5944 15.5428 12.5423 15.554 12.4056C15.5641 12.2821 15.2886 11.8394 14.7377 10.9541C14.0846 9.90447 13.5 8.31764 13.5 6Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
  }

  export function BellOffIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 6.875V12L19.25 16.25H7.75M5.75 14.125L6.75 12V10C6.75 7.10051 9.10051 4.75 12 4.75C12 4.75 13.6094 4.75002 14.5938 5.24998"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 16.75C9 16.75 9 19.25 12 19.25C15 19.25 15 16.75 15 16.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 4.75L4.75 19.25"
        ></path>
      </svg>
    );
  }

  export function ProjectsIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M4.75 6.75V8.25C4.75 9.35457 5.64543 10.25 6.75 10.25H8.25C9.35457 10.25 10.25 9.35457 10.25 8.25V6.75C10.25 5.64543 9.35457 4.75 8.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.75 7H19.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17 4.75L17 9.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.75 15.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H8.25C9.35457 19.25 10.25 18.3546 10.25 17.25V15.75C10.25 14.6454 9.35457 13.75 8.25 13.75H6.75C5.64543 13.75 4.75 14.6454 4.75 15.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.75 15.75V17.25C13.75 18.3546 14.6454 19.25 15.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V15.75C19.25 14.6454 18.3546 13.75 17.25 13.75H15.75C14.6454 13.75 13.75 14.6454 13.75 15.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function ArchiveIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.25 8.75H5.75L6.57758 17.4396C6.67534 18.4661 7.53746 19.25 8.56857 19.25H15.4314C16.4625 19.25 17.3247 18.4661 17.4224 17.4396L18.25 8.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H5.75C5.19771 4.75 4.75 5.19772 4.75 5.75V7.75C4.75 8.30228 5.19772 8.75 5.75 8.75H18.25C18.8023 8.75 19.25 8.30228 19.25 7.75V5.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.75 13.25H14.25"
        ></path>
      </svg>
    );
  }

  export function LightbulbIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M12 4.75C8.5 4.75 6.75 7.5 6.75 10C6.75 14 9.75 14.5 9.75 16V18.2505C9.75 18.8028 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8028 14.25 18.2505V16C14.25 14.5 17.25 14 17.25 10C17.25 7.5 15.5 4.75 12 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10 16.75H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function QRCodeIcon(props: IconProps) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M7.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25L4.75 16.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5.75 12.75L8.25 12.75C9.35457 12.75 10.25 13.6454 10.25 14.75L10.25 16.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.25 14.75L15.75 14.75C15.1977 14.75 14.75 15.1977 14.75 15.75L14.75 18.25C14.75 18.8023 15.1977 19.25 15.75 19.25L18.25 19.25C18.8023 19.25 19.25 18.8023 19.25 18.25V15.75C19.25 15.1977 18.8023 14.75 18.25 14.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.75 11.25L19.25 11.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.75 7.75L15.25 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M15.75 4.75L17.25 4.75C18.3546 4.75 19.25 5.64543 19.25 6.75L19.25 8.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.25 4.75L5.75 4.75C5.19772 4.75 4.75 5.19772 4.75 5.75L4.75 8.25C4.75 8.80228 5.19772 9.25 5.75 9.25L8.25 9.25C8.80228 9.25 9.25 8.80228 9.25 8.25L9.25 5.75C9.25 5.19772 8.80228 4.75 8.25 4.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }

  export function ExternalShareIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V14.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.25 9.25V4.75H14.75"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 5L11.75 12.25"
        ></path>
      </svg>
    );
  }

  export function ReorderDotsIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  export function ArrowRightIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.75 6.75L19.25 12L13.75 17.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19 12H4.75"
        ></path>
      </svg>
    );
  }

  export function CalendarIcon(props: any) {
    const { size = 24, ...rest } = props;

    return (
      <svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...rest}>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 4.75V8.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M16 4.75V8.25"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.75 10.75H16.25"
        ></path>
      </svg>
    );
  }
  export function SlackIcon(props: any) {
    const { size = 24 } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1841_4486)">
          <path
            d="M5.13937 15.1181C5.13937 16.4977 4.02441 17.6126 2.64488 17.6126C1.26535 17.6126 0.150391 16.4977 0.150391 15.1181C0.150391 13.7386 1.26535 12.6237 2.64488 12.6237H5.13937V15.1181ZM6.38661 15.1181C6.38661 13.7386 7.50157 12.6237 8.8811 12.6237C10.2606 12.6237 11.3756 13.7386 11.3756 15.1181V21.3544C11.3756 22.7339 10.2606 23.8489 8.8811 23.8489C7.50157 23.8489 6.38661 22.7339 6.38661 21.3544V15.1181Z"
            fill="#E01E5A"
          />
          <path
            d="M8.88144 5.10238C7.50191 5.10238 6.38695 3.98742 6.38695 2.60789C6.38695 1.22836 7.50191 0.113403 8.88144 0.113403C10.261 0.113403 11.3759 1.22836 11.3759 2.60789V5.10238H8.88144ZM8.88144 6.36852C10.261 6.36852 11.3759 7.48348 11.3759 8.86301C11.3759 10.2425 10.261 11.3575 8.88144 11.3575H2.62632C1.2468 11.3575 0.131836 10.2425 0.131836 8.86301C0.131836 7.48348 1.2468 6.36852 2.62632 6.36852H8.88144Z"
            fill="#36C5F0"
          />
          <path
            d="M18.8788 8.86301C18.8788 7.48348 19.9938 6.36852 21.3733 6.36852C22.7528 6.36852 23.8678 7.48348 23.8678 8.86301C23.8678 10.2425 22.7528 11.3575 21.3733 11.3575H18.8788V8.86301ZM17.6316 8.86301C17.6316 10.2425 16.5166 11.3575 15.1371 11.3575C13.7575 11.3575 12.6426 10.2425 12.6426 8.86301V2.60789C12.6426 1.22836 13.7575 0.113403 15.1371 0.113403C16.5166 0.113403 17.6316 1.22836 17.6316 2.60789V8.86301V8.86301Z"
            fill="#2EB67D"
          />
          <path
            d="M15.1371 18.8599C16.5166 18.8599 17.6316 19.9748 17.6316 21.3544C17.6316 22.7339 16.5166 23.8489 15.1371 23.8489C13.7575 23.8489 12.6426 22.7339 12.6426 21.3544V18.8599H15.1371ZM15.1371 17.6126C13.7575 17.6126 12.6426 16.4977 12.6426 15.1181C12.6426 13.7386 13.7575 12.6237 15.1371 12.6237H21.3922C22.7717 12.6237 23.8867 13.7386 23.8867 15.1181C23.8867 16.4977 22.7717 17.6126 21.3922 17.6126H15.1371Z"
            fill="#ECB22E"
          />
        </g>
        <defs>
          <clipPath id="clip0_1841_4486">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  export function GoogleCalendarIcon(props: any) {
    const { size = 24 } = props;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1841_4477)">
          <path
            d="M18.3161 5.6842H5.68457V18.3158H18.3161V5.6842Z"
            fill="white"
          />
          <path d="M18.3154 24L23.9996 18.3158H18.3154V24Z" fill="#EA4335" />
          <path
            d="M23.9996 5.6842H18.3154V18.3158H23.9996V5.6842Z"
            fill="#FBBC04"
          />
          <path d="M18.3161 18.3158H5.68457V24H18.3161V18.3158Z" fill="#34A853" />
          <path
            d="M0 18.3158V22.1053C0 23.1521 0.847895 24 1.89474 24H5.68421V18.3158H0Z"
            fill="#188038"
          />
          <path
            d="M23.9996 5.68421V1.89474C23.9996 0.847895 23.1517 0 22.1049 0H18.3154V5.68421H23.9996Z"
            fill="#1967D2"
          />
          <path
            d="M18.3158 0H1.89474C0.847895 0 0 0.847895 0 1.89474V18.3158H5.68421V5.68421H18.3158V0Z"
            fill="#4285F4"
          />
          <path
            d="M8.27522 15.4832C7.80312 15.1642 7.47627 14.6984 7.29785 14.0826L8.39364 13.6311C8.49312 14.01 8.6668 14.3037 8.91469 14.5121C9.16101 14.7205 9.46101 14.8232 9.81154 14.8232C10.17 14.8232 10.4779 14.7142 10.7352 14.4963C10.9926 14.2784 11.1221 14.0005 11.1221 13.6642C11.1221 13.32 10.9863 13.0389 10.7147 12.8211C10.4431 12.6032 10.1021 12.4942 9.69469 12.4942H9.06154V11.4095H9.62996C9.98048 11.4095 10.2757 11.3147 10.5157 11.1253C10.7557 10.9358 10.8757 10.6768 10.8757 10.3468C10.8757 10.0532 10.7684 9.81947 10.5536 9.64421C10.3389 9.46895 10.0673 9.38053 9.73733 9.38053C9.41522 9.38053 9.15943 9.46579 8.96996 9.63789C8.78061 9.81046 8.63825 10.0283 8.55627 10.2711L7.47154 9.81947C7.61522 9.4121 7.8789 9.0521 8.26575 8.74105C8.65259 8.43 9.1468 8.27368 9.7468 8.27368C10.1905 8.27368 10.59 8.35895 10.9436 8.53105C11.2973 8.70316 11.5752 8.94158 11.7757 9.24474C11.9763 9.54947 12.0757 9.89052 12.0757 10.2695C12.0757 10.6563 11.9826 10.9832 11.7963 11.2516C11.61 11.52 11.381 11.7253 11.1094 11.8689V11.9337C11.4601 12.0783 11.7647 12.3157 11.9905 12.6205C12.2194 12.9284 12.3347 13.2963 12.3347 13.7258C12.3347 14.1553 12.2257 14.5389 12.0078 14.8753C11.79 15.2116 11.4884 15.4768 11.1063 15.6695C10.7226 15.8621 10.2915 15.96 9.81311 15.96C9.2589 15.9616 8.74733 15.8021 8.27522 15.4832V15.4832ZM15.0063 10.0453L13.8031 10.9153L13.2015 10.0026L15.36 8.44579H16.1873V15.7895H15.0063V10.0453Z"
            fill="#4285F4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1841_4477">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  export function FigmaIcon() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6Z"
          fill="#1ABCFE"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 10C2 8.89543 2.89543 8 4 8H6V10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10Z"
          fill="#0ACF83"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0V4H8C9.10457 4 10 3.10457 10 2C10 0.895431 9.10457 0 8 0H6Z"
          fill="#FF7262"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2C2 3.10457 2.89543 4 4 4H6V0H4C2.89543 0 2 0.895431 2 2Z"
          fill="#F24E1E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 6C2 7.10457 2.89543 8 4 8H6V4H4C2.89543 4 2 4.89543 2 6Z"
          fill="#A259FF"
        />
      </svg>
    );
  }
