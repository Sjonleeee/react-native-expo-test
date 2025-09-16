import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export function PrimeNaissanceModal({
  visible,
  onClose,
  onOpenProfile,
}: {
  visible: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
}) {
  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="slide" transparent>
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
              Prime de naissance anticipée
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
            <Text style={{ color: "#23396C", fontSize: 16, marginBottom: 24 }}>
              Pour une prime de naissance anticipée, il suffit de nous envoyer
              l’attestation de votre médecin ou sage-femme. Veuillez prendre une
              photo de ce document
            </Text>
            <Text
              style={{
                color: "#23396C",
                fontWeight: "bold",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Document
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#23396C",
                borderRadius: 9999,
                paddingHorizontal: 16,
                paddingVertical: 12,
                marginBottom: 24,
              }}
            >
              <MaterialCommunityIcons
                name="cloud-upload-outline"
                size={22}
                color="#23396C"
              />
              <Text style={{ marginLeft: 8, color: "#23396C", fontSize: 16, opacity: 0.3 }}>
                Attestation médicale (photo ou PDF)
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#23396C",
                borderRadius: 9999,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 16,
                marginTop: 8,
              }}
            >
              <MaterialCommunityIcons
                name="camera-outline"
                size={22}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
                Prendre une photo
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
