import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import TicketScanner from "./TicketScanner";

const InfoRow = ({ icon, label, value, additionalValue, style }) => (
  <View style={[styles.infoRow, style]}>
    {icon}
    <View>
      <Text style={styles.infoLabel}>{label}</Text>
      <View style={styles.infoValues}>
        <Text style={[styles.infoValue, additionalValue && styles.infoBold]}>
          {value}
        </Text>
        {additionalValue && (
          <Text style={styles.infoValue}>{additionalValue}</Text>
        )}
      </View>
    </View>
  </View>
);

const RequestCompletedTicketHeader = ({ drawNumber, date }) => {
  const [scannedImages, setScannedImages] = useState(null);
  return (
    <View style={styles.infoContainer}>
      <View style={styles.doubleInfoRow}>
        <InfoRow
          icon={
            <MaterialIcons name="payments" size={20} color={COLORS.black} />
          }
          label="DRAW NUMBER"
          value={drawNumber || "111.00"}
          style={{ flex: 1 }}
        />
        <InfoRow
          icon={
            <MaterialIcons
              name="calendar-month"
              size={20}
              color={COLORS.black}
            />
          }
          label="DRAW DATE"
          value={date || "22 APR 2023, 13:20"}
          style={{ flex: 1 }}
        />
      </View>

      <View style={styles.fileContainer}>
        <View style={styles.fileDetails}>
          <Ionicons name="document-text" size={24} color="black" />
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>{"ScannedFile.pdf"}</Text>
            <Text style={styles.fileSize}>{"200 KB"}</Text>
          </View>
        </View>
      </View>
      <TicketScanner setScannedDoc={setScannedImages} />
      <Text>{scannedImages}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  doubleInfoRow: {
    flexDirection: "row",
  },
  infoLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
  },
  infoValues: {
    flexDirection: "row",
    gap: 10,
  },
  infoValue: {
    fontSize: 15,
    color: COLORS.black,
  },
  infoBold: {
    color: COLORS.green,
    fontWeight: "700",
  },
  scanTickets: {
    paddingVertical: 10,
  },
  scanTicketsText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: "500",
  },
  fileContainer: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  fileDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  fileInfo: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  fileName: {
    fontSize: 12,
  },
  fileSize: {
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default RequestCompletedTicketHeader;
