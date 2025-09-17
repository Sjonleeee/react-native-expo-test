import { Text, View } from "react-native";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View className="mb-8">
      <Text className="text-xl font-bold text-blue-900 mb-3">{title}</Text>
      <Text className="text-base text-gray-800 leading-6">{children}</Text>
    </View>
  );
}
