import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const MenuItemGroup = ({ children, style }) => {
  return <View style={{ ...styles.statsCard, ...style }}>{children}</View>;
};
const styles = StyleSheet.create({
  statsCard: {
    width: "100%",
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  statsCardRow: { padding: 10, flexDirection: "row" },
  earningsValue: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: "600",
  },
});
export default MenuItemGroup;
