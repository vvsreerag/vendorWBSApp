import React from "react";
import { View, Text } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";

const RegisterCompanyPhoneForm = ({ value, onChangeText, errorInput }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Registered Company Phone Number
      </Text>

      <OutlinedTextInput
        label={"Mobile Number"}
        value={value}
        phone
        numericOnly
        maxLength={10}
        onChangeText={onChangeText}
        errorInput={errorInput}
      />
    </View>
  );
};

export default RegisterCompanyPhoneForm;
