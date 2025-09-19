import { DataRow } from "@/components/custom/data-row";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Text, View } from "react-native";

export default function GestionnaireDeDossierScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        <View className="flex items-center mt-8 mb-2">
          <Avatar className="w-32 h-32" alt="Valérie Soupart">
            <AvatarFallback className="bg-accent text-background text-3xl font-bold">
              <Text className="text-3xl font-bold text-background">VS</Text>
            </AvatarFallback>
          </Avatar>
          <Text className="mt-6 text-primary text-xl font-bold">
            Valérie Soupart
          </Text>
        </View>
        {/* Contact Info */}
        <DataRow
          sectionTitle="Données de contact"
          sectionIcon="send"
          className="mt-6"
        />
        <DataRow label="Numéro téléphone" value="+32 463 96 63 63" />
        <DataRow label="Adresse e-mail" value="valerie.soupart@famifed.be" />
      </View>
    </View>
  );
}
