import { PaymentTableSection } from "@/components/custom/payment-table-section";
import { PaymentDetailModal } from "@/components/payment-detail-modal";
import { Input } from "@/components/ui/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, View } from "react-native";

const paymentSections = [
  {
    title: "Juillet 2015",
    rows: [
      {
        date: "30/07",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "20/07",
        month: "12/2013",
        du: "680,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/07",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
    ],
  },
  {
    title: "Juin 2015",
    rows: [
      {
        date: "30/06",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/06",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/06",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/06",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
    ],
  },
  {
    title: "Mai 2015",
    rows: [
      {
        date: "30/05",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/05",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
    ],
  },
  {
    title: "Avril 2015",
    rows: [
      {
        date: "30/04",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/04",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
    ],
  },
  {
    title: "Mars 2015",
    rows: [
      {
        date: "30/03",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/03",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/03",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/03",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
      {
        date: "30/03",
        month: "12/2013",
        du: "312,64",
        retenue: "312,64",
        recu: "0,00",
      },
    ],
  },
];

type Payment = {
  date: string;
  month: string;
  du: string;
  retenue: string;
  recu: string;
};

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
