import React from "react";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from './Style';
import { Logo } from "../../components/Logo/Logo";
// Corrigido a importação para o novo nome do componente
import { Button } from "../../components/Button/Button";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <Button />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
