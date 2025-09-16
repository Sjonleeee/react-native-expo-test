import { Input } from "@/components/ui/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export function AttestationModal({
  visible,
  onClose,
  onOpenProfile,
}: {
  visible: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
}) {
  const [withPaymentInfo, setWithPaymentInfo] = React.useState(false);

  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.15)",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 16,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#E5E7EB",
            }}
          >
            <TouchableOpacity
              onPress={onClose}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <MaterialCommunityIcons
                name="arrow-left"
                size={28}
                color="#23396C"
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#23396C",
                flex: 1,
                textAlign: "center",
              }}
            >
              Attestation
            </Text>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity onPress={onOpenProfile}>
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  size={28}
                  color="#23396C"
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ padding: 24 }}>
            <Text className="text-[#23396C] font-bold text-lg mb-6">
              Attestation de paiement
            </Text>
            <Text className="text-[#23396C] font-bold text-base mb-2">
              Date de début
            </Text>
            <View className="flex-row items-center py-3 mb-4">
              <MaterialCommunityIcons
                name="calendar"
                size={22}
                color="#23396C"
              />
              <Input
                className="flex-1 ml-2 text-base"
                placeholder="Choisissez une date"
                placeholderTextColor="#A0AEC0"
                editable={false}
              />
            </View>
            <Text className="text-[#23396C] font-bold text-base mb-2">
              Date de fin
            </Text>
            <View className="flex-row items-center py-3 mb-4">
              <MaterialCommunityIcons
                name="calendar"
                size={22}
                color="#23396C"
              />
              <Input
                className="flex-1 ml-2 text-base"
                placeholder="Choisissez une date"
                placeholderTextColor="#A0AEC0"
                editable={false}
              />
            </View>
            <View className="flex-row items-center justify-between mb-6">
              <Text className="text-[#23396C] font-bold text-base">
                Avec les informations de paiement?
              </Text>
              <Switch
                value={withPaymentInfo}
                onValueChange={setWithPaymentInfo}
                trackColor={{ false: "#E0E6ED", true: "#23396C" }}
                thumbColor={withPaymentInfo ? "#fff" : "#fff"}
              />
            </View>
            <TouchableOpacity
              className="bg-[#23396C] rounded-full flex-row items-center justify-center py-4"
              style={{ marginTop: 16 }}
            >
              <MaterialCommunityIcons
                name="download"
                size={22}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text className="text-white font-semibold text-base">
                Télécharger l’attestation
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
