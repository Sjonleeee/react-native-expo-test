import { Input } from "@/components/ui/input";
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
    <View className={`mb-4 ${className}`.trim()}>
      <Text className="text-primary font-bold text-base mb-2">{title}</Text>
      <View className="flex-row items-center py-3 rounded-full border border-primary px-4">
        <MaterialCommunityIcons name={icon as any} size={22} color="#23396C" />
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
