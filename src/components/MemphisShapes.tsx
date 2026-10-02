import React from "react";

export function TorusShape({ className = "w-16 h-16", color = "#D6FE04" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="42" ry="28" stroke={color} strokeWidth="16" />
      <ellipse cx="48" cy="46" rx="38" ry="24" stroke="white" strokeWidth="3" opacity="0.6" />
    </svg>
  );
}

export function ZigZagShape({ className = "w-14 h-14", color = "white" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 20L30 35L10 50L30 65"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConeShape({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 10L72 75C72 75 58 84 40 84C22 84 8 75 8 75L40 10Z" fill="white" fillOpacity="0.9" />
      <ellipse cx="40" cy="74" rx="32" ry="10" fill="#E2E8F0" />
      <path d="M40 10L72 75C72 75 58 84 40 84L40 10Z" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

export function LimeBlobShape({ className = "w-20 h-20" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 35C20 22 32 15 45 20L65 26C78 30 85 45 78 58L72 70C65 82 48 85 36 78L26 70C18 64 20 48 20 35Z"
        fill="#D6FE04"
      />
    </svg>
  );
}

export function GeometricPill({ className = "w-12 h-6", color = "white" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="56" height="26" rx="13" fill={color} />
    </svg>
  );
}
