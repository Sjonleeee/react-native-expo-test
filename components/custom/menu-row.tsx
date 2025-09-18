import { cn } from "@/lib/utils";
import { Text, TouchableOpacity } from "react-native";

export function MenuRow({
  label,
  onPress,
  className,
  ...props
}: {
  label: string;
  onPress?: () => void;
  className?: string;
}) {
  return (
    <TouchableOpacity
      className={cn(
        "flex-row items-center bg-background border-b border-border py-3 ",
        className
      )}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
      {...props}
    >
      <Text className="text-base text-foreground font-normal">{label}</Text>
    </TouchableOpacity>
  );
}
