import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '@/theme';

// This needs to be as StyleSheet because of the library support
export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.gray[750],
    borderRadius: Number(theme.radii.lg.replace('px', '')),
    zIndex: 9999,
  },
  placeholder: {
    color: '#AFAFAF',
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    marginLeft: 4,
  },
  label: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    marginLeft: 4,
  },
  item: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.gray[750],
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.regular,
  },
  itemSeparator: {
    backgroundColor: theme.colors.gray[800],
  },
});

export const PickerContainer = styled.View`
  z-index: 5;
`;
