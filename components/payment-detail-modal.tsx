import { ActionButton } from "@/components/custom/action-button";
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";

interface PaymentDetailModalProps {
  visible: boolean;
  onClose: () => void;
  payment: {
    date: string;
    month: string;
    du: string;
    retenue: string;
    recu: string;
    description?: string;
  };
}

export function PaymentDetailModal({
  visible,
  onClose,
  payment,
}: PaymentDetailModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Période {payment.date}/{payment.month}
            </Text>
          </View>
          <Text style={styles.bodyText}>
            {payment.description || "Allocations familiales Test Child"}
          </Text>
          <View style={styles.detailBlock}>
            <View style={styles.detailRowMuted}>
              <Text style={styles.detailLabel}>Sous-total</Text>
              <Text style={styles.detailValue}>{payment.du} EUR</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>10% de retenue</Text>
              <Text style={styles.detailValue}>{payment.retenue} EUR</Text>
            </View>
            <View style={styles.detailRowMuted}>
              <Text style={[styles.detailLabel, styles.detailLabelBold]}>
                Total
              </Text>
              <Text style={[styles.detailValue, styles.detailLabelBold]}>
                {payment.recu} EUR
              </Text>
            </View>
          </View>
          <ActionButton onPress={onClose} style={styles.actionButton}>
            Fermer
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
  bodyText: {
    fontSize: 16,
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
  },
  detailBlock: {
    width: "100%",
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  detailRowMuted: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    backgroundColor: "#f5f5f5",
  },
  detailLabel: {
    fontSize: 16,
    color: "#222",
  },
  detailLabelBold: {
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
  },
  actionButton: {
    marginTop: 16,
    width: "100%",
    borderRadius: 24,
  },
});
