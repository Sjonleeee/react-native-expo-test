// Placeholder for Card component from React Native Reusables
// Replace with CLI-generated code if available
import { cn } from "@/lib/utils";
import { View } from "react-native";
export function RequestCard({ children, className, ...props }: any) {
  return (
    <View
      className={cn(
        "aspect-square bg-primary rounded-xl items-center justify-center p-4 text-background font-medium text-center ",
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}
