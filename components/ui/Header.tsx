import { MenuModal } from "@/components/menu-modal";
import { MovedModal } from "@/components/moved-modal";
import { ProfileModal } from "@/components/profile-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Header: React.FC = () => {
  const route = useRoute();
  const title = route.name;
  const [activeModal, setActiveModal] = useState<null | "menu" | "profile">(null);
  const [showMoved, setShowMoved] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setActiveModal(null);
      setShowMoved(false);
    }
  }, [isFocused]);

  return (
    <>
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200 z-10">
        <TouchableOpacity
          onPress={() => setActiveModal("menu")}
          className="items-center justify-center"
        >
          <MaterialCommunityIcons name="menu" size={28} color="#23396C" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">
          {title}
        </Text>
        <View className="items-center justify-center">
          <TouchableOpacity onPress={() => setActiveModal("profile")}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="#23396C"
            />
          </TouchableOpacity>
        </View>
      </View>
      {activeModal === "menu" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
          pointerEvents="auto"
        >
          <MenuModal
            visible={true}
            onClose={() => setActiveModal(null)}
            onOpenProfile={() => setActiveModal("profile")}
            onOpenMoved={() => setShowMoved(true)}
          />
        </View>
      )}
      {activeModal === "profile" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
          pointerEvents="auto"
        >
          <ProfileModal
            visible={true}
            onClose={() => setActiveModal(null)}
            onOpenMoved={() => setShowMoved(true)}
          />
        </View>
      )}
      {showMoved && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 101,
          }}
          pointerEvents="auto"
        >
          <MovedModal visible={true} onClose={() => setShowMoved(false)} />
        </View>
      )}
    </>
  );
};
