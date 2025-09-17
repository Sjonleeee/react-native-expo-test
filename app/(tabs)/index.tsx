import { RequestCard } from "@/components/custom/request-card";
import { Header } from "@/components/ui/Header";
import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// Reusable info row for dossier manager
export function InfoRow({ icon, text }: { icon: string; text: string }) {
  return (
    <Card className="flex-row items-center bg-white rounded-xl p-3 mb-2">
      <MaterialCommunityIcons
        name={icon as any}
        size={20}
        color="#23396C"
        style={{ marginRight: 8 }}
      />
      <Text className="text-sm text-[#23396C]">{text}</Text>
    </Card>
  );
}

export function PaymentRow() {
  return (
    <View>
      <Card className="w-full bg-transparent rounded-2xl mb-4">
        <View className="rounded-2xl shadow-sm border border-[#E0E6ED]">
          <View className="flex-row items-center justify-between bg-[#1ED9B6] rounded-t-2xl px-5 py-3">
            <Text className="text-[14px] text-white font-medium">
              30/07/2015 - 12/2013
            </Text>
            <View className="bg-white rounded-full p-0.8">
              <MaterialCommunityIcons
                name="information-outline"
                size={18}
                color="#1ED9B6"
              />
            </View>
          </View>
          <View className="px-3 pb-3 pt-2">
            <View className="bg-white rounded-xl shadow-sm px-4 py-3 flex-row justify-between items-end gap-6">
              <View className="flex-1">
                <Text className="text-[12px] text-gray-600 font-medium mb-2">
                  Dû
                </Text>
                <View className="flex-row items-end">
                  <Text className="font-bold text-[14px] text-gray-900">
                    312,64
                  </Text>
                  <Text className="text-[8px] text-gray-500 ml-1 mb-1">
                    EUR
                  </Text>
                </View>
              </View>
              <View className="flex-1">
                <Text className="text-[12px] text-gray-600 font-medium mb-2">
                  Retenue
                </Text>
                <View className="flex-row items-end">
                  <Text className="font-bold text-[14px] text-gray-900">
                    312,64
                  </Text>
                  <Text className="text-[8px] text-gray-500 ml-1 mb-1">
                    EUR
                  </Text>
                </View>
              </View>
              <View className="flex-1">
                <Text className="text-[12px] text-gray-600 font-medium mb-2">
                  Reçu
                </Text>
                <View className="flex-row items-end">
                  <Text className="font-bold text-[14px] text-gray-900">
                    0,00
                  </Text>
                  <Text className="text-[8px] text-gray-500 ml-1 mb-1">
                    EUR
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-[#F3F6F8]">
      <Header />
      <ScrollView>
        {/* Payments */}
        <View className="px-4 mt-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-semibold text-[#23396C]">
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
              <Text className="text-sm text-blue-500 font-medium">
                voir tout
              </Text>
            </TouchableOpacity>
          </View>
          <PaymentRow />
        </View>
        {/* Mon dossier */}
        <View className="px-4 mt-4">
          <h3>Mon dossier</h3>
          <Card className="flex-row items-center bg-white rounded-xl p-3 mb-4">
            <MaterialCommunityIcons
              name="file-document-outline"
              size={20}
              color="#23396C"
              style={{ marginRight: 8 }}
            />
            <Text className="text-sm text-[#23396C]">
              Dossier 1 géré par Madame Valérie SOUPART
            </Text>
          </Card>
        </View>
        {/* Demandes */}
        <View className="px-4 mt-4">
          <h3>Demandes</h3>
          <View className="grid grid-cols-2 gap-4">
            <RequestCard>
              <MaterialCommunityIcons
                name="currency-eur"
                size={48}
                color="#fff"
              />
              Attestation de paiement
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="baby-face-outline"
                size={48}
                color="#fff"
              />
              Prime de naissance anticipée
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={48}
                color="#fff"
              />
              Renvoi d'un formulaire
            </RequestCard>
            <RequestCard>
              <MaterialCommunityIcons
                name="file-document-outline"
                size={48}
                color="#fff"
              />
              Demande de changement de numéro bancaire
            </RequestCard>
          </View>
        </View>
        {/* Gestionnaire de dossier */}
        <View className="px-4 mt-4">
          <Text className="text-base font-semibold text-[#23396C] mb-2">
            Gestionnaire de dossier
          </Text>
          <InfoRow icon="account-outline" text="Madame Valérie SOUPART" />
          <InfoRow icon="phone-outline" text="+32 2 237 25 00" />
          <InfoRow icon="email-outline" text="valerie.soupart@famifed.be" />
        </View>
        {/* Footer */}
        <View className="items-center mt-2 mb-4">
          <Text className="text-xs text-gray-500">
            Plus deinformations sur http://famiris.brussels
          </Text>
        </View>
        {/* Bottom Navigation */}
      </ScrollView>
    </View>
  );
}
