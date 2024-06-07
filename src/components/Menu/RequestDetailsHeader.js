import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants";

const RequestDetailsHeader = ({ title, description }) => {
  return (
    <View style={styles.detailsContainer}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>

      <View style={{ marginLeft: "auto" }}>
        <View
          style={[styles.button, { backgroundColor: COLORS.errorBackground }]}
        >
          <Text style={{ fontSize: 14, color: COLORS.errorText }}>
            2D : 01H : 32M
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: COLORS.black,
  },
  itemDescription: {
    fontSize: 14,
    color: COLORS.grey,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RequestDetailsHeader;
