export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C5060F" />
          <stop offset="100%" stopColor="#850008" />
        </linearGradient>
      </defs>

      {/* Rounded square background */}
      <rect width="36" height="36" rx="9" fill="url(#logoBg)" />

      {/* Subtle inner highlight border */}
      <rect
        x="0.75" y="0.75"
        width="34.5" height="34.5"
        rx="8.25"
        stroke="rgba(255,255,255,0.13)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Terminal chevron ">" — two arms meeting at a point */}
      <path
        d="M8 12.5 L16 18.5 L8 24.5"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Cursor underscore "_" — same baseline as bottom of chevron */}
      <line
        x1="20" y1="25"
        x2="29.5" y2="25"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
