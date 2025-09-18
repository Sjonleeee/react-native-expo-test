import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { AppHeader } from "@/components/ui/AppHeader";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { useState } from "react";
import AuthScreen from "./auth";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <AuthScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="menu"
          options={{
            header: () => <AppHeader title="Menu" showBackButton />,
          }}
        />
        <Stack.Screen name="mes-donnees" options={{ headerShown: false }} />
        <Stack.Screen
          name="menu/gestionnaire-de-dossier"
          options={{
            header: () => (
              <AppHeader title="Gestionnaire de dossier" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/derniers-paiements"
          options={{
            header: () => <AppHeader title="Derniers paiements" showBackButton />,
          }}
        />
        <Stack.Screen
          name="menu/attestation-de-paiement"
          options={{
            header: () => (
              <AppHeader title="Attestation de paiement" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/prime-de-naissance-anticipee"
          options={{
            header: () => (
              <AppHeader title="Prime de naissance anticipée" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/renvoi-formulaire"
          options={{
            header: () => <AppHeader title="Renvoi d’un formulaire" showBackButton />,
          }}
        />
        <Stack.Screen
          name="menu/demande-changement-carte-bancaire"
          options={{
            header: () => (
              <AppHeader title="Demande de changement de carte bancaire" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/langue"
          options={{
            header: () => <AppHeader title="Langue" showBackButton />,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
