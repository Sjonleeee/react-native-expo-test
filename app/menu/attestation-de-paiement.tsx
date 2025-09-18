import { ActionButton } from "@/components/custom/action-button";
import { FormFieldWithIcon } from "@/components/custom/form-field-with-icon";
import React from "react";
import { ScrollView, Switch, Text, View } from "react-native";

export default function AttestationDePaiementScreen() {
  const [withPaymentInfo, setWithPaymentInfo] = React.useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <FormFieldWithIcon
          title="Date de début"
          icon="calendar"
          placeholder="Choisissez une date"
        />
        <FormFieldWithIcon
          title="Date de fin"
          icon="calendar"
          placeholder="Choisissez une date"
        />
        <View className="flex-row items-center justify-between mb-6 mt-2">
          <Text className="text-primary font-bold text-base">
            Avec les informations de paiement?
          </Text>
          <Switch
            value={withPaymentInfo}
            onValueChange={setWithPaymentInfo}
            trackColor={{ false: "#E0E6ED", true: "#23396C" }}
            thumbColor={withPaymentInfo ? "#fff" : "#fff"}
          />
        </View>
        <ActionButton icon="download" onPress={() => {}}>
          Télécharger l’attestation
        </ActionButton>
      </ScrollView>
    </View>
  );
}
