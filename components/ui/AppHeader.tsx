import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function AppHeader({
  title,
  onProfilePress,
  onMenuPress,
  showBackButton = false,
  onBack,
}: {
  title?: string;
  onProfilePress?: () => void;
  onMenuPress?: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
}) {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-border bg-background z-10">
        {showBackButton ? (
          <TouchableOpacity
            onPress={onBack || (() => navigation.goBack())}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color="var(--primary)"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onMenuPress || (() => navigation.navigate("menu"))}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Open menu"
          >
            <MaterialCommunityIcons
              name="menu"
              size={28}
              color="var(--primary)"
            />
          </TouchableOpacity>
        )}
        <Text className="flex-1 text-center text-lg font-semibold text-primary">
          {title}
        </Text>
        <TouchableOpacity
          onPress={onProfilePress}
          className="items-center justify-center"
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Open profile"
        >
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={28}
            color="var(--primary)"
          />
        </TouchableOpacity>
      </View>
      <View
        className="h-1 w-full bg-gradient-to-r from-primary via-accent to-pink-400"
        style={{ height: 2 }}
      />
    </>
  );
}
