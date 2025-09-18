import { InfoCard } from "@/components/custom/info-card";
import { PaymentCard } from "@/components/custom/payment-card";
import { RequestCard } from "@/components/custom/request-card";
import { AppHeader } from "@/components/ui/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Aperçu" />
      <ScrollView>
        {/* Payments */}
        <View className="px-4 mt-6">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-xl font-bold text-foreground">
              Derniers paiements
            </Text>
            <TouchableOpacity
              onPress={() =>
                window?.dispatchEvent(
                  new CustomEvent("open-payments-modal", {
                    detail: { onlyModal: true },
                  })
                )
              }
            >
              <Text className="text-sm text-primary underline font-medium">
                voir tout
              </Text>
            </TouchableOpacity>
          </View>
          <PaymentCard
            date="30/07/2015 - 12/2013"
            due="312,64"
            retenue="312,64"
            recu="0,00"
          />
        </View>
        {/* Mon dossier */}
        <View className="px-4 mt-6">
          <Text className="text-xl font-bold text-foreground">Mon dossier</Text>
          <InfoCard
            icon="file-document-outline"
            text="Dossier 1 géré par Madame Valérie SOUPART"
          />
        </View>

        {/* Demandes */}
        <View className="px-4 mt-4">
          <Text className="text-xl font-bold text-foreground">Demandes</Text>
          <View className="grid grid-cols-2 gap-4">
            <RequestCard>
              <MaterialCommunityIcons
                name="currency-eur"
                size={48}
                color="#fff"
              />
              <Text className="text-base text-white font-medium">
                Attestation de paiement
              </Text>
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="baby-face-outline"
                size={48}
                color="#fff"
              />
              <Text className="text-base text-white font-medium">
                Prime de naissance anticipée
              </Text>
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={48}
                color="#fff"
              />
              <Text className="text-base text-white font-medium">
                Renvoi d un formulaire
              </Text>
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={48}
                color="#fff"
              />
              <Text className="text-base text-white font-medium">
                Demande de changement de numéro bancaire
              </Text>
            </RequestCard>
          </View>
        </View>

        {/* Gestionnaire de dossier */}
        <View className="px-4 mt-4">
          <Text className="text-xl font-bold text-foreground">
            Gestionnaire de dossier
          </Text>
          <InfoCard icon="account-outline" text="Madame Valérie SOUPART" />
          <InfoCard icon="phone-outline" text="+32 2 237 25 00" />
          <InfoCard icon="email-outline" text="valerie.soupart@famifed.be" />
        </View>
        {/* Footer */}
        <View className="items-center mt-2 mb-4">
          <Text className="text-xs text-gray-500">
            Plus deinformations sur http://famiris.brussels
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
