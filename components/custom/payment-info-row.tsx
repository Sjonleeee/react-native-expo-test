import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export function PaymentInfoRow({
  label,
  value,
  onEdit,
  className = "",
}: {
  label: string;
  value: string;
  onEdit?: () => void;
  className?: string;
}) {
  return (
    <View className={className + " flex-row items-center px-4 py-4 justify-between gap-2"}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, color: "#23396C" }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text style={{ fontSize: 16, color: "#23396C", textAlign: "right" }}>{value}</Text>
      </View>
      <TouchableOpacity
        onPress={onEdit}
        style={{ marginLeft: 8, width: 32, height: 32, justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}
      >
        <MaterialCommunityIcons name="pencil-outline" size={24} color="#23396C" />
      </TouchableOpacity>
    </View>
  );
}
