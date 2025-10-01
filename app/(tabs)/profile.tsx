import { ActionButton } from "@/components/custom/action-button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ProfilePage() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      {/* Background blobs */}
      <Image
        source={require("@/assets/images/homepage/green.svg")}
        style={styles.blobGreen}
        contentFit="contain"
        pointerEvents="none"
      />
      <Image
        source={require("@/assets/images/homepage/purple.svg")}
        style={styles.blobPurple}
        contentFit="contain"
        pointerEvents="none"
      />
      <Image
        source={require("@/assets/images/homepage/yellow.svg")}
        style={styles.blobYellow}
        contentFit="contain"
        pointerEvents="none"
      />
      {/* Main content */}
      <View className="w-full px-6 z-10 gap-4 items-center justify-center">
        <Image
          source={require("@/assets/images/homepage/myfamiris.png")}
          style={{
            width: 250,
            height: 60,
            resizeMode: "contain",
          }}
        />
        <Text className="text-base text-foreground text-center">
          Les allocations familiales pour tous les bruxellois
        </Text>
        <View className="w-2/5 self-center bg-border" />
        <Text className="text-lg font-bold text-primary text-center">
          Connectez-vous via votre numéro de registre national
        </Text>
        <Text className="text-sm  text-primary self-start ml-1">
          Votre numéro de registre national
        </Text>
        <TextInput
          placeholder="Numero de register national (NISS)"
          className="w-full bg-white rounded-full border-2 border-primary px-6 py-3 text-base text-primary text-center"
          placeholderTextColor="#8e8e8e"
        />
        <Text className="text-sm text-primary self-start ml-1">
          Votre code d&apos;accès personnel
        </Text>
        <View className="flex-row items-center justify-center gap-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <TextInput
              key={index}
              placeholder=""
              className="w-12 h-12 bg-white rounded-xl border-2 border-primary text-xl text-primary text-center mx-0.5"
              placeholderTextColor="#8e8e8e"
              maxLength={1}
            />
          ))}
          <MaterialCommunityIcons
            name="qrcode"
            size={32}
            color="var(--color-primary)"
            style={{ marginLeft: 4, alignSelf: "center" }}
          />
        </View>
        <ActionButton className="w-full flex-row items-center justify-center rounded-full bg-primary ">
          <MaterialCommunityIcons
            name="link-variant"
            size={28}
            color="#fff"
            style={{ marginRight: 12 }}
          />
          <Text className="text-white text-lg font-bold">Se connecter</Text>
        </ActionButton>
        <View className="w-2/5 self-center bg-border" />
        <ActionButton className="w-full flex-row items-center justify-center rounded-2xl bg-orange-500">
          <Image source={require("@/assets/images/icon.png")} />
          <Text className="text-white font-bold text-lg">
            IDENTIFICATION via itsme
          </Text>
        </ActionButton>
        <View className="w-2/5 self-center bg-border" />
        <Text className="text-primary text-lg font-bold text-center">
          Code d&apos;accès personnel oublié ou jamais reçu ?
        </Text>
        <View className="w-2/5 self-center bg-border" />
        <View className="flex-row items-center justify-center gap-5">
          <Text className="text-muted text-base">NL</Text>
          <Text className="text-primary text-base font-bold underline">FR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blobGreen: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 60,
    height: 220,
    zIndex: 0,
  },
  blobPurple: {
    position: "absolute",
    left: -60,
    top: 180,
    width: 100,
    height: 280,
    zIndex: 0,
  },
  blobYellow: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 90,
    height: 75,
    zIndex: 0,
  },
});
