import React from "react";
import { View, Text } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";

const RegisterCompanyNameForm = ({ value, onChangeText, errorInput }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Sign up with Win By Syndicate
      </Text>

      <OutlinedTextInput
        label={"Company Email"}
        value={value}
        onChangeText={onChangeText}
        errorInput={errorInput}
      />
    </View>
  );
};

export default RegisterCompanyNameForm;
