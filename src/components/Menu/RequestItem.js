import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants";

const { width } = Dimensions.get("window");

const RequestItem = ({ fullWidth, disableAction }) => {
  return (
    <View
      style={[
        styles.container,
        fullWidth ? { flex: 1 } : { width: width * 0.8 },
      ]}
    >
      <View style={styles.row}>
        <MaterialCommunityIcons
          name="progress-clock"
          size={20}
          color={COLORS.grey}
        />
        <View style={{ alignItems: "flex-start" }}>
          <Text style={styles.headerText}>Pending by 24 APR 2024</Text>
          <View
            style={[styles.button, { backgroundColor: COLORS.errorBackground }]}
          >
            <Text style={{ fontSize: 14, color: COLORS.errorText }}>
              2D : 01H : 32M
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <FontAwesome5 name="money-bill-alt" size={20} color={COLORS.grey} />
        <View style={{ alignItems: "flex-start" }}>
          <Text style={styles.label}>EXPECTED INCOME</Text>
          <Text style={styles.infoText}>£180.00</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <View style={[styles.row, { marginBottom: 10, borderBottomWidth: 0 }]}>
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={24}
            color={COLORS.grey}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.label}>REQUEST NUMBER</Text>
            <Text style={styles.infoText}>SYN1234324</Text>
          </View>
        </View>

        <View style={[styles.row, { marginBottom: 10, borderBottomWidth: 0 }]}>
          <Ionicons name="receipt-outline" size={20} color={COLORS.grey} />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.label}>NUMBER OF TICKETS</Text>
            <Text style={styles.infoText}>10 (100 Lines)</Text>
          </View>
        </View>
      </View>

      {!disableAction && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.rejectButton]}>
            <Ionicons name="close" size={20} color={COLORS.brand} />
            <Text style={styles.rejectButtonText}>Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.mainButton]}>
            <Ionicons name="checkmark-sharp" size={20} color={COLORS.white} />
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: COLORS.border,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 14,
    color: COLORS.black,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  label: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  rejectButtonText: {
    color: COLORS.brand,
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
  },
});

export default RequestItem;
