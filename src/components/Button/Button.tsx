// src/components/Button/Button.tsx
import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import generatePass from '../../services/passwordService';
// Corrigida a importação para o nome correto do componente
import { AppTextInput } from '../TextInpunt/AppTextInput';

import * as Clipboard from 'expo-clipboard';

import { styles } from './ButtonStyles';

export function Button() {
  const [pass, setPass] = useState('');

  function handleGenerateButton() {
    const generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      {/* Usando o componente AppTextInput com a propriedade 'pass' */}
      <AppTextInput pass={pass} />
      
      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>🔷 GENERATE 🔷</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>💙 COPY 💙</Text>
      </Pressable>
    </>
  );
}
