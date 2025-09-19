import { cn } from "@/lib/utils";
import { View } from "react-native";
import { PaymentTableSection } from "./payment-table-section";

export type PaymentTableProps = {
  sections: {
    title: string;
    rows: {
      date: string;
      month: string;
      du: string;
      retenue: string;
      recu: string;
    }[];
  }[];
  className?: string;
};

export function PaymentTable({ sections, className }: PaymentTableProps) {
  return (
    <View className={cn("w-full", className)}>
      {/* Table header */}
      <PaymentTableSection.Header className="px-4" />
      {sections.map((section, idx) => (
        <PaymentTableSection key={idx} {...section} />
      ))}
    </View>
  );
}
