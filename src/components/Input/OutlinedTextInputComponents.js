import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const OutlinedTextInput = ({
  label,
  value,
  onChangeText,
  phone,
  disabled,
  maxLength,
  numericOnly,
  password,
  errorInput,
  buttonType,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={[styles.container, errorInput ? styles.errorInput : null]}>
      <Text
        style={[
          styles.label,
          (isFocused || value) && !disabled ? styles.labelFocused : null,
          disabled ? styles.labelDisabled : null,
          errorInput ? styles.errorLabel : null,
        ]}
      >
        {label}
      </Text>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {phone && (
          <View
            style={{
              flex: 1.2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRightColor: COLORS.lightGrey,
                borderRightWidth: 2,
              }}
            >
              <Text style={{ marginRight: 8 }}>+44</Text>
            </View>
          </View>
        )}
        <View style={phone ? { flex: 8 } : { flex: 9.2 }}>
          {buttonType ? (
            <View style={{ ...styles.input, height: 35 }} />
          ) : (
            <TextInput
              style={[styles.input, disabled ? styles.inputDisabled : null]}
              value={value}
              onChangeText={onChangeText}
              onFocus={handleFocus}
              onBlur={handleBlur}
              editable={!disabled} // Disable input if 'disabled' is true
              maxLength={maxLength || 200}
              keyboardType={numericOnly ? "numeric" : "default"}
              secureTextEntry={!showPassword && password}
            />
          )}
        </View>

        <View
          style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}
        >
          {password ? (
            <TouchableOpacity onPress={toggleShowPassword}>
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          ) : (
            value && (
              <TouchableOpacity onPress={() => onChangeText("")}>
                <Ionicons name="close-circle-outline" size={20} color="grey" />
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#000000", // Border color when focused

    borderRadius: 2,
    padding: 5,
    marginBottom: 5,
  },
  errorInput: {
    borderColor: "#B3261E",
    borderWidth: 1,
  },
  label: {
    paddingHorizontal: 5,
    backgroundColor: "white", // Background color when focused
    position: "absolute",
    left: 12,
    top: -10,
    fontSize: 11,
  },
  labelFocused: {
    // Styles when the input is focused
    top: -10,
  },
  labelDisabled: {
    color: "#000000", // Label color when disabled
  },
  errorLabel: {
    color: "#B3261E",
  },
  input: {
    fontSize: 14,
    padding: 4,
  },
  inputDisabled: {
    color: "#2E2E2E", // Input text color when disabled
  },
});

export default OutlinedTextInput;
