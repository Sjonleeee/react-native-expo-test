import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function PaymentsScreen() {
  const router = useRouter();

  // Dummy data for visual reference (replace with your real data/component)
  const payments = [
    { section: "Juillet 2015", rows: [1, 2, 3] },
    { section: "Juin 2015", rows: [1, 2, 3] },
    { section: "Mai 2015", rows: [1, 2] },
    { section: "Avril 2015", rows: [1, 2] },
    { section: "Mars 2015", rows: [1, 2, 3, 4] },
  ];

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="items-center justify-center" accessibilityLabel="Terug">
          <Text style={{ fontSize: 24, color: '#23396C' }}>{'<'} </Text>
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-[#23396C] text-center flex-1">Paiements</Text>
        <View className="items-center justify-center">
          {/* Optionally add an icon or leave empty for spacing */}
        </View>
      </View>
      <ScrollView style={{ flex: 1, marginTop: 0 }}>
        {/* Search bar and table header can be added here */}
        {payments.map((section, idx) => (
          <View key={idx} style={{ marginBottom: 24 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#23396C', marginLeft: 16, marginTop: 16 }}>
              {section.section}
            </Text>
            {section.rows.map((row, i) => (
              <View key={i} style={{ flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#E0E6ED', marginHorizontal: 16 }}>
                <Text style={{ width: 60 }}>30/07</Text>
                <Text style={{ width: 60 }}>12/2013</Text>
                <Text style={{ width: 60 }}>312,64 EUR</Text>
                <Text style={{ width: 60 }}>312,64 EUR</Text>
                <Text style={{ width: 60 }}>0,00 EUR</Text>
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
