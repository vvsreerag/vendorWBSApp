import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import WBModal from "./WBModal";
import { COLORS } from "../../constants";
import { MaterialIcons, FontAwesome6 } from "@expo/vector-icons";

const typeOptions = [
  {
    label: "All",
    value: "all",
    icon: <MaterialIcons name="payments" size={20} color={COLORS.black} />,
  },
  {
    label: "Winnings",
    value: "winning",
    icon: (
      <FontAwesome6 name="hand-holding-dollar" size={20} color={COLORS.black} />
    ),
  },
  {
    label: "Request Fee",
    value: "request-fee",
    icon: <MaterialIcons name="receipt-long" size={20} color={COLORS.black} />,
  },
  {
    label: "Request Failed",
    value: "request-failed",
    icon: <MaterialIcons name="sms-failed" size={20} color={COLORS.black} />,
  },
];

const TransactionHistoryTypeFilter = ({ isOpenModal, closeModal }) => {
  const [checked, setChecked] = useState(typeOptions[0].value);
  const setCheckedSortBy = (value) => {
    setChecked(value);
    closeModal();
  };

  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={33}>
      <Text style={styles.title}>Choose Type</Text>
      {typeOptions.map((option) => (
        <TypeOption
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

const TypeOption = ({ label, icon, value, checked, setChecked }) => {
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
        {icon}
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

export default TransactionHistoryTypeFilter;
