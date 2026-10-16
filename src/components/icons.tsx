import type { CSSProperties } from "react";

const paths = {
  arrow: (
    <>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </>
  ),
  external: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  down: (
    <>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </>
  ),
  brain: (
    <>
      <path d="M12 20V5m0 1C9 1 5 3 5 6c-4 0-4 6-2 7-2 3 0 6 3 6 0 3 4 4 6 1m0-14c3-5 7-3 7 0 4 0 4 6 2 7 2 3 0 6-3 6 0 3-4 4-6 1M5 6c0 2 1 3 3 3m-5 4 4-1m-1 7 2-3m11-10c0 2-1 3-3 3m5 4-4-1m1 7-2-3M8 5v1m8-1v1M8 12l1 2m7-2-1 2" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V5l11-3v13M9 9l11-3" />
      <ellipse cx="5.5" cy="18" rx="3.5" ry="3" />
      <ellipse cx="16.5" cy="15" rx="3.5" ry="3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M15 4a3 3 0 0 1 0 6M2 21v-3a6 6 0 0 1 12 0v3Zm14-7a5 5 0 0 1 6 5v2h-5" />
    </>
  ),
  plane: (
    <g transform="rotate(35 12 12)">
      <path d="M12 2c-1 0-1.5 1.2-1.5 2.5V9L3 13v2l7.5-1.5V19L8 21v1l4-1 4 1v-1l-2.5-2v-5.5L21 15v-2l-7.5-4V4.5C13.5 3.2 13 2 12 2Z" />
    </g>
  ),
  gym: (
    <>
      <path d="M6 9h12M6 15h12M3 6h3v12H3Zm15 0h3v12h-3ZM1 9v6m22-6v6" />
    </>
  ),
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 1.8a10.3 10.3 0 0 0-3.25 20.07c.52.1.7-.23.7-.5v-1.75c-2.88.63-3.49-1.22-3.49-1.22-.47-1.2-1.15-1.52-1.15-1.52-.94-.65.07-.63.07-.63 1.04.08 1.59 1.07 1.59 1.07.92 1.58 2.42 1.13 3.01.87.1-.67.36-1.13.66-1.39-2.3-.26-4.72-1.15-4.72-5.1 0-1.13.4-2.05 1.06-2.77-.1-.26-.46-1.31.1-2.73 0 0 .87-.28 2.83 1.06a9.8 9.8 0 0 1 5.17 0c1.96-1.34 2.82-1.06 2.82-1.06.57 1.42.21 2.47.1 2.73.66.72 1.06 1.64 1.06 2.77 0 3.96-2.42 4.84-4.73 5.1.37.32.7.95.7 1.92v2.65c0 .28.18.61.71.5A10.3 10.3 0 0 0 12 1.8Z"
    />
  ),
  linkedin: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" stroke="none" />
      <path
        d="M7 10v8m0-12v.5m5 11.5v-8m0 4c0-5 6-5 6 0v4"
        stroke="var(--foreground)"
        strokeWidth="2"
      />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 10 5-10 5L2 7Zm-9 9-1 1 10 5 10-5-1-1M3 16l-1 1 10 5 10-5-1-1" />
    </>
  ),
  circles: (
    <>
      <circle cx="8.5" cy="12" r="7.5" />
      <circle cx="15.5" cy="12" r="7.5" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "",
  style,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      width="62"
      height="64"
      viewBox="0 0 62 64"
      fill="none"
    >
      <path
        d="M47 3c0 27-15 36-35 45m3-12L9 50l16 1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
