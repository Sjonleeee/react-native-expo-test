import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";

export default function ModalScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text variant="h1">This is a modal</Text>
      <Link href="/" dismissTo style={{ marginTop: 16, paddingVertical: 16 }}>
        <Text>Go to home screen</Text>
      </Link>
    </View>
  );
}
