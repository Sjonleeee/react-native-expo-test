import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function PaymentCard({
  date,
  due,
  retenue,
  recu,
  infoIcon = true,
  className,
  ...props
}: {
  date: string;
  due: string;
  retenue: string;
  recu: string;
  infoIcon?: boolean;
  className?: string;
}) {
  const items = [
    { label: "Dû", value: due },
    { label: "Retenue", value: retenue },
    { label: "Reçu", value: recu },
  ];
  return (
    <View
      className={cn(
        "w-full flex flex-col bg-background rounded-2xl mb-4 border border-primary shadow-sm",
        className
      )}
      style={{ borderWidth: 0.5 }}
      {...props}
    >
      <View className="flex-row items-center justify-between bg-accent rounded-t-2xl px-5 py-3">
        <Text className="text-xs text-accent-foreground font-medium">
          {date}
        </Text>
        {infoIcon && (
          <View className="bg-background rounded-full p-0.8">
            <MaterialCommunityIcons
              name="information-outline"
              size={18}
              color="var(--accent)"
            />
          </View>
        )}
      </View>
      <View className="px-3 pb-3 pt-2">
        <View className="bg-card rounded-xl shadow-sm px-4 py-3 flex-row justify-between items-end gap-6">
          {items.map(({ label, value }) => (
            <View className="flex-1 flex flex-col gap-1" key={label}>
              <Text className="text-xs text-muted font-medium mb-2">
                {label}
              </Text>
              <View className="flex-row items-end gap-1">
                <Text className="font-bold text-xs text-foreground">
                  {value}
                </Text>
                <Text className="text-xs text-muted-foreground">EUR</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
