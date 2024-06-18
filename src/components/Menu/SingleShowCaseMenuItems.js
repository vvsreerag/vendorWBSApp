import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const SingleShowCaseMenuItems = ({ label, icon }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <View>
      <View style={styles.statsCard}>
        <View style={styles.statsCardRow}>
          <View style={{ flex: 0.1 }}>{icon}</View>
          <View style={{ flex: 0.5 }}>
            <Text style={styles.earningsValue}>{label || "Item"}</Text>
          </View>
          <View style={{ flex: 0.35, alignItems: "flex-end" }}>
            <Text style={styles.earningsValue}>+£10,00,240.00</Text>
          </View>
          <View style={{ flex: 0.05 }}>
            <TouchableOpacity onPress={() => setShowDropDown(!showDropDown)}>
              <Feather name="chevron-down" size={20} color={COLORS.darkGrey} />
            </TouchableOpacity>
          </View>
        </View>
        {showDropDown && (
          <View style={styles.statsCardRow}>
            <Text>Winning Tickets</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsCard: {
    width: "100%",
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  statsCardRow: { padding: 10, flexDirection: "row" },
  earningsValue: {
    fontSize: 15,
    color: COLORS.darkGrey,
    fontWeight: "600",
  },
});

export default SingleShowCaseMenuItems;
