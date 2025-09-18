import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { Platform, StatusBar, Text, TouchableOpacity, View } from "react-native";

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
  // Add safe area for iOS
  const topInset = Platform.OS === "ios" ? 44 : StatusBar.currentHeight || 0;
  const headerHeight = 56; // Standard header height
  return (
    <>
      <View
        style={{
          paddingTop: topInset,
          height: topInset + headerHeight,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottomWidth: 1,
          borderColor: "#E5E7EB",
          backgroundColor: "#fff",
          zIndex: 10,
        }}
      >
        {/* Left button (menu or back) */}
        <View
          style={{
            position: "absolute",
            left: 16,
            top: topInset,
            height: headerHeight,
            justifyContent: "center",
            zIndex: 2,
          }}
          pointerEvents="box-none"
        >
          {showBackButton ? (
            <TouchableOpacity
              onPress={onBack || (() => (navigation as any).goBack())}
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
              onPress={onMenuPress || (() => (navigation as any).navigate("menu"))}
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
        </View>
        {/* Title */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            height: headerHeight,
            zIndex: 1,
          }}
          pointerEvents="none"
        >
          <Text
            className="text-lg font-semibold text-primary"
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ lineHeight: 28 }}
          >
            {title}
          </Text>
        </View>
        {/* Right button (profile) */}
        <View
          style={{
            position: "absolute",
            right: 16,
            top: topInset,
            height: headerHeight,
            justifyContent: "center",
            zIndex: 2,
          }}
          pointerEvents="box-none"
        >
          <TouchableOpacity
            onPress={onProfilePress || (() => (navigation as any).navigate("mes-donnees"))}
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
      </View>
      {/* Gradient border under the header */}
      <LinearGradient
        colors={["#0ea5e9", "#06b6d4", "#ec4899"]} // from-primary, via-accent, to-pink-400
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 2, width: "100%" }}
      />
    </>
  );
}
