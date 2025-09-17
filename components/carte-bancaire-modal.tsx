import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export function CarteBancaireModal({
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
              Mon numéro de carte bancaire
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
                backgroundColor: "#2DE1B2",
                borderRadius: 20,
                padding: 18,
                marginBottom: 32,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, lineHeight: 24 }}>
                Pour des raisons de sécurité, cette fonctionnalité est uniquement accessible via une connexion CSAM (carte d’identité électronique eID, token, itsme, code de sécurité via une application mobile).
              </Text>
            </View>
            <Text style={{ color: "#23396C", fontWeight: "bold", fontSize: 18, marginBottom: 16 }}>
              Dossier 123626
            </Text>
            <View style={{ borderTopWidth: 1, borderTopColor: '#E5E7EB' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
              <Text style={{ flex: 1, color: '#23396C', fontSize: 16 }}>Types de paiement</Text>
              <Text style={{ flex: 1, color: '#23396C', fontSize: 16 }}>Virement bancaire</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons name="pencil-outline" size={22} color="#23396C" />
              </TouchableOpacity>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#E5E7EB' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 16 }}>
              <Text style={{ flex: 1, color: '#23396C', fontSize: 16 }}>IBAN</Text>
              <Text style={{ flex: 1, color: '#23396C', fontSize: 16 }}>BE36 6322 6236 3626</Text>
              <TouchableOpacity>
                <MaterialCommunityIcons name="pencil-outline" size={22} color="#23396C" />
              </TouchableOpacity>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#E5E7EB' }} />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
