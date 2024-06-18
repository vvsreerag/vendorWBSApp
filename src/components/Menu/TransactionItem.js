import React from "react";
import { Text, View } from "react-native";
import { COLORS } from "../../constants";

const TransactionItem = ({ tranNumber, date, amount }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View>
        <Text>{tranNumber || "#O9K7GG2SDWHX"}</Text>
        <Text style={{ fontSize: 11, color: COLORS.darkGrey }}>
          {date || "16 Jan 2024, 13:42:56 IST"}
        </Text>
      </View>
      <Text style={{ fontSize: 14, color: COLORS.black, fontWeight: "700" }}>
        {amount || "-£10,00,240.00"}
      </Text>
    </View>
  );
};

export default TransactionItem;
