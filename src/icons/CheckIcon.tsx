import Svg, { Circle, Path } from 'react-native-svg';

interface CheckIconProps {
  size?: number;
}

export function CheckIcon({ size = 32 }: CheckIconProps) {
  return (
    <Svg width="144" height="144" viewBox="0 0 144 144" fill="none">
      <Circle cx="72" cy="72" r="72" fill="#A1FF00" />
      <Path
        d="M106.333 47L60.5001 92.8333L39.6667 72"
        stroke="#1B1B1B"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
