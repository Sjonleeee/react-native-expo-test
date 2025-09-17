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
        "flex-row gap-2 items-center bg-background rounded-xl p-3 mb-4 border border-primary",
        className
      )}
      style={{ borderWidth: 0.5 }}
      {...props}
    >
      <MaterialCommunityIcons
        className="text-foreground"
        name={icon as any}
        size={20}
      />
      <Text className="text-sm text-foreground truncate">{text}</Text>
    </View>
  );
}
