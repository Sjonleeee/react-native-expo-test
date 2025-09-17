import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function InfoCard({
  icon,
  text,
  className,
  ...props
}: {
  icon: string;
  text: string;
  className?: string;
}) {
  return (
    <View
      className={cn(
        "flex-row items-center bg-background rounded-xl p-3 mb-4 shadow-sm",
        className
      )}
      {...props}
    >
      <MaterialCommunityIcons
        name={icon as any}
        size={20}
        color="var(--foreground)"
        style={{ marginRight: 8 }}
      />
      <Text className="text-sm text-foreground">{text}</Text>
    </View>
  );
}
