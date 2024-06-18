import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";
import UploadComponents from "../../Input/UploadComponents";

const RegisterDocumentForm = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Upload Legal Documents
      </Text>
      <UploadComponents
        title={"Business Registration Certificate"}
        buttonTitle={"Add File"}
        multiUpload
        style={{ marginTop: 10 }}
      />
      <UploadComponents
        title={"Merchant ID Details - Trading Certificate"}
        buttonTitle={"Add File"}
        style={{ marginTop: 20 }}
      />

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
