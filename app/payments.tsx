import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface PaymentRow {
  date: string;
  month: string;
  due: string;
  retenue: string;
  recu: string;
}
interface PaymentSection {
  section: string;
  rows: PaymentRow[];
}

export default function PaymentsScreen() {
  const router = useRouter();

  // Dummy data for visual reference (replace with your real data/component)
  const payments: PaymentSection[] = [
    {
      section: "Juillet 2015",
      rows: [
        {
          date: "30/07",
          month: "12/2013",
          due: "312,64",
          retenue: "312,64",
          recu: "0,00",
        },
        {
          date: "29/07",
          month: "11/2013",
          due: "100,00",
          retenue: "0,00",
          recu: "100,00",
        },
        {
          date: "28/07",
          month: "10/2013",
          due: "50,00",
          retenue: "10,00",
          recu: "40,00",
        },
      ],
    },
    { section: "Juin 2015", rows: [] },
    { section: "Mai 2015", rows: [] },
    { section: "Avril 2015", rows: [] },
    { section: "Mars 2015", rows: [] },
  ];

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-border">
        <TouchableOpacity
          onPress={() => router.back()}
          className="items-center justify-center"
          accessibilityLabel="Terug"
        >
          <Text style={{ fontSize: 24, color: "#23396C" }}>{"<"} </Text>
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-primary flex-1 text-center">
          Paiements
        </Text>
        <View className="items-center justify-center">
          <TouchableOpacity
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Open profile"
          >
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="var(--primary)"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Search bar */}
      <View className="px-4 pt-4 pb-4">
        <View className="flex-row items-center border border-primary rounded-full px-4 py-2">
          <MaterialCommunityIcons
            name="magnify"
            size={22}
            color="var(--primary)"
          />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Recherchez une date ou un montant..."
            placeholderTextColor="var(--muted)"
          />
        </View>
      </View>
      {/* Table header */}
      <View className="flex-row px-4 pb-4 border-b border-border">
        <Text className="w-20 text-xs text-muted">Date de paiement</Text>
        <Text className="w-20 text-xs text-muted">Mois</Text>
        <Text className="w-20 text-xs text-muted">Dû</Text>
        <Text className="w-20 text-xs text-muted">Retenue</Text>
        <Text className="w-20 text-xs text-muted">Reçu</Text>
      </View>
      <ScrollView className="flex-1 px-4">
        {payments.map((section, idx) => (
          <View key={section.section + idx} className="mb-2">
            <Text className="text-base font-bold text-primary mb-2 mt-6">
              {section.section}
            </Text>
            {section.rows.map((row, i) => (
              <View
                key={row.date + row.month + i}
                className="flex-row items-center py-2 border-b border-border"
              >
                <Text className="w-20 text-xs text-foreground">{row.date}</Text>
                <Text className="w-20 text-xs text-foreground">
                  {row.month}
                </Text>
                <Text className="w-20 text-xs font-bold text-primary">
                  {row.due} <Text className="text-[10px] text-muted">EUR</Text>
                </Text>
                <Text className="w-20 text-xs font-bold text-primary">
                  {row.retenue}{" "}
                  <Text className="text-[10px] text-muted">EUR</Text>
                </Text>
                <Text className="w-20 text-xs font-bold text-primary">
                  {row.recu} <Text className="text-[10px] text-muted">EUR</Text>
                </Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export const options = {
  headerShown: false,
};
