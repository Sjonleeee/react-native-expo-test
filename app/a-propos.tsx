import { AppHeader } from "@/components/ui/AppHeader";
import { Text, View } from "react-native";

export default function AProposScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="A propos de My Famiris" showBackButton />
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-primary">A propos de My Famiris</Text>
      </View>
    </View>
  );
}
