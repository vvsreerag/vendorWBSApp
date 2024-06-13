import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";

const WBCheckBox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkbox}>
      <FontAwesome
        name={isChecked ? "check-square" : "square"}
        size={22}
        color={isChecked ? COLORS.brand : COLORS.border}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WBCheckBox;
