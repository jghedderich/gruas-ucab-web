export const ToggleOffIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 44 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_39_10639)">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z"
          fill="#F2F4F7"
        />
        <g filter="url(#filter0_dd_39_10639)">
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_39_10639"
          x="-1"
          y="0"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_39_10639"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_39_10639"
            result="effect2_dropShadow_39_10639"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_39_10639"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_39_10639">
          <path
            d="M0 12C0 5.37258 5.37258 0 12 0H32C38.6274 0 44 5.37258 44 12C44 18.6274 38.6274 24 32 24H12C5.37258 24 0 18.6274 0 12Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
