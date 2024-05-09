import React from "react";
import { View, Text } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";

const RegisterPasswordForm = ({ value, onChangeText, errorInput }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Enter Password
      </Text>

      <OutlinedTextInput
        label={"Password"}
        value={value}
        onChangeText={onChangeText}
        errorInput={errorInput}
        maxLength={100}
        password
      />
    </View>
  );
};

export default RegisterPasswordForm;
