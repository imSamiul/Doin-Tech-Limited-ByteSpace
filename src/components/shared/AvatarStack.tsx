import Image, { StaticImageData } from 'next/image';

export const DEFAULT_AVATARS: string[] = [
  '/hero-assets/StudentAvatar1.png',
  '/hero-assets/StudentAvatar2.png',
  '/hero-assets/StudentAvatar3.png',
  '/hero-assets/StudentAvatar4.png',
  '/hero-assets/StudentAvatar5.png',
  '/hero-assets/StudentAvatar6.png',
  '/hero-assets/StudentAvatar7.png',
];

export type AvatarStackSize = 'sm' | 'md' | 'lg';

export interface AvatarStackProps {
  avatars?: (string | StaticImageData)[];
  limit?: number; // Maximum number of avatar images to show before the badge (e.g., 5 for CourseCard)
  badgeText?: string; // Text for the count badge (e.g., "26+" or "2K+")
  size?: AvatarStackSize;
  className?: string;
}

const SIZE_CONFIG = {
  sm: {
    spacing: '-space-x-2',
    avatarSize: 'size-6',
    dimension: 24,
    badgeSize: 'size-6',
    badgeText: "text-[9px] font-bold font-['Satoshi'] leading-none",
    border: '',
  },
  md: {
    spacing: '-space-x-2.5',
    avatarSize: 'size-8',
    dimension: 32,
    badgeSize: 'size-9',
    badgeText: "text-[10px] font-bold font-['Satoshi'] leading-none",
    border: '',
  },
  lg: {
    spacing: '-space-x-4',
    avatarSize: 'size-10.75',
    dimension: 43,
    badgeSize: 'size-10.75',
    badgeText: "text-[12px] font-bold font-['Satoshi'] leading-[150%]",
    border: '',
  },
};

export default function AvatarStack({
  avatars = DEFAULT_AVATARS,
  limit,
  badgeText = '26+',
  size = 'sm',
  className = '',
}: AvatarStackProps) {
  const config = SIZE_CONFIG[size] || SIZE_CONFIG.sm;
  const displayAvatars = limit ? avatars.slice(0, limit) : avatars;

  return (
    <div
      className={`relative flex items-center ${config.spacing} pt-0.5 ${className}`}
    >
      {/* Avatar Images */}
      {displayAvatars.map((src, index) => (
        <Image
          key={index}
          className={`${config.avatarSize} ${config.border} rounded-full object-cover shrink-0`}
          src={src}
          alt={`Student Avatar ${index + 1}`}
          width={config.dimension}
          height={config.dimension}
        />
      ))}

      {/* Pill Badge */}
      {badgeText && (
        <div
          className={`${config.badgeSize} ${config.border} bg-electric-Lime-400 rounded-full flex items-center justify-center shrink-0 z-10`}
        >
          <span className={`text-gray-950 ${config.badgeText}`}>
            {badgeText}
          </span>
        </div>
      )}
    </div>
  );
}
