import { MenuModal } from "@/components/menu-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const route = useRoute();
  const title = route.name;
  const [showMenu, setShowMenu] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) setShowMenu(false);
  }, [isFocused]);

  return (
    <>
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200 z-10">
        <TouchableOpacity
          onPress={() => setShowMenu(true)}
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
      {showMenu && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
          pointerEvents="box-none"
        >
          <MenuModal visible={showMenu} onClose={() => setShowMenu(false)} />
        </View>
      )}
    </>
  );
};
