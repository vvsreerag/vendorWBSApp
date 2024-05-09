import React from "react";
import { View, Text } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";

const RegisterCompanyDetailsForm = ({ value, onChangeText, errorInput }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Enter Company Details
      </Text>

      <OutlinedTextInput
        label={"Company Email"}
        value={value.address}
        onChangeText={onChangeText}
        errorInput={errorInput}
      />
    </View>
  );
};

export default RegisterCompanyDetailsForm;
