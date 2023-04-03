import { useEffect, useRef, useState } from 'react';
import { TextInput, ViewProps } from 'react-native';
import { HStack } from 'react-native-stacks';

import * as S from './styles';

interface VerifyCodeInputProps extends ViewProps {
  onChange?(code: string): void;
}

export function VerifyCodeInput(props: VerifyCodeInputProps) {
  const { onChange } = props;

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [currentPosition, setCurrentPosition] = useState(0);
  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onInputFocus = (position: number) => {
    setCurrentPosition(position);
  };

  const onCharacterInput = (position: number, character: string) => {
    if (isNaN(Number(character))) {
      return;
    }

    if (character.length > 1) {
      return onPaste(character);
    }

    if (character.length === 0) {
      return onBackspace(position);
    }

    if (position < 5) {
      setCurrentPosition(position + 1);
    }

    if (position === 5) {
      setCurrentPosition(5);
    }

    const newCode = [...code];
    newCode[position] = character;
    setCode(newCode);
  };

  const onBackspace = (position: number) => {
    if (position > 0) {
      setCurrentPosition(position - 1);
    }

    if (position === 0) {
      setCurrentPosition(0);
    }

    const newCode = [...code];
    newCode[position] = '';
    setCode(newCode);
  };

  const onPaste = (value: string) => {
    const newCode = [...code];
    newCode.forEach((_, index) => {
      newCode[index] = value[index] || '';
    });
    setCode(newCode);
  };

  useEffect(() => {
    const stringfiedCode = code.join('');
    if (typeof onChange === 'function') {
      onChange(stringfiedCode);
    }
  }, [code]);

  useEffect(() => {
    const inputRef = inputRefs[currentPosition];

    if (inputRef?.current?.focus) {
      inputRef.current.focus();
    }
  }, [currentPosition]);

  return (
    <S.Container {...props}>
      <HStack spacing={4}>
        <HStack spacing={2}>
          {[...Array(3)].map((_, index) => (
            <S.Input
              key={index}
              value={code[index]}
              onFocus={() => onInputFocus(index)}
              onChangeText={(value) => onCharacterInput(index, value)}
              ref={inputRefs[index]}
            />
          ))}
        </HStack>

        <HStack spacing={2}>
          {[...Array(3)].map((_, index) => (
            <S.Input
              key={index}
              value={code[index + 3]}
              onFocus={() => onInputFocus(index + 3)}
              onChangeText={(value) => onCharacterInput(index + 3, value)}
              ref={inputRefs[index + 3]}
            />
          ))}
        </HStack>
      </HStack>
    </S.Container>
  );
}
