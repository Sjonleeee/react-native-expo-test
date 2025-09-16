import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  onMenuPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuPress }) => {
  const route = useRoute();
  const title = route.name;
  return (
    <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
      <TouchableOpacity
        onPress={onMenuPress}
        className="items-center justify-center"
      >
        <MaterialCommunityIcons name="menu" size={28} color="#23396C" />
      </TouchableOpacity>
      <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">
        {title}
      </Text>
      <View className="items-center justify-center">
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={28}
          color="#23396C"
        />
      </View>
    </View>
  );
};
