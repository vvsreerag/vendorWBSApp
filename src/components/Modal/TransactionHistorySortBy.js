import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import WBModal from "./WBModal";
import { COLORS } from "../../constants";

const sortOptions = [
  { label: "Transaction Date: New to Old", value: "newToOld" },
  { label: "Transaction Date: Old to New", value: "oldToNew" },
  { label: "Amount: High to Low", value: "highToLow" },
  { label: "Amount: Low to High", value: "lowToHigh" },
];

const TransactionHistorySortBy = ({ isOpenModal, closeModal }) => {
  const [checked, setChecked] = useState(sortOptions[0].value);
  const setCheckedSortBy = (value) => {
    setChecked(value);
    closeModal();
  };

  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={33}>
      <Text style={styles.title}>Sort By</Text>
      {sortOptions.map((option) => (
        <SortOption
          key={option.value}
          label={option.label}
          value={option.value}
          checked={checked}
          setChecked={(value) => setCheckedSortBy(value)}
        />
      ))}
    </WBModal>
  );
};

const SortOption = ({ label, value, checked, setChecked }) => {
  const isSelected = checked === value;
  return (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        isSelected && styles.selectedOptionContainer,
      ]}
      onPress={() => setChecked(value)}
    >
      <Text
        style={[styles.optionText, isSelected && styles.selectedOptionText]}
      >
        {label}
      </Text>
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
  optionText: {
    fontSize: 15,
  },
  selectedOptionText: {
    fontWeight: "bold", // Change this to your desired selected text style
  },
});

export default TransactionHistorySortBy;
