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
    { section: "Juillet 2015", rows: [
      { date: "30/07", month: "12/2013", due: "312,64", retenue: "312,64", recu: "0,00" },
      { date: "29/07", month: "11/2013", due: "100,00", retenue: "0,00", recu: "100,00" },
      { date: "28/07", month: "10/2013", due: "50,00", retenue: "10,00", recu: "40,00" },
    ] },
    { section: "Juin 2015", rows: [
      { date: "15/06", month: "06/2015", due: "200,00", retenue: "0,00", recu: "200,00" },
      { date: "10/06", month: "05/2015", due: "150,00", retenue: "20,00", recu: "130,00" },
      { date: "05/06", month: "04/2015", due: "80,00", retenue: "0,00", recu: "80,00" },
    ] },
    { section: "Mai 2015", rows: [
      { date: "01/05", month: "03/2015", due: "60,00", retenue: "0,00", recu: "60,00" },
      { date: "25/05", month: "02/2015", due: "90,00", retenue: "10,00", recu: "80,00" },
    ] },
    { section: "Avril 2015", rows: [
      { date: "10/04", month: "01/2015", due: "120,00", retenue: "0,00", recu: "120,00" },
      { date: "05/04", month: "12/2014", due: "70,00", retenue: "5,00", recu: "65,00" },
    ] },
    { section: "Mars 2015", rows: [
      { date: "20/03", month: "11/2014", due: "110,00", retenue: "0,00", recu: "110,00" },
      { date: "15/03", month: "10/2014", due: "95,00", retenue: "15,00", recu: "80,00" },
      { date: "10/03", month: "09/2014", due: "85,00", retenue: "0,00", recu: "85,00" },
      { date: "05/03", month: "08/2014", due: "60,00", retenue: "0,00", recu: "60,00" },
    ] },
     { section: "April 2015", rows: [
      { date: "20/04", month: "11/2014", due: "110,00", retenue: "0,00", recu: "110,00" },
      { date: "15/04", month: "10/2014", due: "95,00", retenue: "15,00", recu: "80,00" },
      { date: "10/04", month: "09/2014", due: "85,00", retenue: "0,00", recu: "85,00" },
      { date: "05/04", month: "08/2014", due: "60,00", retenue: "0,00", recu: "60,00" },
    ] },
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
            <ScrollView showsVerticalScrollIndicator={true} style={{ flex: 1, paddingHorizontal: 16 }}>
              {payments.map((section, idx) => (
                <View key={idx} style={{ marginBottom: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: "#23396C", marginBottom: 8, marginTop: 24 }}>
                    {section.section}
                  </Text>
                  {section.rows.map((row, i) => (
                    <View key={i} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#E0E6ED" }}>
                      <Text style={{ width: 80, fontSize: 12, color: "#2D3748" }}>{row.date}</Text>
                      <Text style={{ width: 80, fontSize: 12, color: "#2D3748" }}>{row.month}</Text>
                      <Text style={{ width: 80, fontSize: 12, fontWeight: "bold", color: "#23396C" }}>{row.due} <Text style={{ fontSize: 10, color: "#718096" }}>EUR</Text></Text>
                      <Text style={{ width: 80, fontSize: 12, fontWeight: "bold", color: "#23396C" }}>{row.retenue} <Text style={{ fontSize: 10, color: "#718096" }}>EUR</Text></Text>
                      <Text style={{ width: 80, fontSize: 12, fontWeight: "bold", color: "#23396C" }}>{row.recu} <Text style={{ fontSize: 10, color: "#718096" }}>EUR</Text></Text>
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
