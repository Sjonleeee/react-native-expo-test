import { PaymentInfoRow } from "@/components/custom/payment-info-row";
import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

export function PaymentInfoSection({
  dossier,
  rows,
  className = "",
}: {
  dossier: string;
  rows: { label: string; value: string; onEdit?: () => void }[];
  className?: string;
}) {
  return (
    <View className={cn(className)}>
      <Text className="text-xl font-bold text-primary mb-6">{dossier}</Text>
      <View className="bg-background rounded-xl border-t border-b border-border divide-y divide-border ">
        {rows.map((row, idx) => (
          <PaymentInfoRow key={row.label + idx} {...row} />
        ))}
      </View>
    </View>
  );
}
