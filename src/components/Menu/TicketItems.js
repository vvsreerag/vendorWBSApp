import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const TicketItems = ({ number, lines, file, completed }) => {
  const [markAsDone, setMarkAsDone] = useState(true);
  return (
    <View style={styles.ticketContainer}>
      <View style={styles.ticketRow}>
        <TouchableOpacity onPress={() => setMarkAsDone(!markAsDone)}>
          {markAsDone && completed ? (
            <MaterialCommunityIcons
              name="check-circle-outline"
              size={24}
              color={COLORS.green}
            />
          ) : (
            <MaterialCommunityIcons
              name="checkbox-blank-circle-outline"
              size={24}
              color={COLORS.border}
            />
          )}
        </TouchableOpacity>

        <View>
          <Text>Ticket No : {number}</Text>
          <Text>Number of Lines : {lines}</Text>
        </View>
        <Ionicons
          name="chevron-forward-sharp"
          size={24}
          color={COLORS.black}
          style={styles.ticketIcon}
        />
      </View>
      {file && (
        <View style={styles.ticketFile}>
          <Text style={styles.fileText}>{file}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  ticketContainer: {
    borderTopColor: COLORS.border,
    borderTopWidth: 1,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  },
  ticketRow: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  ticketIcon: {
    marginLeft: "auto",
  },
  ticketFile: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  fileText: {
    color: COLORS.brand,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default TicketItems;
