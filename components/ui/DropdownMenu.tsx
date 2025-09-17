import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const DropdownMenu: React.FC<{
  items: { label: string; value: string }[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
}> = ({ items, value, onValueChange, placeholder }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <View style={{ borderWidth: 2, borderColor: "#23396C", borderRadius: 32, paddingHorizontal: 20, paddingVertical: 12 }}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => setOpen((o) => !o)}
        activeOpacity={0.8}
      >
        <MaterialCommunityIcons name="chevron-down" size={24} color="#23396C" />
        <Text style={{ fontSize: 16, color: "#23396C", marginLeft: 8 }}>
          {items.find((i) => i.value === value)?.label || placeholder || "Select"}
        </Text>
      </TouchableOpacity>
      {open ? (
        <View style={{ backgroundColor: "#fff", borderRadius: 16, borderWidth: 1, borderColor: "#23396C", marginTop: 12 }}>
          {items.map((item, idx) => (
            <TouchableOpacity
              key={item.value}
              style={{ padding: 12, borderBottomWidth: idx !== items.length - 1 ? 1 : 0, borderBottomColor: "#E5E7EB" }}
              onPress={() => { onValueChange(item.value); setOpen(false); }}
            >
              <Text style={{ fontSize: 16, color: "#23396C" }}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
    </View>
  );
};
