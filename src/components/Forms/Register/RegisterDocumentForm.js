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
          marginTop: 30,
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

      <View style={{ borderColor: COLORS.grey, borderWidth: 1, padding: 10 }}>
        <View
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 0.06 }}>
            <Ionicons name="document-text" size={24} color="black" />
          </View>
          <View
            style={{
              flex: 0.82,
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}> BusinessDocuments.pdf</Text>
            <Text style={{ fontSize: 12, color: COLORS.grey }}> 200 KB</Text>
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              borderLeftColor: COLORS.grey,
              borderLeftWidth: 1,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ borderColor: COLORS.red, borderWidth: 1, padding: 10 }}>
        <View
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 0.06 }}>
            <Ionicons
              name="alert-circle-outline"
              size={20}
              color={COLORS.red}
            />
          </View>
          <View
            style={{
              flex: 0.82,
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.red }}>
              Upload Failed, Try Again
            </Text>
            <Text style={{ fontSize: 12, color: COLORS.grey }}>
              Please make sure the file is in PDF format
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.brand }}>Try Again</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              borderLeftColor: COLORS.grey,
              borderLeftWidth: 1,
            }}
          >
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterDocumentForm;
