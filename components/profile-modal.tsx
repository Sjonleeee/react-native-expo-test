import { MovedModal } from "@/components/moved-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export function ProfileModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [showMoved, setShowMoved] = useState(false);

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
          Mes données
        </Text>
        <View className="items-center justify-center">
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={28}
            color="#23396C"
          />
        </View>
      </View>
      <ScrollView className="flex-1">
        {/* Profile Circle */}
        <View className="items-center mt-8 mb-2">
          <View className="w-32 h-32 rounded-full bg-[#1ED9B6] items-center justify-center">
            <Text className="text-4xl font-bold text-white">MJ</Text>
          </View>
          <Text className="text-xl font-semibold text-[#23396C] mt-4">
            Michael Jackson
          </Text>
        </View>
        {/* Personal Info */}
        <View className="px-6 mt-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-semibold text-[#23396C] text-lg">
              Mes informations personnelles
            </Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">Nom</Text>
            <Text className="text-base text-gray-800">Michael Jackson</Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">Adresse</Text>
            <Text className="text-base text-gray-800">
              6 Rue d’indépendance{"\n"}1000 BRUXELLES
            </Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">Date de naissance</Text>
            <Text className="text-base text-gray-800">19 septembre 1945</Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">
              Numéro de register nationale
            </Text>
            <Text className="text-base text-gray-800">63.56.12-411.22</Text>
          </View>
        </View>
        {/* Contact Info */}
        <View className="px-6 mt-6">
          <View className="flex-row items-center mb-2">
            <MaterialCommunityIcons
              name="send"
              size={24}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="font-semibold text-[#23396C] text-lg">
              Mes données de contacte
            </Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">Numéro téléphone</Text>
            <Text className="text-base text-gray-800">+32 463 96 63 63</Text>
          </View>
          <View className="border-t border-gray-300 py-3">
            <Text className="text-gray-500 text-sm mb-1">Adresse e-mail</Text>
            <Text className="text-base text-gray-800">
              michael.jackson@beatit.be
            </Text>
          </View>
        </View>
        {/* Button */}
        <View className="px-6 mt-8 mb-8">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-[#23396C] rounded-full py-4"
            onPress={() => setShowMoved(true)}
          >
            <MaterialCommunityIcons
              name="information-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white text-lg font-semibold">
              Vous avez déménagé
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <MovedModal visible={showMoved} onClose={() => setShowMoved(false)} />
    </View>
  );
}
