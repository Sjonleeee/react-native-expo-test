import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function FormFieldWithIcon({
  title,
  icon,
  placeholder,
  className = "",
  ...props
}: {
  title: string;
  icon: string;
  placeholder: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <View className={cn("mb-4", className)}>
      <Text className="text-primary font-bold text-base mb-2">{title}</Text>
      <View
        className={cn(
          "flex-row gap-2 items-center bg-background rounded-3xl p-3 border border-primary",
          className
        )}
        style={{ borderWidth: 0.5 }}
      >
        <MaterialCommunityIcons
          className="text-foreground"
          name={icon as any}
          size={20}
        />
        <Input
          className="flex-1 ml-2 text-base"
          placeholder={placeholder}
          placeholderTextColor="#A0AEC0"
          editable={false}
          {...props}
        />
      </View>
    </View>
  );
}
