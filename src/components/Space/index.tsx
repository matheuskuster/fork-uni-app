import { Spacer, VStack } from 'react-native-stacks';

interface SpaceProps {
  size: number;
}

export function Space({ size }: SpaceProps) {
  return (
    <VStack spacing={size}>
      <Spacer />
    </VStack>
  );
}
