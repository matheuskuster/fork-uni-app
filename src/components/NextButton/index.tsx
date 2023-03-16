import { Feather } from '@expo/vector-icons';

import { Button, ButtonProps } from '@/components/Button';

interface NextButtonProps extends Omit<ButtonProps, 'rightIcon'> {}

export function NextButton({ children, ...props }: NextButtonProps) {
  const NextIcon = () => <Feather name="arrow-right" size={24} color="black" />;

  return (
    <Button rightIcon={<NextIcon />} {...props}>
      {children}
    </Button>
  );
}
