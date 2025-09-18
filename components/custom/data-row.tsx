import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function DataRow({
  label,
  value,
  icon,
  className,
  ...props
}: {
  label: string;
  value: string;
  icon?: string;
  className?: string;
}) {
  return (
    <View
      className={cn("border-t border-b border-border px-0", className)}
      {...props}
    >
      <View className="flex-row items-center py-3">
        {icon && (
          <MaterialCommunityIcons
            className="text-foreground"
            name={icon as any}
            size={20}
          />
        )}
        <View className="flex-1">
          <Text className="text-xs text-muted-foreground mb-0.5">{label}</Text>
          <Text className="text-base text-foreground whitespace-pre-line">
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
}
