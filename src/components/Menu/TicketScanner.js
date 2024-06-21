import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";
import { COLORS } from "../../constants";
const TicketScanner = ({ buttonLabel, setScannedDoc }) => {
  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
      maxNumDocuments: 1,
    });

    if (scannedImages.length > 0) {
      setScannedDoc(scannedImages[0]);
    }
  };

  return (
    <TouchableOpacity style={styles.mainButton} onPress={() => scanDocument()}>
      <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.brand }}>
        {buttonLabel || "Scan Ticket"}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    marginTop: 20,
  },
});

export default TicketScanner;
