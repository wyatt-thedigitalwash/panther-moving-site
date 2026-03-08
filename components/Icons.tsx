interface IconProps {
  color?: string;
  size?: number;
}

export function TruckIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M4 12h26v20H4z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M30 22h8l6 8v6h-14V22z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="14" cy="34" r="3" stroke={color} strokeWidth="2.5" />
      <circle cx="38" cy="34" r="3" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

export function BoxIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 16l18-10 18 10v20l-18 10-18-10V16z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M6 16l18 10 18-10M24 26v20" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 4L8 12v12c0 10 7 18 16 22 9-4 16-12 16-22V12L24 4z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M18 24l4 4 8-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke={color} strokeWidth="2.5" />
      <path d="M24 12v12l8 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M6 24L24 6l18 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22v18h10V30h8v10h10V22" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function BuildingIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="6" width="20" height="36" rx="2" stroke={color} strokeWidth="2.5" />
      <rect x="28" y="18" width="14" height="24" rx="2" stroke={color} strokeWidth="2.5" />
      <path d="M14 14h4M14 20h4M14 26h4M14 32h4M33 26h4M33 32h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SofaIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M8 20v-6a4 4 0 014-4h24a4 4 0 014 4v6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 20a4 4 0 014 4v4h32v-4a4 4 0 018 0v8H4v-8a4 4 0 010-4z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 36v4M38 36v4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HandIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M14 28V8a3 3 0 016 0v14M20 22V6a3 3 0 016 0v16M26 22V8a3 3 0 016 0v14M32 22v-8a3 3 0 016 0v14c0 10-6 18-16 18S12 38 12 32v-6a3 3 0 016 0v2" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ApartmentIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="12" y="4" width="24" height="38" rx="2" stroke={color} strokeWidth="2.5" />
      <path d="M18 12h4M26 12h4M18 20h4M26 20h4M18 28h4M26 28h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 42v-6h8v6" stroke={color} strokeWidth="2.5" />
    </svg>
  );
}

export function QuoteIcon({ color = "#C9AC2A", size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M8 8h32v24H22l-8 8v-8H8V8z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 18h16M16 24h10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ color = "#C9AC2A" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2.9 6.3L22 9.2l-5 4.8L18.2 22 12 18.3 5.8 22 7 14l-5-4.8 7.1-.9z" />
    </svg>
  );
}

export function CheckIcon({ color = "#C9AC2A" }: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l5 5L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ color = "#ffffff" }: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 11.91a16 16 0 006 6l2.27-2.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
