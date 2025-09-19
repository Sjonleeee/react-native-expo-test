import { PaymentTableSection } from "@/components/custom/payment-table-section";
import { PaymentDetailModal } from "@/components/payment-detail-modal";
import { Input } from "@/components/ui/input";
import { Payment, paymentSections } from "@/constants/payments";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";

export default function DerniersPaiementsScreen() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedPayment, setSelectedPayment] = React.useState<Payment | null>(
    null
  );

  const handleRowPress = (payment: Payment) => {
    setSelectedPayment(payment);
    setShowModal(true);
  };

  return (
    <View className="flex-1 bg-background">
      {/* Search bar */}
      <View className="px-4 pt-6 pb-7">
        <View className="flex-row items-center bg-background rounded-full border border-primary px-4 py-3">
          <MaterialCommunityIcons
            name="magnify"
            size={24}
            className="text-primary mr-2"
          />
          <Input
            className="flex-1 text-base text-muted-foreground"
            placeholder="Recherchez une date ou un montant..."
            placeholderTextColor="#A0AEC0"
            editable={true}
          />
        </View>
      </View>
      {/* Sticky table header */}
      <View className="px-4 sticky top-0 z-20">
        <PaymentTableSection.Header />
      </View>
      {/* Scrollable table content */}
      <ScrollView
        className="flex-1 px-4"
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator
      >
        {paymentSections.map((section, idx) => (
          <PaymentTableSection
            key={idx}
            title={section.title}
            rows={section.rows}
            onRowPress={handleRowPress}
          />
        ))}
      </ScrollView>
      {/* Payment detail modal */}
      {selectedPayment && (
        <PaymentDetailModal
          visible={showModal}
          onClose={() => setShowModal(false)}
          payment={selectedPayment}
        />
      )}
    </View>
  );
}
