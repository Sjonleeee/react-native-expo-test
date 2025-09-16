import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export function MenuItem({
  icon,
  label,
  onPress,
}: {
  icon?: string;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View className="border-t border-[#E0E6ED] py-3 flex-row items-center">
        {icon && (
          <MaterialCommunityIcons
            name={icon as any}
            size={20}
            color="#23396C"
            style={{ marginRight: 8 }}
          />
        )}
        <Text className="text-[#23396C] text-[15px]">{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function MenuModal({
  visible,
  onClose,
  onOpenProfile,
  onOpenPayments,
}: {
  visible: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
  onOpenPayments: () => void;
}) {
  if (!visible) return null;
  return (
    <View className="absolute inset-0 bg-white z-50">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity
          onPress={onClose}
          className="items-center justify-center"
        >
          <MaterialCommunityIcons name="arrow-left" size={28} color="#23396C" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">
          Menu
        </Text>
        <View className="items-center justify-center">
          <TouchableOpacity onPress={onOpenProfile}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="#23396C"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="flex-1 px-4 pt-2">
        {/* Mon dossier */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="account-outline"
              size={20}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-bold text-[#23396C] text-base">
              Mon dossier
            </Text>
            <View className="flex-1" />
            <Text className="text-[#23396C] font-medium text-sm">
              Déconnexion
            </Text>
          </View>
          <MenuItem
            icon="account-outline"
            label="Mes données"
            onPress={onOpenProfile}
          />
          <MenuItem icon="account-outline" label="Gestionnaire de dossier" />
        </View>
        {/* Mes paiements */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="sync"
              size={20}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-bold text-[#23396C] text-base">
              Mes paiements
            </Text>
          </View>
          <MenuItem
            icon="sync"
            label="Derniers paiements"
            onPress={onOpenPayments}
          />
        </View>
        {/* Mes demandes */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="file-document-outline"
              size={20}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-bold text-[#23396C] text-base">
              Mes demandes
            </Text>
          </View>
          <MenuItem
            icon="file-document-outline"
            label="Attestation de paiement"
          />
          <MenuItem
            icon="file-document-outline"
            label="Prime de naissance anticipée"
          />
          <MenuItem
            icon="file-document-outline"
            label="Renvoi d'un formulaire"
          />
          <MenuItem
            icon="bank-transfer"
            label="Demande de changement de carte bancaire"
          />
        </View>
        {/* Réglages */}
        <View className="mb-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="cog-outline"
              size={20}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-bold text-[#23396C] text-base">Réglages</Text>
          </View>
          <MenuItem icon="cog-outline" label="Langue" />
          <MenuItem icon="cog-outline" label="A propos de My Famiris" />
        </View>
      </ScrollView>
    </View>
  );
}
