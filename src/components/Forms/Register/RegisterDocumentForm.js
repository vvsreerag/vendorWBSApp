import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const RegisterDocumentForm = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Upload Legal Documents
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: COLORS.black,
          marginRight: 30,
          marginTop: 10,
        }}
      >
        Business Registration Certificate
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 5,
          marginBottom: 5,
          width: 100,
          borderColor: COLORS.brand,
          borderRadius: 50,
          borderWidth: 1,
          padding: 6,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}
        >
          <Ionicons name="add" size={18} color={COLORS.brand} />
          <Text style={{ color: COLORS.brand }}>Add File</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: COLORS.black,
          marginRight: 30,
          marginTop: 10,
        }}
      >
        Merchant ID Details - Trading Certificate
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 5,
          marginBottom: 5,
          width: 100,
          borderColor: COLORS.brand,
          borderRadius: 50,
          borderWidth: 1,
          padding: 6,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 5 }}
        >
          <Ionicons name="add" size={18} color={COLORS.brand} />
          <Text style={{ color: COLORS.brand }}>Add File</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterDocumentForm;
