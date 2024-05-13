import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS, ROUTES } from "../../../constants";

const RegisterContactInfoForm = ({ value, onChangeText, errorInput }) => {
  const [state, setState] = useState({
    employeeName: value.employeeName || "",
    designation: value.designation || "",
    email: value.email || "",
    phone: value.phone || "",
  });

  const onChangeTextHandle = (fieldName) => (value) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
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
          value={state.employeeName}
          onChangeText={(value) => onChangeTextHandle("employeeName")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Designation"}
          value={state.designation}
          onChangeText={(value) => onChangeTextHandle("designation")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Email Id"}
          value={state.designation}
          onChangeText={(value) => onChangeTextHandle("email")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Mobile number"}
          value={state.designation}
          onChangeText={(value) => onChangeTextHandle("phone")(value)}
          errorInput={errorInput}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterContactInfoForm;
