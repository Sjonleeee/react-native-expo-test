import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function MenuScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-background">
      <View className="px-4 pt-6">
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
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/mes-donnees")}
        >
          <Text className="text-base text-foreground">Mes données</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/gestionnaire-de-dossier")}
        >
          <Text className="text-base text-foreground">
            Gestionnaire de dossier
          </Text>
        </TouchableOpacity>
        <View className="border-b border-border mb-2" />
        {/* Mes paiements section */}
        <View className="flex-row items-center mb-2 mt-4">
          <MaterialCommunityIcons name="seal" size={24} color="#23396C" />
          <Text className="ml-2 text-lg font-bold text-primary">
            Mes paiements
          </Text>
        </View>
        <View className="border-b border-border mb-2" />
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/derniers-paiements")}
        >
          <Text className="text-base text-foreground">Derniers paiements</Text>
        </TouchableOpacity>
        <View className="border-b border-border mb-2" />
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
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/attestation-de-paiement")}
        >
          <Text className="text-base text-foreground">
            Attestation de paiement
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/prime-de-naissance-anticipee")}
        >
          <Text className="text-base text-foreground">
            Prime de naissance anticipée
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/renvoi-formulaire")}
        >
          <Text className="text-base text-foreground">
            Renvoi d’un formulaire
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/demande-changement-carte-bancaire")}
        >
          <Text className="text-base text-foreground">
            Demande de changement de carte bancaire
          </Text>
        </TouchableOpacity>
        <View className="border-b border-border mb-2" />
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
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/langue")}
        >
          <Text className="text-base text-foreground">Langue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3"
          onPress={() => router.push("/a-propos")}
        >
          <Text className="text-base text-foreground">
            A propos de My Famiris
          </Text>
        </TouchableOpacity>
        <View className="border-b border-border mb-2" />
      </View>
    </View>
  );
}
