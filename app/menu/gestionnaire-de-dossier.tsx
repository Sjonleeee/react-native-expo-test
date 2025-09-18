import { DataRow } from "@/components/custom/data-row";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function GestionnaireDeDossierScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1">
        <View className="flex items-center mt-8 mb-2">
          <Avatar className="w-32 h-32" alt="Valérie Soupart">
            <AvatarFallback className="bg-accent text-background text-3xl font-bold">
              VS
            </AvatarFallback>
          </Avatar>
          <h1 className="mt-6">Valérie Soupart</h1>
        </View>
        {/* Contact Info */}
        <View className="flex px-6 mt-6">
          <View className="flex flex-row items-center space-x-2 mb-2">
            <MaterialCommunityIcons
              name="send"
              size={28}
              color="var(--primary)"
            />
            <h2 className=" m-0 p-0">Données de contact</h2>
          </View>
          <DataRow label="Numéro téléphone" value="+32 463 96 63 63" />
          <DataRow label="Adresse e-mail" value="valerie.soupart@famifed.be" />
        </View>
      </View>
    </View>
  );
}
