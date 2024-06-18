import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import CircleBall from "./CircleBall";

const TicketLine = ({ label, numbers }) => (
  <View style={styles.container}>
    <Text style={styles.ticketLabel}>{label}</Text>
    <View style={styles.numbersContainer}>
      {numbers.map((num, index) => (
        <CircleBall key={index} number={num} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ticketLabel: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: "500",
  },
  numbersContainer: {
    marginTop: 5,
    flexDirection: "row",
    gap: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TicketLine;
