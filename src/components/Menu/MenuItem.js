import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MenuItem = ({ name, icon, route }) => {
  return (
    <TouchableOpacity style={styles.statsCardRow} onPress={route}>
      <View style={{ flex: 0.1 }}>
        <MaterialIcons name={icon} size={21} color={COLORS.darkGrey} />
      </View>
      <View style={{ flex: 0.8 }}>
        <Text style={styles.earningsValue}>{name}</Text>
      </View>
      <View style={{ flex: 0.1 }}>
        <Ionicons name="chevron-forward" size={18} color={COLORS.darkGrey} />
      </View>
    </TouchableOpacity>
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
