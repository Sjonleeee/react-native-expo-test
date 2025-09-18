import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

export const AProposModal: React.FC<{
  visible: boolean;
  onClose: () => void;
  onOpenProfile?: () => void;
}> = ({ visible, onClose, onOpenProfile }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View className="flex-1 bg-background">
        {/* Header - same as other modals */}
        <View className="flex-row items-center justify-between px-4 py-4 bg-background border-b border-border z-10">
          <TouchableOpacity
            onPress={onClose}
            className="items-center justify-center"
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={28}
              color="var(--primary)"
            />
          </TouchableOpacity>
          <Text className="text-lg font-semibold text-primary flex-1 text-center">
            A propos
          </Text>
          <View className="items-center justify-center">
            <TouchableOpacity
              onPress={onOpenProfile}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Open profile"
            >
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={28}
                color="var(--primary)"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Content */}
        <ScrollView className="flex-1 px-6 pt-8">
          {[1, 2, 3].map((i) => (
            <View key={i} className="mb-8">
              <h1>Accès et sécurité</h1>
              <p className="text-base text-foreground leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse volutpat maximus diam, nec sollicitudin turpis. Duis
                tincidunt mattis nulla, eu lacinia ligula. Vestibulum sit amet
                auctor ex. In hac habitasse platea dictumst. Aenean dignissim,
                nibh non pharetra pretium, augue erat pulvinar velit
              </p>
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};
