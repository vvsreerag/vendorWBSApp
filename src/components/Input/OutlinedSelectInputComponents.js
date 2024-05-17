import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const OutlinedSelectInput = ({ label, onSelect, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    onSelect(option);
    setIsExpanded(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.label}>{label}</Text>

        <Text>{selectedOption || "Select an option"}</Text>
        <Ionicons
          name={isExpanded ? "chevron-up" : "chevron-down"}
          size={20}
          color={COLORS.black}
        />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.optionsContainer}>
          {children.map((child) => (
            <TouchableOpacity
              key={child.props.value}
              style={styles.option}
              onPress={() => handleSelect(child.props)}
            >
              <Text>{child.props.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    paddingHorizontal: 5,
    backgroundColor: COLORS.white, // Background color when focused
    position: "absolute",
    left: 12,
    top: -10,
    fontSize: 11,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 2,
    padding: 13,
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 5,
  },
  option: {
    padding: 10,
  },
});

export default OutlinedSelectInput;
