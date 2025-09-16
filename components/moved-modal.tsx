import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function MovedModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  if (!visible) return null;
  return (
    <View className="absolute inset-0 bg-black bg-opacity-40 z-50 items-end justify-end">
      <View className="bg-white rounded-t-3xl w-full p-8 items-center justify-center">
        <Text className="text-2xl font-bold text-[#23396C] mb-6 text-center">Vous avez déménagé?</Text>
        <Text className="text-lg text-gray-800 text-center mb-2">Nous en serons informés</Text>
        <Text className="text-lg text-gray-800 text-center mb-2">automatiquement via le Registre National.</Text>
        <Text className="text-lg text-gray-800 text-center mb-6">Si nécessaire, vous pouvez contacter votre gestionnaire de dossier.</Text>
        <TouchableOpacity
          className="bg-[#23396C] rounded-full w-full py-4 items-center justify-center mt-2"
          onPress={onClose}
        >
          <Text className="text-white text-lg font-semibold">Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
