import { Text, View } from "react-native";

export default function AProposScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--background)",
      }}
    >
      <Text
        style={{ fontSize: 18, fontWeight: "bold", color: "var(--primary)" }}
      >
        À propos
      </Text>
      <Text style={{ marginTop: 8, fontSize: 16, color: "var(--foreground)" }}>
        Deze pagina is nog leeg.
      </Text>
    </View>
  );
}
