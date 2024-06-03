import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";

const SupportAndFAQ = () => {
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.contentContainer}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.black }}>
          Support & FAQ
        </Text>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
          <View
            style={{
              backgroundColor: "#FEF9C3",
              padding: 10,
              borderRadius: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="insert-emoticon"
              size={20}
              color={COLORS.black}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: COLORS.black,
                marginLeft: 10,
              }}
            >
              Account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#C8E6C9",
              padding: 10,
              borderRadius: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="payments" size={20} color={COLORS.black} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: COLORS.black,
                marginLeft: 10,
              }}
            >
              Payments
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <View
            style={{
              backgroundColor: "#FEF9C3",
              paddingVertical: 15,
              borderRadius: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="insert-emoticon"
              size={20}
              color={COLORS.black}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: COLORS.black,
                marginLeft: 10,
              }}
            >
              Account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#C8E6C9",
              padding: 10,
              borderRadius: 10,
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <MaterialIcons name="payments" size={20} color={COLORS.black} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: COLORS.black,
                marginLeft: 10,
              }}
            >
              Payments
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default SupportAndFAQ;
