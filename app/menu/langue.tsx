import { ActionButton } from "@/components/custom/action-button";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import React from "react";
import { Text, View } from "react-native";

export default function LangueScreen() {
  const [selectedLang, setSelectedLang] = React.useState("fr");
  return (
    <View className="flex-1 bg-background flex flex-col justify-start">
      <View className="w-full flex flex-col gap-6 mt-12 px-4">
        <Text className="text-lg font-bold text-primary mb-2">
          Choisissez votre langue préférée
        </Text>
        <DropdownMenu
          items={[
            { label: "Français", value: "fr" },
            { label: "Nederlands", value: "nl" },
            { label: "English", value: "en" },
          ]}
          value={selectedLang}
          onValueChange={setSelectedLang}
        />
        <ActionButton icon="content-save-outline" onPress={() => {}}>
          Confirmer
        </ActionButton>
      </View>
    </View>
  );
}
