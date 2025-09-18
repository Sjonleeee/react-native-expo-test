import { MenuRow } from "@/components/custom/menu-row";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-background">
      <View className="px-4 pt-6 flex flex-col">
        {/* Mon dossier section */}
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="account-outline"
              size={24}
              color="#23396C"
            />
            <Text className="ml-2 text-lg font-bold text-primary">
              Mon dossier
            </Text>
          </View>
          <TouchableOpacity>
            <Text className="text-primary underline font-medium">
              Déconnexion
            </Text>
          </TouchableOpacity>
        </View>
        <View className="border-b border-border mb-2" />
        <MenuRow
          label="Mes données"
          onPress={() => router.push("/mes-donnees")}
        />
        <MenuRow
          label="Gestionnaire de dossier"
          onPress={() => router.push("/menu/gestionnaire-de-dossier")}
        />
        <View className="mb-2" />
        {/* Mes paiements section */}
        <View className="flex-row items-center mb-2 mt-4">
          <MaterialCommunityIcons name="seal" size={24} color="#23396C" />
          <Text className="ml-2 text-lg font-bold text-primary">
            Mes paiements
          </Text>
        </View>
        <View className="border-b border-border mb-2" />
        <MenuRow
          label="Derniers paiements"
          onPress={() => router.push("/menu/derniers-paiements")}
        />
        <View className="mb-2" />
        {/* Mes demandes section */}
        <View className="flex-row items-center mb-2 mt-4">
          <MaterialCommunityIcons
            name="file-document-outline"
            size={24}
            color="#23396C"
          />
          <Text className="ml-2 text-lg font-bold text-primary">
            Mes demandes
          </Text>
        </View>
        <View className="border-b border-border mb-2" />
        <MenuRow
          label="Attestation de paiement"
          onPress={() => router.push("/menu/attestation-de-paiement")}
        />
        <MenuRow
          label="Prime de naissance anticipée"
          onPress={() => router.push("/menu/prime-de-naissance-anticipee")}
        />
        <MenuRow
          label="Renvoi d’un formulaire"
          onPress={() => router.push("/menu/renvoi-formulaire")}
        />
        <MenuRow
          label="Demande de changement de carte bancaire"
          onPress={() => router.push("/menu/demande-changement-carte-bancaire")}
        />
        <View className="mb-2" />
        {/* Réglages section */}
        <View className="flex-row items-center mb-2 mt-4">
          <MaterialCommunityIcons
            name="cog-outline"
            size={24}
            color="#23396C"
          />
          <Text className="ml-2 text-lg font-bold text-primary">Réglages</Text>
        </View>
        <View className="border-b border-border mb-2" />
        <MenuRow label="Langue" onPress={() => router.push("/menu/langue")} />
        <MenuRow
          label="A propos de My Famiris"
          onPress={() => router.push("/(tabs)/a-propos")}
        />
        <View />
      </View>
    </View>
  );
}
