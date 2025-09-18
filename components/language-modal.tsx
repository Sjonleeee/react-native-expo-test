import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const LANGUAGES = [
  { label: "Français", value: "Français" },
  { label: "English", value: "English" },
  { label: "Nederlands", value: "Nederlands" },
];

export const LanguageModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onConfirm?: (lang: string) => void;
  onOpenProfile?: () => void;
}> = ({ visible, onClose, onConfirm, onOpenProfile }) => {
  const [selected, setSelected] = useState(LANGUAGES[0].value);

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View className="flex-1 bg-background">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-border z-10">
          <TouchableOpacity
            onPress={onClose}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color="var(--primary)"
            />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-primary flex-1 text-center">
            Langue
          </Text>
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={onOpenProfile}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Open profile"
            >
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={28}
                color="var(--primary)"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Content */}
        <View className="flex-1 justify-start items-stretch px-6 pt-12">
          <h2>Choisissez votre langue préférée</h2>
          <View className="rounded-2xl mb-8">
            <DropdownMenu
              items={LANGUAGES}
              value={selected}
              onValueChange={setSelected}
              placeholder="Choisissez"
            />
          </View>
          <View className="flex-1" />
          <TouchableOpacity
            className="bg-primary rounded-full py-4 flex-row items-center justify-center mb-8 w-full"
            onPress={() => onConfirm?.(selected)}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons
              name="content-save-outline"
              size={24}
              color="var(--background)"
              style={{ marginRight: 8 }}
            />
            <Text className="text-background text-lg font-semibold">
              Confirmer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
