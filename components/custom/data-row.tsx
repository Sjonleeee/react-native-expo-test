import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function DataRow({
  label,
  value,
  icon,
  className,
  sectionTitle,
  sectionIcon,
  ...props
}: {
  label?: string;
  value?: string;
  icon?: string;
  className?: string;
  sectionTitle?: string;
  sectionIcon?: string;
}) {
  return (
    <View className={cn("px-6", className)} {...props}>
      {sectionTitle && (
        <View className="flex flex-row items-center gap-2 mb-2 mt-6">
          {sectionIcon && (
            <MaterialCommunityIcons
              name={sectionIcon as any}
              size={28}
              color="#23396c"
            />
          )}
          <Text className="text-primary font-semibold text-lg m-0">
            {sectionTitle}
          </Text>
        </View>
      )}
      {label && (
        <View className="border-t border-b border-border px-0">
          <View className="flex-row items-center py-3">
            {icon && (
              <MaterialCommunityIcons
                name={icon as any}
                size={20}
                color="#23396c"
              />
            )}
            <View className="flex-1">
              <Text className="text-xs text-muted-foreground mb-0.5">
                {label}
              </Text>
              <Text className="text-base text-foreground whitespace-pre-line">
                {value}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
