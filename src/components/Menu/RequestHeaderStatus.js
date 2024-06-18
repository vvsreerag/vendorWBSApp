import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const RequestHeaderStatus = ({ status, date, color }) => {
  return (
    <View style={styles.statusContainer}>
      <Text style={[styles.statusText, color && { color: color }]}>
        {status}
      </Text>
      {date && <Text style={styles.statusDate}>{date}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  statusContainer: {
    backgroundColor: COLORS.border,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: "row",
    gap: 10,
  },
  statusText: {
    color: COLORS.green,
    fontWeight: "700",
    fontSize: 14,
  },
  statusDate: {
    fontSize: 13,
    color: COLORS.darkGrey,
  },
});

export default RequestHeaderStatus;
