import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS, ROUTES } from "../../../constants";
import { Ionicons } from "@expo/vector-icons";

const RegisterContactInfoForm = ({ value, onChangeText, errorInput }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>
        Primary Contact Information
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: COLORS.grey,
          marginRight: 30,
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        This person will be the main contact for the company and will receive
        all important updates.
      </Text>

      <ScrollView>
        <OutlinedTextInput
          label={"Employee Name"}
          value={value.contactEmployeeName}
          onChangeText={(value) => onChangeText("contactEmployeeName")(value)}
          errorInput={errorInput.contactEmployeeName}
        />
        {errorInput?.contactEmployeeName && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={COLORS.red}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 12, color: COLORS.red }}>
              {errorInput.contactEmployeeName}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Designation"}
          value={value.contactDesignation}
          onChangeText={(value) => onChangeText("contactDesignation")(value)}
          errorInput={errorInput.contactDesignation}
        />
        {errorInput?.contactDesignation && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={COLORS.red}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 12, color: COLORS.red }}>
              {errorInput.contactDesignation}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Email Id"}
          value={value.contactEmail}
          onChangeText={(value) => onChangeText("contactEmail")(value)}
          errorInput={errorInput.contactEmail}
        />
        {errorInput?.contactEmail && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={COLORS.red}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 12, color: COLORS.red }}>
              {errorInput.contactEmail}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Mobile number"}
          value={value.contactPhone}
          phone
          numericOnly
          maxLength={10}
          onChangeText={(value) => onChangeText("contactPhone")(value)}
          errorInput={errorInput.contactPhone}
        />
        {errorInput?.contactPhone && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={COLORS.red}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 12, color: COLORS.red }}>
              {errorInput.contactPhone}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RegisterContactInfoForm;
