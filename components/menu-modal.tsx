import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export function MenuModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;
  return (
    <View className="absolute inset-0 bg-white z-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={onClose} className="items-center justify-center">
          <MaterialCommunityIcons name="arrow-left" size={28} color="#23396C" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">Menu</Text>
        <View className="items-center justify-center">
          <MaterialCommunityIcons name="account-circle-outline" size={28} color="#23396C" />
        </View>
      </View>
      <ScrollView className="flex-1 px-4 pt-2">
        {/* Mon dossier */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="account-outline" size={20} color="#23396C" style={{ marginRight: 8 }} />
            <Text className="font-bold text-[#23396C] text-base">Mon dossier</Text>
            <View className="flex-1" />
            <Text className="text-[#23396C] font-medium text-sm">Déconnexion</Text>
          </View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Mes données</Text></View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Gestionnaire de dossier</Text></View>
        </View>
        {/* Mes paiements */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="sync" size={20} color="#23396C" style={{ marginRight: 8 }} />
            <Text className="font-bold text-[#23396C] text-base">Mes paiements</Text>
          </View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Derniers paiements</Text></View>
        </View>
        {/* Mes demandes */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="file-document-outline" size={20} color="#23396C" style={{ marginRight: 8 }} />
            <Text className="font-bold text-[#23396C] text-base">Mes demandes</Text>
          </View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Attestation de paiement</Text></View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Prime de naissance anticipée</Text></View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Renvoi d&apos;un formulaire</Text></View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Demande de changement de carte bancaire</Text></View>
        </View>
        {/* Réglages */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons name="cog-outline" size={20} color="#23396C" style={{ marginRight: 8 }} />
            <Text className="font-bold text-[#23396C] text-base">Réglages</Text>
          </View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">Langue</Text></View>
          <View className="border-t border-[#E0E6ED] py-3"><Text className="text-[#23396C] text-[15px]">A propos de My Famiris</Text></View>
        </View>
      </ScrollView>
    </View>
  );
}
