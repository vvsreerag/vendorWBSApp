import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { Foundation } from "@expo/vector-icons";

const DiscardAlert = ({ visible, onClose, onDiscard }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color={COLORS.grey} />
          </TouchableOpacity>
          <Foundation
            name="alert"
            size={50}
            color={COLORS.yellow}
            style={{
              alignSelf: "flex-start",
              paddingLeft: 10,
              marginBottom: 10,
            }}
          />
          <Text style={styles.message}>
            Are you sure you want to discard all changes?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={onDiscard}
              style={[styles.button, styles.discardButton]}
            >
              <Text style={styles.discardButtonText}>Discard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.button, styles.cancelButton]}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "70%",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    minWidth: 100,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  discardButtonText: {
    color: COLORS.red,
    fontWeight: "bold",
  },

  discardButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  cancelButton: {
    backgroundColor: COLORS.brand,
  },
});

export default DiscardAlert;
