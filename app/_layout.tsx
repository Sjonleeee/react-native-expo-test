import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
          name="menu/latest-payments"
          options={{
            header: () => <AppHeader title="Derniers paiements" showBackButton />,
          }}
        />
        <Stack.Screen
          name="menu/payment-certificate"
          options={{
            header: () => (
              <AppHeader title="Attestation de paiement" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/early-birth-bonus"
          options={{
            header: () => (
              <AppHeader title="Prime de naissance anticipée" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/return-form"
          options={{
            header: () => <AppHeader title="Renvoi d’un formulaire" showBackButton />,
          }}
        />
        <Stack.Screen
          name="menu/request-change-bank-card"
          options={{
            header: () => (
              <AppHeader title="Demande de changement de carte bancaire" showBackButton />
            ),
          }}
        />
        <Stack.Screen
          name="menu/language"
          options={{
            header: () => <AppHeader title="Langue" showBackButton />,
          }}
        />
        <Stack.Screen
          name="menu/a-propos"
          options={{
            header: () => <AppHeader title="À propos" showBackButton />,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
