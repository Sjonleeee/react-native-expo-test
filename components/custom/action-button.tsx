import { cn } from "@/lib/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text } from "react-native";

export function ActionButton({
  icon,
  children,
  onPress,
  className,
  ...props
}: {
  icon?: string;
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "flex flex-row items-center justify-center rounded-full py-4 min-h-[48px] bg-primary",
        className
      )}
      {...props}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon as any}
          size={20}
          color="#fff"
          style={{ marginRight: 8, alignSelf: "center" }}
        />
      )}
      <Text className="font-semibold text-background text-center">{children}</Text>
    </Pressable>
  );
}
