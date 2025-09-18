import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

const LANGUAGES = [
  { label: "Français", value: "Français" },
  { label: "English", value: "English" },
  { label: "Nederlands", value: "Nederlands" },
];

export function CustomLanguageModal({
  visible,
  onClose,
  onConfirm,
  onOpenProfile,
  className,
  ...props
}: {
  visible: boolean;
  onClose: () => void;
  onConfirm?: (lang: string) => void;
  onOpenProfile?: () => void;
  className?: string;
}) {
  const [selected, setSelected] = useState(LANGUAGES[0].value);

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View
        className={cn(
          "bg-background rounded-xl p-4 border border-primary",
          className
        )}
        style={{ borderWidth: 0.5 }}
        {...props}
      >
        <View className="flex-row gap-2 items-center mb-4">
          <MaterialCommunityIcons
            className="text-primary"
            name="account-circle-outline"
            size={24}
          />
          <Text className="text-lg text-primary font-semibold">Langue</Text>
        </View>
        <View className="mb-4">
          <Text className="text-base text-accent font-bold mb-2">
            Choisissez votre langue préférée
          </Text>
          <View className="rounded-2xl mb-4">
            {/* DropdownMenu should be styled via its own props/classes */}
            <DropdownMenu
              items={LANGUAGES}
              value={selected}
              onValueChange={setSelected}
              placeholder="Choisissez"
            />
          </View>
        </View>
        <TouchableOpacity
          className="bg-primary rounded-full py-3 flex-row items-center justify-center w-full"
          onPress={() => onConfirm?.(selected)}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons
            name="content-save-outline"
            size={20}
            color="var(--background)"
            style={{ marginRight: 8 }}
          />
          <Text className="text-background text-base font-semibold">
            Confirmer
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
