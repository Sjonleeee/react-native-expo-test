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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* Header - same as other modals */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingVertical: 16, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#E5E7EB", zIndex: 10 }}>
          <TouchableOpacity
            onPress={onClose}
            style={{ alignItems: "center", justifyContent: "center" }}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Back"
          >
            <MaterialCommunityIcons name="arrow-left" size={28} color="#23396C" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#23396C", flex: 1, textAlign: "center" }}>
            A propos
          </Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={onOpenProfile}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Open profile"
            >
              <MaterialCommunityIcons name="account-circle-outline" size={28} color="#23396C" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Content */}
        <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 32 }}>
          {[1,2,3].map((i) => (
            <View key={i} style={{ marginBottom: 32 }}>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "#193B7D", marginBottom: 12 }}>
                Accès et sécurité
              </Text>
              <Text style={{ fontSize: 16, color: "#222", lineHeight: 24 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat maximus diam, nec sollicitudin turpis. Duis tincidunt mattis nulla, eu lacinia ligula. Vestibulum sit amet auctor ex. In hac habitasse platea dictumst. Aenean dignissim, nibh non pharetra pretium, augue erat pulvinar velit
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
};
