import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import WBModal from "./WBModal";
import { COLORS } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const directionOptions = [
  { label: "All", value: "all", icon: "plus-minus" },
  { label: "Credit", value: "credit", icon: "plus" },
  { label: "Debit", value: "debit", icon: "minus" },
];

const TransactionDirectionFilter = ({
  isOpenModal,
  closeModal,
  getCheckedValue,
  value,
}) => {
  const [checked, setChecked] = useState(directionOptions[0].value);
  const setCheckedSortBy = (value) => {
    setChecked(value);
    getCheckedValue(value);
    closeModal();
  };
  useEffect(() => {
    setChecked(directionOptions[0].value);
  }, [value]);

  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={28}>
      <Text style={styles.title}>Choose Direction</Text>
      {directionOptions.map((option) => (
        <DirectionOption
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

const DirectionOption = ({ label, icon, value, checked, setChecked }) => {
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

export default TransactionDirectionFilter;
