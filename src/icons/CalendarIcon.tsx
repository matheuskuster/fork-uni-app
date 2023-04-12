import { useMemo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface CalendarIconProps {
  size?: number;
  color?: string;
}

export function CalendarIcon({
  size = 18,
  color = '#A1FF00',
}: CalendarIconProps) {
  const height = useMemo(() => size / 0.9, [size]);

  return (
    <Svg width={size} height={height} viewBox="0 0 18 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3.5C0 2.67157 0.671573 2 1.5 2H16.5C17.3284 2 18 2.67157 18 3.5V18.5C18 19.3284 17.3284 20 16.5 20H1.5C0.671573 20 0 19.3284 0 18.5V3.5ZM16.5 3.5H1.5V18.5H16.5V3.5Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 0.5C13.9142 0.5 14.25 0.835786 14.25 1.25V4.25C14.25 4.66421 13.9142 5 13.5 5C13.0858 5 12.75 4.66421 12.75 4.25V1.25C12.75 0.835786 13.0858 0.5 13.5 0.5Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.5 0.5C4.91421 0.5 5.25 0.835786 5.25 1.25V4.25C5.25 4.66421 4.91421 5 4.5 5C4.08579 5 3.75 4.66421 3.75 4.25V1.25C3.75 0.835786 4.08579 0.5 4.5 0.5Z"
        fill={color}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 7.25C0 6.83579 0.335786 6.5 0.75 6.5H17.25C17.6642 6.5 18 6.83579 18 7.25C18 7.66421 17.6642 8 17.25 8H0.75C0.335786 8 0 7.66421 0 7.25Z"
        fill={color}
      />
    </Svg>
  );
}
