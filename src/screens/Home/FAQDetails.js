import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { MaterialIcons } from "@expo/vector-icons";

const FAQDetails = ({}) => {
  const SupportFilterItem = ({ icon, title, backgroundColor }) => (
    <TouchableOpacity style={[styles.supportItem, { backgroundColor }]}>
      <MaterialIcons name={icon} size={20} color={COLORS.black} />
      <Text style={styles.supportItemText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.supportItemsContainer}>
        <SupportFilterItem
          icon="insert-emoticon"
          title="Account"
          backgroundColor="#FEF9C3"
        />
        <SupportFilterItem
          icon="payments"
          title="Payments"
          backgroundColor="#C8E6C9"
        />
        <SupportFilterItem
          icon="receipt-long"
          title="Requests"
          backgroundColor="#E1D9FF"
        />
        <SupportFilterItem
          icon="star-border"
          title="Others"
          backgroundColor="#E8CCD6"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  supportItemsContainer: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  supportItem: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  supportItemText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
    marginLeft: 10,
  },
});

export default FAQDetails;
