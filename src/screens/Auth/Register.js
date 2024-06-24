import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import AuthSteppedHeaderComponents from "../../components/AuthSteppedHeaderComponents";
import { COLORS } from "../../constants";
import RegisterCompanyNameForm from "../../components/Forms/Register/RegisterCompanyNameForm";
import RegisterCompanyPhoneForm from "../../components/Forms/Register/RegisterCompanyPhoneForm";
import { Ionicons } from "@expo/vector-icons";
import RegisterOTPVerifyForm from "../../components/Forms/Register/RegisterOTPVerifyForm";
import RegisterPasswordForm from "../../components/Forms/Register/RegisterPasswordForm";
import RegisterCompanyDetailsForm from "../../components/Forms/Register/RegisterCompanyDetailsForm";
import RegisterContactInfoForm from "../../components/Forms/Register/RegisterContactInfoForm";
import RegisterDocumentForm from "../../components/Forms/Register/RegisterDocumentForm";
import RegisterBankDetailsForm from "../../components/Forms/Register/RegisterBankDetailsForm";

const Register = ({ route }) => {
  console.log(route.params);
  const [activeFlowTab, setActiveFlowTab] = useState(1);
  const [state, setState] = useState({
    companyEmail: "",
    companyPhone: "",
    otp: "",
    password: "",
    companyName: "",
    registeredAddress: "",
    tradingBusinessName: "",
    tradingBusinessAddress: "",
    legalEntityType: "",
    contactEmployeeName: "",
    contactDesignation: "",
    contactEmail: "",
    contactPhone: "",
    bankName: "",
    bankPayeeName: "",
    bankAccountNumber: "",
    bankSortCode: "",
  });

  const [error, setError] = useState({
    companyEmail: "",
    companyPhone: "",
    otp: "",
    password: {
      criteria_1: "",
      criteria_2: "",
      criteria_3: "",
      criteria_4: "",
      nullError: "",
    },
    companyName: "",
    registeredAddress: "",
    tradingBusinessName: "",
    tradingBusinessAddress: "",
    legalEntityType: "",
    contactEmployeeName: "",
    contactDesignation: "",
    contactEmail: "",
    contactPhone: "",
    bankName: "",
    bankPayeeName: "",
    bankAccountNumber: "",
    bankSortCode: "",
  });

  const handleNextButtonClick = () => {
    if (activeFlowTab === 1) {
      if (state.companyEmail) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!emailRegex.test(state.companyEmail)) {
          setError({ companyEmail: "Enter a valid email" });
        } else {
          setError({ companyEmail: "" });
          setActiveFlowTab((active) => active + 1);
        }
      } else {
        setError({ companyEmail: "Email id is required" });
      }
    } else if (activeFlowTab === 2) {
      if (state.companyPhone) {
        const phoneRegex = /^\d{10}$/; // Matches a 10-digit number
        if (!phoneRegex.test(state.companyPhone)) {
          setError({ companyPhone: "Enter a valid phone number" });
        } else {
          setError({ companyPhone: "" });
          setActiveFlowTab((active) => active + 1);
        }
      } else {
        setError({ companyPhone: "Phone number is required" });
      }
    } else if (activeFlowTab === 3) {
      if (state.otp) {
        if (state.otp.length === 6) {
          if (state.otp !== "123456") {
            setError({ otp: "Incorrect OTP. Please check and try again." });
          } else {
            setError({ otp: "" });
            setActiveFlowTab((active) => active + 1);
          }
        } else {
          setError({ otp: "Incorrect OTP. Please check and try again" });
        }
      } else {
        setError({ otp: "Incorrect OTP. Please check and try again" });
      }
    } else if (activeFlowTab === 4) {
      const atLeast8LetterRegex = /^.{8,}$/;
      const bothLowerAndUpperCaseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
      const atLeast1NumberRegex = /^(?=.*\d)/;
      const atLeast1SymbolRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~])/;

      if (state.password) {
        setError((prevError) => ({
          ...prevError,
          password: {
            nullError: "",
            criteria_1: !atLeast8LetterRegex.test(state.password)
              ? "red"
              : "green",
            criteria_2: !bothLowerAndUpperCaseRegex.test(state.password)
              ? "red"
              : "green",
            criteria_3: !atLeast1NumberRegex.test(state.password)
              ? "red"
              : "green",
            criteria_4: !atLeast1SymbolRegex.test(state.password)
              ? "red"
              : "green",
          },
        }));
        if (
          error.password?.criteria_1 == "green" &&
          error.password?.criteria_2 == "green" &&
          error.password?.criteria_3 == "green" &&
          error.password?.criteria_4 == "green"
        ) {
          setActiveFlowTab((active) => active + 1);
        }
      } else {
        setError((prevError) => ({
          ...prevError,
          password: { nullError: "Create new Password" },
        }));
      }
    } else if (activeFlowTab === 5) {
      const fieldsToCheck = [
        { fieldName: "companyName", errorMessage: "Company field is required" },
        {
          fieldName: "registeredAddress",
          errorMessage: "Registered Address field is required",
        },
        {
          fieldName: "tradingBusinessName",
          errorMessage: "Trading Business Name field is required",
        },
        {
          fieldName: "tradingBusinessAddress",
          errorMessage: "Trading Business Address field is required",
        },
        {
          fieldName: "legalEntityType",
          errorMessage: "Legal Entity Type field is required",
        },
      ];

      let allFieldsFilled = true;

      fieldsToCheck.forEach(({ fieldName, errorMessage }) => {
        if (!state[fieldName]) {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: errorMessage,
          }));
          allFieldsFilled = false;
        } else {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: "",
          }));
        }
      });

      if (allFieldsFilled) {
        setActiveFlowTab((active) => active + 1);
      }
    } else if (activeFlowTab === 6) {
      const fieldsToCheck = [
        {
          fieldName: "contactEmployeeName",
          errorMessage: "Employee Name field is required",
        },
        {
          fieldName: "contactDesignation",
          errorMessage: "Designation field is required",
        },

        {
          fieldName: "contactEmail",
          errorMessage: "Email field is required",
        },
        {
          fieldName: "contactPhone",
          errorMessage: "Mobile number field is required",
        },
      ];

      let allFieldsFilled = true;

      fieldsToCheck.forEach(({ fieldName, errorMessage }) => {
        if (!state[fieldName]) {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: errorMessage,
          }));
          allFieldsFilled = false;
        } else {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: "",
          }));
        }
      });
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (state.contactEmail) {
        if (!emailRegex.test(state.contactEmail)) {
          setError((prevError) => ({
            ...prevError,
            ["contactEmail"]: "Enter a valid email",
          }));
          allFieldsFilled = false;
        }
      }
      const phoneRegex = /^\d{10}$/;
      if (state.contactPhone) {
        if (!phoneRegex.test(state.contactPhone)) {
          setError((prevError) => ({
            ...prevError,
            ["contactPhone"]: "Enter a valid phone number",
          }));
          allFieldsFilled = false;
        }
      }

      if (allFieldsFilled) {
        setActiveFlowTab((active) => active + 1);
      }
    } else if (activeFlowTab === 7) {
      setActiveFlowTab((active) => active + 1);
    } else if (activeFlowTab === 8) {
      const fieldsToCheck = [
        { fieldName: "bankName", errorMessage: "Bank Name field is required" },
        {
          fieldName: "bankPayeeName",
          errorMessage: "Payee Name field is required",
        },
        {
          fieldName: "bankAccountNumber",
          errorMessage: "Account Number field is required",
        },
        {
          fieldName: "bankSortCode",
          errorMessage: "Sort code field is required",
        },
      ];

      let allFieldsFilled = true;

      fieldsToCheck.forEach(({ fieldName, errorMessage }) => {
        if (!state[fieldName]) {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: errorMessage,
          }));
          allFieldsFilled = false;
        } else {
          setError((prevError) => ({
            ...prevError,
            [fieldName]: "",
          }));
        }
      });

      if (allFieldsFilled) {
        setActiveFlowTab((active) => active + 1);
      }
    }
  };
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
    setError((prevError) => ({
      ...prevError,
      [fieldName]: "",
    }));

    if (fieldName === "password") {
      const atLeast8LetterRegex = /^.{8,}$/;
      const bothLowerAndUpperCaseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
      const atLeast1NumberRegex = /^(?=.*\d)/;
      const atLeast1SymbolRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~])/;

      setError((prevError) => ({
        ...prevError,
        password: {
          criteria_1: atLeast8LetterRegex.test(value) && "green",
          criteria_2: bothLowerAndUpperCaseRegex.test(value) && "green",
          criteria_3: atLeast1NumberRegex.test(value) && "green",
          criteria_4: atLeast1SymbolRegex.test(value) && "green",
        },
      }));
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />
      <AuthSteppedHeaderComponents
        count={8}
        active={activeFlowTab}
        navigatePrev={handleChangeBackNavigation}
      />

      <View style={styles.container}>
        <View style={{ flex: 9 }}>
          <View style={styles.section}>
            {activeFlowTab === 1 && (
              <View style={{ flex: 1 }}>
                <RegisterCompanyNameForm
                  value={state.companyEmail}
                  onChangeText={handleChange("companyEmail")}
                  errorInput={error.companyEmail}
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
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text>By registering, you agree to our</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      gap: 40,
                    }}
                  >
                    <TouchableOpacity>
                      <Text style={{ fontWeight: "700", color: COLORS.brand }}>
                        T&Cs
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{ fontWeight: "700", color: COLORS.brand }}>
                        Privacy Policy
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text style={{ fontWeight: "700", color: COLORS.brand }}>
                        Data Protection Policy
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            {activeFlowTab === 2 && (
              <View>
                <RegisterCompanyPhoneForm
                  value={state.companyPhone}
                  onChangeText={handleChange("companyPhone")}
                  errorInput={error.companyPhone}
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
                  errorInput={error.otp}
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
                    error.password?.criteria_1 == "red" ||
                    !error.password?.criteria_2 == "red" ||
                    !error.password?.criteria_3 == "red" ||
                    !error.password?.criteria_4 == "red" ||
                    error.password?.nullError
                  }
                />
                {error.password?.nullError && !state.password && (
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
                      {error.password?.nullError}
                    </Text>
                  </View>
                )}
                {state.password && (
                  <View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Ionicons
                        name={
                          error.password?.criteria_1 == "green"
                            ? "checkmark"
                            : error.password?.criteria_1 == "red"
                            ? "alert-circle-outline"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_1 == "green"
                            ? COLORS.green
                            : error.password?.criteria_1 == "red"
                            ? COLORS.red
                            : COLORS.black
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_1 == "green"
                            ? { color: COLORS.green }
                            : error.password?.criteria_1 == "red"
                            ? { color: COLORS.red }
                            : { color: COLORS.black },
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
                          error.password?.criteria_2 == "green"
                            ? "checkmark"
                            : error.password?.criteria_2 == "red"
                            ? "alert-circle-outline"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_2 == "green"
                            ? COLORS.green
                            : error.password?.criteria_2 == "red"
                            ? COLORS.red
                            : COLORS.black
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_2 == "green"
                            ? { color: COLORS.green }
                            : error.password?.criteria_2 == "red"
                            ? { color: COLORS.red }
                            : { color: COLORS.black },
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
                          error.password?.criteria_3 == "green"
                            ? "checkmark"
                            : error.password?.criteria_3 == "red"
                            ? "alert-circle-outline"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_3 == "green"
                            ? COLORS.green
                            : error.password?.criteria_3 == "red"
                            ? COLORS.red
                            : COLORS.black
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_3 == "green"
                            ? { color: COLORS.green }
                            : error.password?.criteria_3 == "red"
                            ? { color: COLORS.red }
                            : { color: COLORS.black },
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
                          error.password?.criteria_4 == "green"
                            ? "checkmark"
                            : error.password?.criteria_4 == "red"
                            ? "alert-circle-outline"
                            : "radio-button-on"
                        }
                        size={7}
                        color={
                          error.password?.criteria_4 == "green"
                            ? COLORS.green
                            : error.password?.criteria_4 == "red"
                            ? COLORS.red
                            : COLORS.black
                        }
                        style={{ marginRight: 10 }}
                      />
                      <Text
                        style={[
                          { justifyContent: "center" },
                          error.password?.criteria_4 == "green"
                            ? { color: COLORS.green }
                            : error.password?.criteria_4 == "red"
                            ? { color: COLORS.red }
                            : { color: COLORS.black },
                        ]}
                      >
                        Contains at least one symbol
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
            {activeFlowTab === 5 && (
              <View>
                <RegisterCompanyDetailsForm
                  value={state}
                  onChangeText={handleChange}
                  errorInput={error}
                />
              </View>
            )}
            {activeFlowTab === 6 && (
              <RegisterContactInfoForm
                value={state}
                onChangeText={handleChange}
                errorInput={error}
              />
            )}
            {activeFlowTab === 7 && <RegisterDocumentForm />}
            {activeFlowTab === 8 && (
              <RegisterBankDetailsForm
                value={state}
                onChangeText={handleChange}
                errorInput={error}
              />
            )}
          </View>
        </View>
        <View
          style={{
            flex: 0.7,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ ...styles.section, justifyContent: "center" }}>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => handleNextButtonClick()}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}
              >
                {activeFlowTab === 8 ? "Submit and create account" : " Next"}
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
    height: 40,
    borderRadius: 50,
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
