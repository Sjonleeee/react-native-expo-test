import { Avatar } from "@/components/ui/avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
export const GestionnaireModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onOpenProfile?: () => void;
}> = ({ visible, onClose, onOpenProfile }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Header - same as other modals */}
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
            zIndex: 10,
          }}
        >
          <TouchableOpacity
            onPress={onClose}
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
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#23396C",
              flex: 1,
              textAlign: "center",
            }}
          >
            Gestionnaire de dossier
          </Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={onOpenProfile}
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
        {/* Content */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            paddingHorizontal: 0,
            paddingTop: 32,
          }}
        >
          <Avatar
            alt="Avatar VS"
            className="mb-6 bg-[#1ED9B6] self-center w-24 h-24"
          >
            <Text className="text-4xl font-bold text-white">VS</Text>
          </Avatar>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: "#193B7D",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Valérie Soupart
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
              marginLeft: 28,
              marginBottom: 16,
            }}
          >
            <MaterialCommunityIcons
              name="send"
              size={28}
              color="#193B7D"
              style={{ marginRight: 8 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#193B7D" }}>
              Données de contact
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderTopWidth: 1,
              borderTopColor: "#C4C4C4",
              marginBottom: 16,
            }}
          />
          <View style={{ width: "90%", alignSelf: "center", marginBottom: 16 }}>
            <Text style={{ fontSize: 16, color: "#666", marginBottom: 4 }}>
              Numéro téléphone
            </Text>
            <Text style={{ fontSize: 18, color: "#222", fontWeight: "500" }}>
              +32 463 96 63 63
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderTopWidth: 1,
              borderTopColor: "#C4C4C4",
              marginBottom: 16,
            }}
          />
          <View style={{ width: "90%", alignSelf: "center", marginBottom: 16 }}>
            <Text style={{ fontSize: 16, color: "#666", marginBottom: 4 }}>
              Adresse e-mail
            </Text>
            <Text style={{ fontSize: 18, color: "#222", fontWeight: "500" }}>
              valerie.soupart@famifed.be
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignSelf: "center",
              borderTopWidth: 1,
              borderTopColor: "#C4C4C4",
              marginBottom: 16,
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
