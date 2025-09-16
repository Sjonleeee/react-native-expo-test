import { MenuModal } from "@/components/menu-modal";
import { MovedModal } from "@/components/moved-modal";
import { PaymentModal } from "@/components/payment-modal";
import { ProfileModal } from "@/components/profile-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const OverlayModal = ({
  visible,
  zIndex = 100,
  children,
}: {
  visible: boolean;
  zIndex?: number;
  children: React.ReactNode;
}) => {
  if (!visible) return null;
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex,
      }}
      pointerEvents="auto"
    >
      {children}
    </View>
  );
};

interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  showBackButton = false,
  onBack,
  title,
  onOpenProfile,
}) => {
  const route = useRoute();
  const [activeModal, setActiveModal] = useState<null | "menu" | "profile" | "payments">(null);
  const [showMoved, setShowMoved] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setActiveModal(null);
      setShowMoved(false);
    }
  }, [isFocused]);

  const openMenu = useCallback(() => setActiveModal("menu"), []);
  const openProfile = useCallback(() => {
    if (onOpenProfile) onOpenProfile();
    else setActiveModal("profile");
  }, [onOpenProfile]);
  const openPayments = useCallback(() => setActiveModal("payments"), []);
  const closeModal = useCallback(() => setActiveModal(null), []);
  const openMoved = useCallback(() => setShowMoved(true), []);
  const closeMoved = useCallback(() => setShowMoved(false), []);

  return (
    <>
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200 z-10">
        {showBackButton ? (
          <TouchableOpacity
            onPress={onBack}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons name="arrow-left" size={28} color="#23396C" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={openMenu}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Open menu"
          >
            <MaterialCommunityIcons name="menu" size={28} color="#23396C" />
          </TouchableOpacity>
        )}
        <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">
          {title || route.name}
        </Text>
        <View className="items-center justify-center">
          <TouchableOpacity
            onPress={openProfile}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Open profile"
          >
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="#23396C"
            />
          </TouchableOpacity>
        </View>
      </View>
      <OverlayModal visible={activeModal === "menu"}>
        <MenuModal
          visible={true}
          onClose={closeModal}
          onOpenProfile={openProfile}
          onOpenPayments={openPayments}
        />
      </OverlayModal>
      <OverlayModal visible={activeModal === "profile"}>
        <ProfileModal
          visible={true}
          onClose={closeModal}
          onOpenMoved={openMoved}
        />
      </OverlayModal>
      <OverlayModal visible={activeModal === "payments"}>
        <PaymentModal visible={true} onClose={closeModal} onOpenProfile={openProfile} />
      </OverlayModal>
      <OverlayModal visible={showMoved} zIndex={101}>
        <MovedModal visible={true} onClose={closeMoved} />
      </OverlayModal>
    </>
  );
};
