import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export function FormResendModal({
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
              Renvoie d’un formulaire
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
            <View
              style={{
                backgroundColor: "#5FD0A5",
                borderRadius: 20,
                padding: 18,
                marginBottom: 32,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, lineHeight: 24 }}>
                Voulez-vous renvoyer un formulaire?{"\n"}
                1. Scannez le formulaire, dûment complété et signé, et enregistrez-le comme fichier PDF, JPEG, GIF ou PNG.{"\n"}
                2. Complétez le code-barres{"\n"}
                3. Chargez le fichier via “Choisissez un fichier”.{"\n"}
                4. envoyez le document
              </Text>
            </View>
            <Text style={{ color: "#23396C", fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
              Code-barres
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
                name="barcode"
                size={22}
                color="#23396C"
              />
              <Text style={{ marginLeft: 8, color: "#23396C", fontSize: 16, opacity: 0.3 }}>
                _____________
              </Text>
            </View>
            <Text style={{ color: "#23396C", fontWeight: "bold", fontSize: 16, marginBottom: 8 }}>
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
                Choisissez un fichier
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
                marginBottom: 24,
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
            <TouchableOpacity
              style={{
                backgroundColor: "#23396C",
                borderRadius: 9999,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 16,
                marginBottom: 16,
              }}
            >
              <MaterialCommunityIcons
                name="send"
                size={22}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
                Envoyer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#C4C4C4",
                borderRadius: 9999,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 16,
                marginBottom: 0,
              }}
            >
              <MaterialCommunityIcons
                name="delete-outline"
                size={22}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}>
                Supprimer
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
