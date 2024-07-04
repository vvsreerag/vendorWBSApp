import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const RequestInfoHeader = ({
  numberOfTickets,
  paymentStatus,
  amount,
  paymentReference,
}) => {
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
  return (
    <View style={styles.infoContainer}>
      <InfoRow
        icon={<Ionicons name="receipt" size={20} color={COLORS.black} />}
        label="NUMBER OF TICKETS"
        value={numberOfTickets || "13 (100 Lines)"}
      />
      <View style={styles.doubleInfoRow}>
        <InfoRow
          icon={
            <MaterialIcons name="payments" size={20} color={COLORS.black} />
          }
          label="PAYMENT STATUS"
          value="PAID"
          additionalValue={amount || "£200.00"}
          style={{ flex: 1 }}
        />
        <InfoRow
          icon={<MaterialIcons name="receipt" size={20} color={COLORS.black} />}
          label="PAYMENT REFERENCE"
          value={paymentReference || "417RCDPC69YB"}
          style={{ flex: 1 }}
        />
      </View>
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
});

export default RequestInfoHeader;
