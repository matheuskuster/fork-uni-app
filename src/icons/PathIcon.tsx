import Svg, { Path } from 'react-native-svg';

interface QuestionIconProps {
  size?: number;
  color?: string;
}

export function PathIcon({ size = 32, color = '#0F0F0F' }: QuestionIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 7H21C22.0609 7 23.0783 7.42143 23.8284 8.17157C24.5786 8.92172 25 9.93913 25 11C25 12.0609 24.5786 13.0783 23.8284 13.8284C23.0783 14.5786 22.0609 15 21 15H9C7.67392 15 6.40215 15.5268 5.46447 16.4645C4.52678 17.4021 4 18.6739 4 20C4 21.3261 4.52678 22.5979 5.46447 23.5355C6.40215 24.4732 7.67392 25 9 25H22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
