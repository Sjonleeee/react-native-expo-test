import { cn } from "@/lib/utils";
import { Text, View } from "react-native";
import { PaymentTableRow, PaymentTableRowProps } from "./payment-table-row";

export type PaymentTableSectionProps = {
  title: string;
  rows: PaymentTableRowProps[];
  onRowPress?: (row: PaymentTableRowProps) => void;
  className?: string;
};

export function PaymentTableSection({
  title,
  rows,
  onRowPress,
  className,
}: PaymentTableSectionProps) {
  return (
    <View className={cn("mb-4", className)}>
      <Text className="py-3 text-xl font-bold text-primary bg-background border-b border-border">
        {title}
      </Text>
      <View className="bg-background">
        {rows.map((row, i) => (
          <PaymentTableRow
            key={i}
            {...row}
            onPress={onRowPress ? () => onRowPress(row) : undefined}
            className={i === rows.length - 1 ? "border-b-0" : ""}
          />
        ))}
      </View>
    </View>
  );
}

PaymentTableSection.Header = function Header({ className = "" }) {
  return (
    <View className={cn("bg-background border-b border-border", className)}>
      <View className={cn("flex-row items-center py-2", className)}>
        <Text
          className={cn(
            "w-[80px] text-xs font-medium text-muted-foreground",
            className
          )}
        >
          Date de paiement
        </Text>
        <Text
          className={cn(
            "w-[80px] text-xs font-medium text-muted-foreground",
            className
          )}
        >
          Mois
        </Text>
        <Text
          className={cn(
            "w-[80px] text-xs font-medium text-muted-foreground",
            className
          )}
        >
          Dû
        </Text>
        <Text
          className={cn(
            "w-[80px] text-xs font-medium text-muted-foreground",
            className
          )}
        >
          Retenue
        </Text>
        <Text
          className={cn(
            "w-[80px] text-xs font-medium text-muted-foreground",
            className
          )}
        >
          Reçu
        </Text>
      </View>
    </View>
  );
};
