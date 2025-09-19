import { cn } from "@/lib/utils";
import { Text, View } from "react-native";

export type PaymentTableRowProps = {
  date: string;
  month: string;
  du: string;
  retenue: string;
  recu: string;
  className?: string;
  [key: string]: any;
};

export function PaymentTableRow({
  date,
  month,
  du,
  retenue,
  recu,
  className,
  ...props
}: PaymentTableRowProps) {
  return (
    <View
      className={cn(
        "flex-row items-center py-3 border-b border-border",
        className
      )}
      style={{ borderBottomWidth: 0.5 }}
      {...props}
    >
      <Text className="w-[60px] text-base text-foreground/90">{date}</Text>
      <Text className="w-[70px] text-base text-foreground/90">{month}</Text>
      <Text className="w-[80px] text-base font-bold text-foreground">
        {du} <Text className="font-normal text-xs">EUR</Text>
      </Text>
      <Text className="w-[80px] text-base font-bold text-foreground">
        {retenue} <Text className="font-normal text-xs">EUR</Text>
      </Text>
      <Text className="w-[70px] text-base font-bold text-right text-foreground">
        {recu} <Text className="font-normal text-xs">EUR</Text>
      </Text>
    </View>
  );
}
