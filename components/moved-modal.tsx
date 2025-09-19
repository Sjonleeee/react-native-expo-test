import { ActionButton } from "@/components/custom/action-button";
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

interface MovedModalProps {
  visible: boolean;
  onClose: () => void;
  className?: string;
  [key: string]: any;
}

export function MovedModal({
  visible,
  onClose,
  className,
  ...props
}: MovedModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent} {...props}>
          <View style={styles.header}>
            <Text style={styles.title}>Vous avez déménagé?</Text>
          </View>
          <Text style={styles.bodyText}>
            Nous en serons informés automatiquement via le Registre National.
          </Text>
          <Text style={styles.bodyText}>
            Si nécessaire, vous pouvez contacter votre gestionnaire de dossier.
          </Text>
          <ActionButton onPress={onClose} style={styles.actionButton}>
            Ok
          </ActionButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: "center",
    minHeight: 260,
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a2a5a",
    flex: 1,
    textAlign: "center",
  },
  closeButton: {
    padding: 8,
    marginLeft: 8,
  },
  closeText: {
    fontSize: 24,
    color: "#1a2a5a",
  },
  bodyText: {
    fontSize: 16,
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
  },
  actionButton: {
    marginTop: 16,
    width: "100%",
    borderRadius: 24,
  },
});
