import { cn } from "@/lib/utils";
import { View } from "react-native";

export function RequestCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <View
      className={cn(
        "aspect-square bg-primary rounded-xl items-center justify-center p-4",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}
