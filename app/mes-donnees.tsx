import { ActionButton } from "@/components/custom/action-button";
import { DataRow } from "@/components/custom/data-row";
import { AppHeader } from "@/components/ui/AppHeader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
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
        <DataRow
          sectionTitle="Mes informations personnelles"
          sectionIcon="account-circle-outline"
          className="mt-6"
        />
        <DataRow label="Nom" value="Michael Jackson" />
        <DataRow
          label="Adresse"
          value={"6 Rue d’indépendance\n1000 BRUXELLES"}
        />
        <DataRow label="Date de naissance" value="19 septembre 1945" />
        <DataRow label="Numéro de registre nationale" value="63.56.12-411.22" />
        {/* Contact Info */}
        <DataRow
          sectionTitle="Mes données de contact"
          sectionIcon="send"
          className="mt-6"
        />
        <DataRow label="Numéro téléphone" value="+32 463 96 63 63" />
        <DataRow label="Adresse e-mail" value="michael.jackson@beatit.be" />
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
