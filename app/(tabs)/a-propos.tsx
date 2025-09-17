import { Header } from "@/components/ui/Header";
import { ScrollView, Text, View } from "react-native";

export default function AProposScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <Header />
      <View className="flex-1 bg-white">
        <ScrollView className="flex-1 px-6 pt-8" contentContainerStyle={{ paddingBottom: 32 }}>
          {[1, 2, 3].map((i) => (
            <View key={i} className="mb-8">
              <Text className="text-xl font-bold text-blue-900 mb-3">
                Accès et sécurité
              </Text>
              <Text className="text-base text-gray-800 leading-6">
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
