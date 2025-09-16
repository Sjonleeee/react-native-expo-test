import { PaymentModal } from "@/components/payment-modal";
import { Header } from "@/components/ui/Header";
import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// Reusable card for Demandes section
export function FeatureCard({ icon, label }: { icon: string; label: string }) {
  return (
    <Card className="w-[48%] h-32 bg-[#23396C] rounded-xl items-center justify-center mb-2">
      <MaterialCommunityIcons name={icon as any} size={36} color="#fff" />
      <Text className="text-white font-medium mt-2 text-sm text-center">
        {label}
      </Text>
    </Card>
  );
}

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

export function PaymentRow({ items }: { items: number[] }) {
  return (
    <View className="flex-row space-x-3 overflow-x-scroll px-4 pb-2">
      {items.map((_, i) => (
        <Card key={i} className="w-75 bg-transparent rounded-2xl mb-4">
          {/* Card Outer Shadow */}
          <View className="rounded-2xl shadow-sm border border-[#E0E6ED]">
            {/* Card Header */}
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
            {/* Card Body Inner */}
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
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const [showPayments, setShowPayments] = React.useState(false);

  return (
    <View className="flex-1 bg-[#F3F6F8]">
      <Header onOpenPayments={() => setShowPayments(true)} />
      <ScrollView>
        {/* Payments */}
        <View className="px-4 mt-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-semibold text-[#23396C]">
              Derniers paiements
            </Text>
            <TouchableOpacity onPress={() => router.push("/paiements")}>
              <Text className="text-sm text-blue-500 font-medium">
                voir tout
              </Text>
            </TouchableOpacity>
          </View>
          {/* First row */}
          <View className="-mx-4">
            <PaymentRow items={[1, 2, 3, 4]} />
          </View>

          {/* Second row */}
          <View className="-mx-4 mt-2">
            <PaymentRow items={[2, 6, 7, 8]} />
          </View>
          <View className="items-center mt-2">
            <View className="h-1 w-24 bg-[#E0E6ED] rounded-full flex-row items-center justify-center">
              <View className="h-1 w-6 bg-[#4CB6A3] rounded-full" />
            </View>
          </View>
        </View>
        {/* Mon dossier */}
        <View className="px-4 mt-4">
          <Text className="text-base font-semibold text-[#23396C] mb-2">
            Mon dossier
          </Text>
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
        <View className="px-2 mt-2">
          <Text className="text-base font-semibold text-[#23396C] mb-2">
            Demandes
          </Text>
          <View className="flex-row flex-wrap gap-2 justify-between">
            <FeatureCard icon="currency-eur" label="Attestation de paiement" />
            <FeatureCard
              icon="baby-face-outline"
              label="Prime de naissance anticipée"
            />
            <FeatureCard
              icon="file-document-outline"
              label="Renvoi d'un formulaire"
            />
            <FeatureCard
              icon="bank-transfer"
              label="Demande de changement de numéro bancaire"
            />
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
      <PaymentModal
        visible={showPayments}
        onClose={() => setShowPayments(false)}
        onOpenProfile={() => router.push("/mes-donnees")}
      />
    </View>
  );
}
