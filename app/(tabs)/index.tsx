import { InfoCard } from "@/components/custom/info-card";
import { PaymentCard } from "@/components/custom/payment-card";
import { RequestCard } from "@/components/custom/request-card";
import { AppHeader } from "@/components/ui/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="Aperçu" />
      <ScrollView>
        {/* Payments */}
        <View className="px-4 mt-8">
          <View className="flex-row items-center justify-between ">
            <Text className="text-xl font-bold text-foreground mb-4">
              Derniers paiements
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/menu/derniers-paiements")}
            >
              <Text className="text-lg text-primary underline mb-4">
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
        <View className="px-4 mt-8">
          <Text className="text-xl font-bold text-foreground mb-4">
            Mon dossier
          </Text>
          <InfoCard
            icon="file-document-outline"
            text="Dossier 1 géré par Madame Valérie SOUPART"
          />
        </View>

        {/* Demandes */}
        <View className="px-4 mt-8">
          <Text className="text-xl font-bold text-foreground mb-4">
            Demandes
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <View style={{ width: "48%" }}>
              <TouchableOpacity onPress={() => router.push("/menu/attestation-de-paiement")}> 
                <RequestCard>
                  <MaterialCommunityIcons
                    name="currency-eur"
                    size={48}
                    color="#fff"
                  />
                  <Text className="text-sm text-background text-center">
                    Attestation de paiement
                  </Text>
                </RequestCard>
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity onPress={() => router.push("/menu/prime-de-naissance-anticipee")}> 
                <RequestCard>
                  <MaterialCommunityIcons
                    name="baby-face-outline"
                    size={48}
                    color="#fff"
                  />
                  <Text className="text-sm text-background text-center">
                    Prime de naissance anticipée
                  </Text>
                </RequestCard>
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity onPress={() => router.push("/menu/renvoi-formulaire")}> 
                <RequestCard>
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={48}
                    color="#fff"
                  />
                  <Text className="text-sm text-background text-center">
                    Renvoi d un formulaire
                  </Text>
                </RequestCard>
              </TouchableOpacity>
            </View>
            <View style={{ width: "48%" }}>
              <TouchableOpacity onPress={() => router.push("/menu/demande-changement-carte-bancaire")}> 
                <RequestCard>
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={48}
                    color="#fff"
                  />
                  <Text className="text-sm text-background text-center">
                    Demande de changement de numéro bancaire
                  </Text>
                </RequestCard>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Gestionnaire de dossier */}
        <View className="px-4 mt-8">
          <Text className="text-xl font-bold text-foreground mb-4">
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
