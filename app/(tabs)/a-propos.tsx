import { Header } from "@/components/ui/Header";
import { ScrollView, Text, View } from "react-native";

export default function AProposScreen() {
  return (
    <View className="flex-1 bg-background ">
      <Header />
      <View className="flex-1">
        <ScrollView className="flex-1 px-6 pt-8">
          {[1, 2, 3].map((i) => (
            <View key={i} className="mb-8">
              <Text className="text-xl font-bold text-title mb-3">
                <h1>Accès et sécurité</h1>
              </Text>
              <Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse volutpat maximus diam, nec sollicitudin turpis.
                  Duis tincidunt mattis nulla, eu lacinia ligula. Vestibulum sit
                  amet auctor ex. In hac habitasse platea dictumst. Aenean
                  dignissim, nibh non pharetra pretium, augue erat pulvinar
                  velit
                </p>
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
