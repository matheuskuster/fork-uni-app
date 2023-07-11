import { useMemo } from 'react';
import Svg, { Path } from 'react-native-svg';

interface UniLogoProps {
  size?: number;
  color?: string;
}

export function UniLogo({ size = 41, color = '#A1FF00' }: UniLogoProps) {
  const height = useMemo(() => size * 0.878048780487804, [size]);

  return (
    <Svg width={size} height={height} viewBox="0 0 41 36" fill="none">
      <Path
        d="M21.137 24.0369L15.2752 18.2105L8.08557 25.2512L17.4073 34.5233C18.4166 35.5299 19.7553 36.0199 21.0885 35.9986C22.4217 36.0305 23.7603 35.5512 24.7804 34.55L40.9571 18.7111L33.8215 11.6172L21.1316 24.0422L21.137 24.0369Z"
        fill={color}
      />
      <Path
        d="M19.8255 11.9632L25.6873 17.7896L32.877 10.7489L23.5553 1.47674C22.5405 0.470166 21.2019 -0.0198055 19.8741 0.00149755C18.5409 -0.0304571 17.2023 0.448862 16.1821 1.45011L0 17.289L7.13567 24.3829L19.8255 11.9579V11.9632Z"
        fill={color}
      />
    </Svg>
  );
}
