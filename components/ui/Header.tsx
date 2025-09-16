import { AttestationModal } from "@/components/attestation-modal";
import { FormResendModal } from "@/components/form-resend-modal";
import { MenuModal } from "@/components/menu-modal";
import { MovedModal } from "@/components/moved-modal";
import { PaymentModal } from "@/components/payment-modal";
import { PrimeNaissanceModal } from "@/components/prime-naissance-modal";
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

export const Header: React.FC<{
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
}> = ({
  showBackButton = false,
  onBack,
  title,
}) => {
  const route = useRoute();
  const [activeModal, setActiveModal] = useState<
    null | "menu" | "profile" | "payments" | "attestation" | "primeNaissance" | "formResend"
  >(null);
  const [showMoved, setShowMoved] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setActiveModal(null);
      setShowMoved(false);
    }
  }, [isFocused]);

  const openMenu = useCallback(() => setActiveModal("menu"), []);
  const openProfile = useCallback(() => setActiveModal("profile"), []);
  const openPayments = useCallback(() => setActiveModal("payments"), []);
  const openAttestation = useCallback(() => setActiveModal("attestation"), []);
  const openPrimeNaissance = useCallback(() => setActiveModal("primeNaissance"), []);
  const openFormResend = useCallback(() => setActiveModal("formResend"), []);
  const closeModal = useCallback(() => setActiveModal(null), []);
  const openMoved = useCallback(() => setShowMoved(true), []);
  const closeMoved = useCallback(() => setShowMoved(false), []);

  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#E5E7EB", zIndex: 10 }}>
        {showBackButton ? (
          <TouchableOpacity
            onPress={onBack}
            style={{ alignItems: "center", justifyContent: "center" }}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color="#23396C"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={openMenu}
            style={{ alignItems: "center", justifyContent: "center" }}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Open menu"
          >
            <MaterialCommunityIcons name="menu" size={28} color="#23396C" />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#23396C", flex: 1, textAlign: "center" }}>
          {title || route.name}
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
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
          onOpenAttestation={openAttestation}
          onOpenPrimeNaissance={openPrimeNaissance}
          onOpenFormResend={openFormResend}
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
        <PaymentModal
          visible={true}
          onClose={closeModal}
          onOpenProfile={openProfile}
        />
      </OverlayModal>
      <OverlayModal visible={activeModal === "attestation"}>
        <AttestationModal visible={true} onClose={closeModal} onOpenProfile={openProfile} />
      </OverlayModal>
      <OverlayModal visible={activeModal === "primeNaissance"}>
        <PrimeNaissanceModal visible={true} onClose={closeModal} onOpenProfile={openProfile} />
      </OverlayModal>
      <OverlayModal visible={activeModal === "formResend"}>
        <FormResendModal visible={true} onClose={closeModal} onOpenProfile={openProfile} />
      </OverlayModal>
      <OverlayModal visible={showMoved} zIndex={101}>
        <MovedModal visible={true} onClose={closeMoved} />
      </OverlayModal>
    </>
  );
};
