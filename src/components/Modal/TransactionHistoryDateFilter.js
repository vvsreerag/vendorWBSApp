import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import WBModal from "./WBModal";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const dateOptions = [
  { label: "Last 6 Month", value: "last-6-month", icon: "calendar-month" },
  { label: "Last 3 Month", value: "last-3-month", icon: "calendar-month" },
  { label: "Last Month", value: "last-month", icon: "calendar-month" },
];

const TransactionHistoryDateFilter = ({ isOpenModal, closeModal }) => {
  const [checked, setChecked] = useState(dateOptions[0].value);
  const setCheckedSortBy = (value) => {
    setChecked(value);
    closeModal();
  };

  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={28}>
      <Text style={styles.title}>Choose Date Range</Text>
      {dateOptions.map((option) => (
        <DateOption
          key={option.value}
          label={option.label}
          value={option.value}
          icon={option.icon}
          checked={checked}
          setChecked={(value) => setCheckedSortBy(value)}
        />
      ))}
    </WBModal>
  );
};

const DateOption = ({ label, icon, value, checked, setChecked }) => {
  const isSelected = checked === value;
  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        isSelected && styles.selectedOptionContainer,
      ]}
      onPress={() => setChecked(value)}
    >
      <View style={styles.optionLabel}>
        <MaterialCommunityIcons name={icon} size={20} color={COLORS.black} />
        <Text
          style={[styles.optionText, isSelected && styles.selectedOptionText]}
        >
          {label}
        </Text>
      </View>

      <RadioButton
        value={value}
        status={isSelected ? "checked" : "unchecked"}
        onPress={() => setChecked(value)}
        color={COLORS.brand}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    marginBottom: 10,
    fontSize: 16,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  selectedOptionContainer: {
    backgroundColor: COLORS.lightGrey, // Change this to your desired selected color
  },
  optionLabel: {
    flexDirection: "row",
  },
  optionText: {
    fontSize: 15,
    marginLeft: 5,
  },
  selectedOptionText: {
    fontWeight: "bold", // Change this to your desired selected text style
  },
});

export default TransactionHistoryDateFilter;
