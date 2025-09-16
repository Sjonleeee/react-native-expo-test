import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, ScrollView, Text, TextInput, View } from "react-native";
import { Header } from "./ui/Header";

export function PaymentModal({ visible, onClose, onOpenProfile }: { visible: boolean; onClose: () => void; onOpenProfile: () => void }) {
  // Dummy data
  const payments = [
    { section: "Juillet 2015", rows: [1, 2, 3] },
    { section: "Juin 2015", rows: [1, 2, 3] },
    { section: "Mai 2015", rows: [1, 2] },
    { section: "Avril 2015", rows: [1, 2] },
    { section: "Mars 2015", rows: [1, 2, 3, 4] },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.15)", justifyContent: "flex-end" }}>
        <View className="flex-1 bg-white rounded-t-3xl">
          {/* Header */}
          <Header
            showBackButton
            onBack={onClose}
            title="Paiements"
            onOpenProfile={onOpenProfile}
          />
          {/* Search bar */}
          <View className="px-4 pt-4 pb-4">
            <View className="flex-row items-center border border-[#23396C] rounded-full px-4 py-2">
              <MaterialCommunityIcons name="magnify" size={22} color="#23396C" />
              <TextInput
                className="flex-1 ml-2 text-base"
                placeholder="Recherchez une date ou un montant..."
                placeholderTextColor="#A0AEC0"
              />
            </View>
          </View>
          {/* Table header */}
          <View className="flex-row px-4 pb-4 border-b border-[#E0E6ED]">
            <Text className="w-20 text-xs text-gray-500">Date de paiement</Text>
            <Text className="w-20 text-xs text-gray-500">Mois</Text>
            <Text className="w-20 text-xs text-gray-500">Dû</Text>
            <Text className="w-20 text-xs text-gray-500">Retenue</Text>
            <Text className="w-20 text-xs text-gray-500">Reçu</Text>
          </View>
          <View className="flex-1 ">
            <ScrollView showsVerticalScrollIndicator={true} className="flex-1 px-4">
              {payments.map((section, idx) => (
                <View key={idx} className="mb-2">
                  <Text className="text-base font-bold text-[#23396C] mb-2 mt-6">
                    {section.section}
                  </Text>
                  {section.rows.map((row, i) => (
                    <View key={i} className="flex-row items-center py-2 border-b border-[#E0E6ED]">
                      <Text className="w-20 text-xs text-gray-800">30/07</Text>
                      <Text className="w-20 text-xs text-gray-800">12/2013</Text>
                      <Text className="w-20 text-xs font-bold text-[#23396C]">312,64 <Text className="text-[10px] text-gray-500">EUR</Text></Text>
                      <Text className="w-20 text-xs font-bold text-[#23396C]">312,64 <Text className="text-[10px] text-gray-500">EUR</Text></Text>
                      <Text className="w-20 text-xs font-bold text-[#23396C]">0,00 <Text className="text-[10px] text-gray-500">EUR</Text></Text>
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
