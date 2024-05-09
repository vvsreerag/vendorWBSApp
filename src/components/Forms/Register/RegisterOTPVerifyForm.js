import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMAGE } from "../../../constants/Image";
import { COLORS } from "../../../constants";
import { OtpInput } from "react-native-otp-entry";

const RegisterOTPVerifyForm = ({ phoneNumber, onChangeText, errorInput }) => {
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Image source={IMAGE.otpLock} style={{ width: 100, height: 100 }} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          Verify your Phone Number
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.grey,
            marginRight: 30,
            marginTop: 10,
          }}
        >
          Enter OTP send to +44 {phoneNumber} to verify your mobile number.
        </Text>
        <View>
          <OtpInput
            numberOfDigits={6}
            focusStickBlinkingDuration={500}
            focusColor={COLORS.grey}
            onTextChange={(text) => onChangeText(text)}
            theme={{
              containerStyle: styles.container,
              inputsContainerStyle: styles.inputsContainer,
              pinCodeContainerStyle: errorInput
                ? styles.pinCodeContainerError
                : styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
  },
  pinCodeContainer: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    height: 50,
    width: 45,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  pinCodeContainerError: {
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 5,
    height: 47,
    width: 45,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  pinCodeText: {
    fontSize: 18,
  },

  activePinCodeContainer: {
    borderColor: COLORS.black,
  },
});

export default RegisterOTPVerifyForm;
