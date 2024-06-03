import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MenuItem = ({ name, icon, route, dropDescription }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);

  const renderDropDescription = () => {
    if (!dropDescription) return null;

    // Split the description by newline characters to create separate lines
    const lines = dropDescription.split("\n");
    return lines.map((line, index) => (
      <Text key={index} style={styles.dropDescriptionText}>
        {line.trim()}
      </Text>
    ));
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.statsCardRow}
        onPress={route ? route : () => setIsDropOpen(!isDropOpen)}
      >
        {icon && (
          <View style={{ flex: 0.1 }}>
            <MaterialIcons name={icon} size={21} color={COLORS.darkGrey} />
          </View>
        )}
        <View style={[icon ? { flex: 0.8 } : { flex: 0.9 }]}>
          <Text style={styles.earningsValue}>{name}</Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Ionicons
            name={
              !dropDescription
                ? "chevron-forward"
                : isDropOpen
                ? "chevron-up-outline"
                : "chevron-down-outline"
            }
            size={18}
            color={COLORS.darkGrey}
          />
        </View>
      </TouchableOpacity>
      {dropDescription && isDropOpen && (
        <View style={styles.dropDescriptionContainer}>
          {renderDropDescription()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    overflow: "hidden",
  },
  statsCardRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  earningsValue: {
    fontSize: 15,
    color: COLORS.darkGrey,
    fontWeight: "600",
  },
  dropDescriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightGrey,
  },
  dropDescriptionText: {
    fontSize: 14,
    color: COLORS.darkGrey,
    marginBottom: 5,
  },
});

export default MenuItem;
