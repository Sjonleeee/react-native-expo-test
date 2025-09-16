import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export function PaymentModal({
  visible,
  onClose,
  onOpenProfile,
}: {
  visible: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
}) {
  // Dummy data
  const payments = [
    { section: "Juillet 2015", rows: [1, 2, 3] },
    { section: "Juin 2015", rows: [1, 2, 3] },
    { section: "Mai 2015", rows: [1, 2] },
    { section: "Avril 2015", rows: [1, 2] },
    { section: "Mars 2015", rows: [1, 2, 3, 4] },
  ];

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
              Paiements
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
          {/* Search bar */}
          <View
            style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 16 }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#23396C",
                borderRadius: 9999,
                paddingHorizontal: 16,
                paddingVertical: 8,
              }}
            >
              <MaterialCommunityIcons
                name="magnify"
                size={22}
                color="#23396C"
              />
              <TextInput
                style={{ flex: 1, marginLeft: 8, fontSize: 16 }}
                placeholder="Recherchez une date ou un montant..."
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>
          {/* Table header */}
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 16,
              paddingBottom: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#E0E6ED",
            }}
          >
            <Text style={{ width: 80, fontSize: 12, color: "#718096" }}>
              Date de paiement
            </Text>
            <Text style={{ width: 80, fontSize: 12, color: "#718096" }}>
              Mois
            </Text>
            <Text style={{ width: 80, fontSize: 12, color: "#718096" }}>
              Dû
            </Text>
            <Text style={{ width: 80, fontSize: 12, color: "#718096" }}>
              Retenue
            </Text>
            <Text style={{ width: 80, fontSize: 12, color: "#718096" }}>
              Reçu
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={true}
              style={{ flex: 1, paddingHorizontal: 16 }}
            >
              {payments.map((section, idx) => (
                <View key={idx} style={{ marginBottom: 8 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#23396C",
                      marginBottom: 8,
                      marginTop: 24,
                    }}
                  >
                    {section.section}
                  </Text>
                  {section.rows.map((row, i) => (
                    <View
                      key={i}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: 8,
                        borderBottomWidth: 1,
                        borderBottomColor: "#E0E6ED",
                      }}
                    >
                      <Text
                        style={{ width: 80, fontSize: 12, color: "#2D3748" }}
                      >
                        30/07
                      </Text>
                      <Text
                        style={{ width: 80, fontSize: 12, color: "#2D3748" }}
                      >
                        12/2013
                      </Text>
                      <Text
                        style={{
                          width: 80,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#23396C",
                        }}
                      >
                        312,64{" "}
                        <Text style={{ fontSize: 10, color: "#718096" }}>
                          EUR
                        </Text>
                      </Text>
                      <Text
                        style={{
                          width: 80,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#23396C",
                        }}
                      >
                        312,64{" "}
                        <Text style={{ fontSize: 10, color: "#718096" }}>
                          EUR
                        </Text>
                      </Text>
                      <Text
                        style={{
                          width: 80,
                          fontSize: 12,
                          fontWeight: "bold",
                          color: "#23396C",
                        }}
                      >
                        0,00{" "}
                        <Text style={{ fontSize: 10, color: "#718096" }}>
                          EUR
                        </Text>
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
