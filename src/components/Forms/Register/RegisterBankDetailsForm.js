import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS } from "../../../constants";
import OutlinedSelectInput from "../../Input/OutlinedSelectInputComponents";

const RegisterBankDetailsForm = ({ value, onChangeText, errorInput }) => {
  const handleSelect = (value) => {
    console.log(value);
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Bank Details
      </Text>
      <ScrollView>
        <OutlinedSelectInput label="Bank Name" onSelect={handleSelect}>
          <OutlinedSelectInput.Option label="Option 1" value="option1" />
          <OutlinedSelectInput.Option label="Option 2" value="option2" />
          <OutlinedSelectInput.Option label="Option 3" value="option3" />
        </OutlinedSelectInput>
        <OutlinedTextInput
          label={"Bank Name"}
          value={value.bankName}
          onChangeText={(value) => onChangeText("bankName")(value)}
          errorInput={errorInput.bankName}
        />
        {errorInput?.bankName && (
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
              {errorInput.bankName}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Payee Name"}
          value={value.bankPayeeName}
          onChangeText={(value) => onChangeText("bankPayeeName")(value)}
          errorInput={errorInput.bankPayeeName}
        />
        {errorInput?.bankPayeeName && (
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
              {errorInput.bankPayeeName}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Account Number"}
          value={value.bankAccountNumber}
          onChangeText={(value) => onChangeText("bankAccountNumber")(value)}
          errorInput={errorInput.bankAccountNumber}
        />
        {errorInput?.bankAccountNumber && (
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
              {errorInput.bankAccountNumber}
            </Text>
          </View>
        )}
        <OutlinedTextInput
          label={"Sort Code"}
          value={value.bankSortCode}
          onChangeText={(value) => onChangeText("bankSortCode")(value)}
          errorInput={errorInput.bankSortCode}
        />
        {errorInput?.bankSortCode && (
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
              {errorInput.bankSortCode}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default RegisterBankDetailsForm;
