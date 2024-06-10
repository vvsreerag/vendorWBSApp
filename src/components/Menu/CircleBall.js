import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const CircleBall = ({ number }) => (
  <View style={styles.circle}>
    <Text style={styles.numberText}>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: COLORS.black,
    fontWeight: "700",
    fontSize: 14,
  },
});

export default CircleBall;
