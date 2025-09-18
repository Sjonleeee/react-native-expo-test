import { AppHeader } from "@/components/ui/AppHeader";
import { ScrollView, Text, View } from "react-native";

export default function AProposScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppHeader title="À propos" showBackButton />
      <View className="flex-1">
        <ScrollView className="flex-1 px-6 pt-8">
          {[1, 2, 3].map((i) => (
            <View key={i} className="mb-8 flex flex-col">
              <Text className="text-primary text-3xl font-bold mb-2">
                Accès et sécurité
              </Text>
              <Text className="text-base text-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse volutpat maximus diam, nec sollicitudin turpis. Duis
                tincidunt mattis nulla, eu lacinia ligula. Vestibulum sit amet
                auctor ex. In hac habitasse platea dictumst. Aenean dignissim,
                nibh non pharetra pretium, augue erat pulvinar velit
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
