import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

export const PlayIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M8 5v10l8-5-8-5z" fill={color} />
  </Svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill={color} />
  </Svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" fill={color} />
  </Svg>
);

export const CheckIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
  </Svg>
);

export const ChartIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" fill={color} />
  </Svg>
);

export const UsersIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" fill={color} />
  </Svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} style={style}>
    <Path d="M15 19l-7-7 7-7" />
  </Svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} style={style}>
    <Path d="M9 5l7 7-7 7" />
  </Svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill={color} />
  </Svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" fill={color} />
  </Svg>
);

export const HomeIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" fill={color} />
  </Svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill={color} />
  </Svg>
);

export const BellIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" fill={color} />
  </Svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" fill={color} />
  </Svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" fill={color} />
  </Svg>
);

export const MicrophoneIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" fill={color} />
  </Svg>
);

export const VideoIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" fill={color} />
  </Svg>
);

export const HeartIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fill={color} />
  </Svg>
);

export const MessageIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" fill={color} />
    <Path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" fill={color} />
  </Svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" fill={color} />
  </Svg>
);

export const BookmarkIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" fill={color} />
  </Svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" fill={color} />
  </Svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill={color} />
  </Svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" fill={color} />
  </Svg>
);

export const MailIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" fill={color} />
    <Path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" fill={color} />
  </Svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" fill={color} />
  </Svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9 12l2 2 4-4m5.736-4A2 2 0 0118 7v3c0 1.657-3.134 3-7 3s-7-1.343-7-3V7a2 2 0 011.264-1.86L10 2l4.736 2.14z" fill={color} />
  </Svg>
);

export const GamepadIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M6 3h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v10h8V5H6zm2 2h4v2H8V7zm0 4h4v2H8v-2z" fill={color} />
  </Svg>
);

export const GoogleIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <Path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <Path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <Path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </Svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
  </Svg>
);

export const AppleIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000000"/>
  </Svg>
);

export const VisaIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M22.4 4H1.6C.72 4 0 4.72 0 5.6v12.8C0 19.28.72 20 1.6 20h20.8c.88 0 1.6-.72 1.6-1.6V5.6C24 4.72 23.28 4 22.4 4zM7.2 15.2H5.6l-1.2-6.4h1.6l1.2 6.4zm-2.4-6.4l-1.2 4.8h1.6l1.2-4.8H4.8zm8.8 6.4h-1.6l-1.2-6.4h1.6l1.2 6.4zm-2.4-6.4l-1.2 4.8h1.6l1.2-4.8h-1.6zm8.8 6.4h-1.6l-1.2-6.4h1.6l1.2 6.4zm-2.4-6.4l-1.2 4.8h1.6l1.2-4.8h-1.6z" fill="#1A1F71"/>
  </Svg>
);

export const MastercardIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#EB001B"/>
    <Path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#F79E1B"/>
  </Svg>
);

export const PayPalIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M20.067 8.478c.492 0 .924.09 1.296.27.372.18.688.43.948.75.26.32.464.69.612 1.11.148.42.222.87.222 1.35 0 .48-.074.93-.222 1.35-.148.42-.352.79-.612 1.11-.26.32-.576.57-.948.75-.372.18-.804.27-1.296.27h-1.5l-.75 3.75h-1.5l2.25-11.25h2.25zm-1.5 1.5h-.75l-1.5 7.5h.75c.32 0 .6-.06.84-.18.24-.12.44-.28.6-.48.16-.2.28-.44.36-.72.08-.28.12-.58.12-.9 0-.32-.04-.62-.12-.9-.08-.28-.2-.52-.36-.72-.16-.2-.36-.36-.6-.48-.24-.12-.52-.18-.84-.18z" fill="#003087"/>
  </Svg>
);

export const MobileMoneyIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V6h10v10z" fill={color}/>
  </Svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill={color} />
  </Svg>
);

export const TrashIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" fill={color} />
  </Svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill={color} />
  </Svg>
);

export const EyeIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill={color} />
    <Path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill={color} />
  </Svg>
);

export const ExclamationTriangleIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" fill={color} />
  </Svg>
);

export const PauseIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" fill={color} />
  </Svg>
);

export const StopIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M5 4a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5z" fill={color} />
  </Svg>
);

export const CogIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" fill={color} />
  </Svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ size = 24, color = '#FFFFFF', style }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" style={style}>
    <Path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l4.883-3.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" fill={color} />
  </Svg>
);
