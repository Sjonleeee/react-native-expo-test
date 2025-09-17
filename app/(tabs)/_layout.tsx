import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1ED9B6", 
        tabBarInactiveTintColor: "#444",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E5E7EB",
          elevation: 0,
          shadowOpacity: 0,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 13, 
          fontWeight: "600",
          marginBottom: 2,
        },
        tabBarIconStyle: {
          marginTop: 2, 
        },
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
              size={20} 
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="message-outline"
              size={18} // smaller icon
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="a-propos"
        options={{
          title: "A propos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cloud-outline"
              size={20} 
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
