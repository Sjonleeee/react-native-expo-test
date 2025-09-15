import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
       <Tabs.Screen
        name="index"
        options={{
          title: "Aperçu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

  //  <View className="flex-row items-center justify-around h-16 border-t border-gray-200 bg-white">
  //         <View className="items-center">
  //           <MaterialCommunityIcons
  //             name="view-grid-outline"
  //             size={24}
  //             color="#23396C"
  //           />
  //           <Text className="text-xs text-[#23396C]">Aperçu</Text>
  //         </View>
  //         <View className="items-center">
  //           <MaterialCommunityIcons
  //             name="message-outline"
  //             size={24}
  //             color="#23396C"
  //           />
  //           <Text className="text-xs text-gray-500">Contact</Text>
  //         </View>
  //         <View className="items-center">
  //           <MaterialCommunityIcons
  //             name="information-outline"
  //             size={24}
  //             color="#23396C"
  //           />
  //           <Text className="text-xs text-gray-500">À propos</Text>
  //         </View>
  //       </View>