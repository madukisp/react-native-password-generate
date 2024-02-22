import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from './Style';
import { BatiLogo } from "../../components/BatiLogo/BatiLogo";
import { BatTextInput } from "../../components/TextInpunt/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.logoContainer}>
        <BatiLogo />
      </View>

    <View style={styles.inputContainer}>
      <BatButton />
    </View>

      <StatusBar style="light" />
    </View>
  );
}
