import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-[#F3F6F8]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 pt-8 pb-2 bg-white border-b border-gray-200">
        <MaterialCommunityIcons name="menu" size={28} color="#23396C" />
        <Text className="text-lg font-semibold text-[#23396C]">Aperçu</Text>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={28}
          color="#23396C"
        />
      </View>
      {/* Payments */}
      <View className="px-4 mt-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-base font-semibold text-[#23396C]">
            Derniers paiements
          </Text>
          <Text className="text-sm text-blue-500 font-medium">voir tout</Text>
        </View>
        {/* First row */}
        <View className="-mx-4">
          <View className="flex-row space-x-3 overflow-x-scroll px-4 pb-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Card
                key={i}
                className="w-64 bg-white rounded-2xl shadow-sm p-3 mb-2 border border-[#E0E6ED]"
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs text-[#23396C] font-medium">
                    30/07/2015 - 12/2013
                  </Text>
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={18}
                    color="#4CB6A3"
                  />
                </View>
                <View className="flex-row justify-between bg-[#F3F6F8] rounded-lg p-2">
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Dû</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      312,64 EUR
                    </Text>
                  </View>
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Retenue</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      312,64 EUR
                    </Text>
                  </View>
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Reçu</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      0,00 EUR
                    </Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
        </View>
        {/* Second row */}
        <View className="-mx-4 mt-2">
          <View className="flex-row space-x-3 overflow-x-scroll px-4 pb-2">
            {[5, 6, 7, 8].map((_, i) => (
              <Card
                key={i}
                className="w-64 bg-white rounded-2xl shadow-sm p-3 mb-2 border border-[#E0E6ED]"
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-xs text-[#23396C] font-medium">
                    30/07/2015 - 12/2013
                  </Text>
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={18}
                    color="#4CB6A3"
                  />
                </View>
                <View className="flex-row justify-between bg-[#F3F6F8] rounded-lg p-2">
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Dû</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      312,64 EUR
                    </Text>
                  </View>
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Retenue</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      312,64 EUR
                    </Text>
                  </View>
                  <View className="items-center flex-1">
                    <Text className="text-xs text-gray-500">Reçu</Text>
                    <Text className="font-bold text-base text-[#23396C]">
                      0,00 EUR
                    </Text>
                  </View>
                </View>
              </Card>
            ))}
          </View>
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
          <Card className="w-[48%] h-32 bg-[#23396C] rounded-xl items-center justify-center mb-2">
            <MaterialCommunityIcons
              name="currency-eur"
              size={36}
              color="#fff"
            />
            <Text className="text-white font-medium mt-2 text-sm text-center">
              Attestation de paiement
            </Text>
          </Card>
          <Card className="w-[48%] h-32 bg-[#23396C] rounded-xl items-center justify-center mb-2">
            <MaterialCommunityIcons
              name="baby-face-outline"
              size={36}
              color="#fff"
            />
            <Text className="text-white font-medium mt-2 text-sm text-center">
              Prime de naissance anticipée
            </Text>
          </Card>
          <Card className="w-[48%] h-32 bg-[#23396C] rounded-xl items-center justify-center mb-2">
            <MaterialCommunityIcons
              name="file-document-outline"
              size={36}
              color="#fff"
            />
            <Text className="text-white font-medium mt-2 text-sm text-center">
              Renvoi d'un formulaire
            </Text>
          </Card>
          <Card className="w-[48%] h-32 bg-[#23396C] rounded-xl items-center justify-center mb-2">
            <MaterialCommunityIcons
              name="bank-transfer"
              size={36}
              color="#fff"
            />
            <Text className="text-white font-medium mt-2 text-sm text-center">
              Demande de changement de numéro bancaire
            </Text>
          </Card>
        </View>
      </View>
      {/* Gestionnaire de dossier */}
      <View className="px-4 mt-4">
        <Text className="text-base font-semibold text-[#23396C] mb-2">
          Gestionnaire de dossier
        </Text>
        <Card className="flex-row items-center bg-white rounded-xl p-3 mb-2">
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="#23396C"
            style={{ marginRight: 8 }}
          />
          <Text className="text-sm text-[#23396C]">Madame Valérie SOUPART</Text>
        </Card>
        <Card className="flex-row items-center bg-white rounded-xl p-3 mb-2">
          <MaterialCommunityIcons
            name="phone-outline"
            size={20}
            color="#23396C"
            style={{ marginRight: 8 }}
          />
          <Text className="text-sm text-[#23396C]">+32 2 237 25 00</Text>
        </Card>
        <Card className="flex-row items-center bg-white rounded-xl p-3 mb-2">
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="#23396C"
            style={{ marginRight: 8 }}
          />
          <Text className="text-sm text-[#23396C]">
            valerie.soupart@famifed.be
          </Text>
        </Card>
      </View>
      {/* Footer */}
      <View className="items-center mt-2 mb-4">
        <Text className="text-xs text-gray-500">
          Plus deinformations sur http://famiris.brussels
        </Text>
      </View>
      {/* Bottom Navigation */}
     
    </ScrollView>
  );
}
