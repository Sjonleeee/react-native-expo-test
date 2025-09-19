import { PaymentInfoSection } from "@/components/custom/payment-info-section";
import { Text, View } from "react-native";

export default function DemandeChangementCarteBancaireScreen() {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 px-4 pt-8 flex flex-col gap-20 justify-start">
        <View className="bg-accent rounded-2xl p-6 ">
          <Text className="text-white text-lg font-semibold ">
            Pour des raisons de sécurité, cette fonctionnalité est uniquement
            accessible via une connexion CSAM (carte d’identité électronique
            eID, token, itsme, code de sécurité via une application mobile).
          </Text>
        </View>
        <PaymentInfoSection
          dossier="Dossier 123626"
          rows={[
            {
              label: "Types de paiement",
              value: "Virement bancaire",
              onEdit: () => {},
            },
            { label: "IBAN", value: "BE36 6322 6236 3626", onEdit: () => {} },
          ]}
        />
      </View>
    </View>
  );
}
