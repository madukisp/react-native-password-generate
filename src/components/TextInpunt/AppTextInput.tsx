// src/components/TextInput/AppTextInput.tsx
import React from 'react';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';

import { styles } from './TextInputStyles';

// Estendendo as propriedades padrão do TextInput do React Native
interface AppTextInputProps extends RNTextInputProps {
  pass: string;
}

export function AppTextInput(props: AppTextInputProps) {
  return (
    <RNTextInput
      style={[styles.inputer, props.style]} // Permitindo passar style como uma prop
      placeholder='pass'
      value={props.pass}
      {...props} // Passando quaisquer outras props padrão do TextInput
    />
  );
}
