import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MenuItem = ({ name, icon, route, dropDescription }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
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
        <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <Text>{dropDescription || "Description"}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {},

  statsCard: {
    width: "100%",
  },
  statsCardRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  earningsValue: {
    fontSize: 15,
    color: COLORS.darkGrey,
    fontWeight: "600",
  },
});
export default MenuItem;
