import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AuthSteppedHeaderComponents from "../../components/AuthSteppedHeaderComponents";
import { COLORS } from "../../constants";
import RegisterCompanyNameForm from "../../components/Forms/Register/RegisterCompanyNameForm";
import RegisterCompanyPhoneForm from "../../components/Forms/Register/RegisterCompanyPhoneForm";
import { Ionicons } from "@expo/vector-icons";
import RegisterOTPVerifyForm from "../../components/Forms/Register/RegisterOTPVerifyForm";
import RegisterPasswordForm from "../../components/Forms/Register/RegisterPasswordForm";

const Register = ({ navigation }) => {
  const [activeFlowTab, setActiveFlowTab] = useState(1);
  const [state, setState] = useState({
    companyEmail: "",
    companyPhone: "",
    otp: "",
    password: "",
  });
  const [error, setError] = useState({
    companyEmail: "",
    companyPhone: "",
    otp: "",
    password: {
      criteria_1: false,
      criteria_2: false,
      criteria_3: false,
      criteria_4: false,
    },
  });
  const [nextButtonDisable, setNextButtonDisable] = useState(true);

  useEffect(() => {
    setNextButtonDisable(true);
    if (!error.companyEmail && state.companyEmail && activeFlowTab === 1) {
      setNextButtonDisable(false);
    }
    if (!error.companyPhone && state.companyPhone && activeFlowTab === 2) {
      setNextButtonDisable(false);
    }
    if (!error.otp && state.otp && activeFlowTab === 3) {
      setNextButtonDisable(false);
    }
    if (!error.password && state.password && activeFlowTab === 4) {
      setNextButtonDisable(false);
    }
  }, [error, activeFlowTab, state]);
  const handleChangeBackNavigation = () => {
    setActiveFlowTab((active) => active - 1);
  };

  const maskedPhoneNumber = (number) => {
    const phoneNumberString = number.toString();
    const maskedPhoneNumber =
      phoneNumberString.substring(0, 2) +
      "*******" +
      phoneNumberString.substring(phoneNumberString.length - 2);

    return maskedPhoneNumber;
  };

  const handleChange = (fieldName) => (value) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    if (fieldName === "companyEmail") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (!emailRegex.test(value)) {
        setError({ companyEmail: "Enter a valid email" });
      } else {
        setError({ companyEmail: "" });
      }
      if (value == "") {
        setError({ companyEmail: "" });
      }
    }
    if (fieldName === "companyPhone") {
      const phoneRegex = /^\d{10}$/; // Matches a 10-digit number
      if (!phoneRegex.test(value)) {
        setError({ companyPhone: "Enter a valid phone number" });
      } else {
        setError({ companyPhone: "" });
      }
      if (value == "") {
        setError({ companyPhone: "" });
      }
    }

    if (fieldName === "otp") {
      if (value.length === 6) {
        if (value !== "123456") {
          setError({ otp: "Incorrect OTP. Please check and try again." });
        } else {
          setError({ otp: "" });
        }
      } else {
        setError({ otp: "" });
      }
    }
    if (fieldName === "password") {
      const atLeast8LetterRegex = /^.{8,}$/;
      const bothLowerAndUpperCaseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
      const atLeast1NumberRegex = /^(?=.*\d)/;
      const atLeast1SymbolRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~])/;

      setError((prevError) => ({
        ...prevError,
        password: {
          criteria_1: atLeast8LetterRegex.test(value),
          criteria_2: bothLowerAndUpperCaseRegex.test(value),
          criteria_3: atLeast1NumberRegex.test(value),
          criteria_4: atLeast1SymbolRegex.test(value),
        },
      }));
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />
      <AuthSteppedHeaderComponents
        count={9}
        active={activeFlowTab}
        navigatePrev={handleChangeBackNavigation}
      />

      <View style={styles.container}>
        <View style={styles.section}>
          <View style={{ flex: 9 }}>
            {activeFlowTab === 1 && (
              <View>
                <RegisterCompanyNameForm
                  value={state.companyEmail}
                  onChangeText={handleChange("companyEmail")}
                  errorInput={error.companyEmail && state.companyEmail}
                />

                {error?.companyEmail && (
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
                      {error.companyEmail}
                    </Text>
                  </View>
                )}
              </View>
            )}
            {activeFlowTab === 2 && (
              <View>
                <RegisterCompanyPhoneForm
                  value={state.companyPhone}
                  onChangeText={handleChange("companyPhone")}
                  errorInput={error.companyPhone && state.companyPhone}
                />
                {error.companyPhone && (
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
                      {error.companyPhone}
                    </Text>
                  </View>
                )}
              </View>
            )}
            {activeFlowTab === 3 && (
              <View>
                <RegisterOTPVerifyForm
                  phoneNumber={maskedPhoneNumber(state.companyPhone)}
                  onChangeText={handleChange("otp")}
                  errorInput={error.otp && state.otp}
                />
                {error.otp && (
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
                      {error.otp}
                    </Text>
                  </View>
                )}
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: COLORS.grey }}>
                    Did not receive the OTP?
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 14,
                        marginLeft: 5,
                        fontWeight: "700",
                        color: COLORS.brand,
                      }}
                    >
                      Resend
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            {activeFlowTab === 4 && (
              <View>
                <RegisterPasswordForm
                  value={state.password}
                  onChangeText={handleChange("password")}
                  errorInput={
                    (!error.password?.criteria_1 ||
                      !error.password?.criteria_2 ||
                      !error.password?.criteria_3 ||
                      !error.password?.criteria_4) &&
                    state.password
                  }
                />
                {error.password && state.password && (
                  <View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name={
                          error.password?.criteria_1
                            ? "checkmark"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_1 ? COLORS.green : COLORS.red
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_1
                            ? { color: COLORS.green }
                            : { color: COLORS.red },
                        ]}
                      >
                        Contains at least 8 characters
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name={
                          error.password?.criteria_2
                            ? "checkmark"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_2 ? COLORS.green : COLORS.red
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_2
                            ? { color: COLORS.green }
                            : { color: COLORS.red },
                        ]}
                      >
                        Contains both lower (a-z) and upper case letters (A-Z)
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name={
                          error.password?.criteria_3
                            ? "checkmark"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_3 ? COLORS.green : COLORS.red
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_3
                            ? { color: COLORS.green }
                            : { color: COLORS.red },
                        ]}
                      >
                        Contains at least one number (0-9)
                      </Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name={
                          error.password?.criteria_4
                            ? "checkmark"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_4 ? COLORS.green : COLORS.red
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_4
                            ? { color: COLORS.green }
                            : { color: COLORS.red },
                        ]}
                      >
                        Contains at least one symbol
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={[
                nextButtonDisable
                  ? styles.disableMainButton
                  : styles.mainButton,
              ]}
              onPress={() => setActiveFlowTab((active) => active + 1)}
            >
              <Text
                style={
                  nextButtonDisable
                    ? { fontSize: 14, fontWeight: "700", color: COLORS.grey }
                    : { fontSize: 14, fontWeight: "700", color: COLORS.white }
                }
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  section: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  disableMainButton: {
    backgroundColor: COLORS.shadeBrand,
    borderColor: COLORS.shadeBrand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Register;
