import { ActionButton } from "@/components/custom/action-button";
import { DataRow } from "@/components/custom/data-row";
import { AppHeader } from "@/components/ui/AppHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";

export default function MesDonneesScreen() {
  const handleOpenMoved = () => {
    // TODO: Implement navigation or modal for moved
  };

  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Mes données" showBackButton />
      <ScrollView className="flex-1">
        {/* Profile Circle */}
        <View className="flex items-center mt-8 mb-2">
          <Avatar className="w-32 h-32" alt="Michael Jackson">
            <AvatarFallback className="bg-accent text-background">
              <Text className="text-3xl font-bold text-background">MJ</Text>
            </AvatarFallback>
          </Avatar>
          <Text className="text-primary text-2xl font-bold mt-6">
            Michael Jackson
          </Text>
        </View>
        {/* Personal Info */}
        <View className="flex px-6 mt-6">
          <View className="flex flex-row items-center gap-2 mb-2">
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color={"var(--primary)"}
            />
            <Text className="text-primary font-semibold text-lg m-0">
              Mes informations personnelles
            </Text>
          </View>
          <DataRow label="Nom" value="Michael Jackson" />
          <DataRow
            label="Adresse"
            value={"6 Rue d’indépendance\n1000 BRUXELLES"}
          />
          <DataRow label="Date de naissance" value="19 septembre 1945" />
          <DataRow
            label="Numéro de registre nationale"
            value="63.56.12-411.22"
          />
        </View>
        {/* Contact Info */}
        <View className="flex px-6 mt-6">
          <View className="flex flex-row items-center gap-2 mb-2">
            <MaterialCommunityIcons
              name="send"
              size={28}
              color={"var(--primary)"}
            />
            <Text className="text-primary font-semibold text-lg m-0">
              Mes données de contact
            </Text>
          </View>
          <DataRow label="Numéro téléphone" value="+32 463 96 63 63" />
          <DataRow label="Adresse e-mail" value="michael.jackson@beatit.be" />
        </View>
        {/* Button */}
        <View className="flex px-6 mt-8 mb-8">
          <ActionButton icon="information-outline" onPress={handleOpenMoved}>
            Vous avez déménagé
          </ActionButton>
        </View>
      </ScrollView>
    </View>
  );
}
