import React from 'react';

import * as S from './styles';

import { PencilIcon } from '@/icons/PencilIcon';

interface MethodProps {
  icon: React.ReactNode;
  description: string;
}

export function Method({ icon, description }: MethodProps) {
  return (
    <S.Container>
      <S.MethodContainer>
        <S.Title>MÉTODO</S.Title>
        <S.PickedMethodContainer>
          {icon}
          <S.Description>{description}</S.Description>
        </S.PickedMethodContainer>
      </S.MethodContainer>
      <S.ChangeButton>
        <PencilIcon />
      </S.ChangeButton>
    </S.Container>
  );
}
