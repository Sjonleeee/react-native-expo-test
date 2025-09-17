// Placeholder for Card component from React Native Reusables
// Replace with CLI-generated code if available
import { cn } from "@/lib/utils";
import { View } from "react-native";
export function RequestCard({ children, className, ...props }: any) {
  return (
    <View
      className={cn(
        "aspect-[1.3] bg-primary rounded-xl items-center justify-center p-6 text-background text-xs text-center ", // Slightly larger aspect ratio and padding
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}
