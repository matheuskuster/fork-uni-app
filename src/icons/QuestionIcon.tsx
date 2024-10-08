import Svg, { Path } from 'react-native-svg';

interface QuestionIconProps {
  size?: number;
  color?: string;
}

export function QuestionIcon({
  size = 28,
  color = '#A1FF00',
}: QuestionIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 21C14.7249 21 15.3125 20.4124 15.3125 19.6875C15.3125 18.9626 14.7249 18.375 14 18.375C13.2751 18.375 12.6875 18.9626 12.6875 19.6875C12.6875 20.4124 13.2751 21 14 21Z"
        fill={color}
      />
      <Path
        d="M14 15.75V14.875C14.6057 14.875 15.1978 14.6954 15.7014 14.3589C16.2051 14.0224 16.5976 13.5441 16.8294 12.9845C17.0612 12.4249 17.1218 11.8091 17.0037 11.215C16.8855 10.621 16.5938 10.0753 16.1655 9.64699C15.7372 9.21869 15.1915 8.92701 14.5975 8.80885C14.0034 8.69068 13.3876 8.75133 12.828 8.98312C12.2684 9.21491 11.7901 9.60744 11.4536 10.1111C11.1171 10.6147 10.9375 11.2068 10.9375 11.8125"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
