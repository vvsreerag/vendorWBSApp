import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS, ROUTES } from "../../../constants";
import RegisterAddressModal from "../../Modal/RegisterAddressModal";
import { Ionicons } from "@expo/vector-icons";

const RegisterCompanyDetailsForm = ({ value, onChangeText, errorInput }) => {
  const [addressByPostCodeModal, setAddressByPostCodeModal] = useState(false);
  return (
    <>
      {addressByPostCodeModal && (
        <RegisterAddressModal
          isOpen={addressByPostCodeModal}
          closeModal={() => setAddressByPostCodeModal(false)}
        />
      )}

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
          Enter Company Details
        </Text>

        <ScrollView>
          <OutlinedTextInput
            label={"Company Name"}
            value={value.companyName}
            onChangeText={(value) => onChangeText("companyName")(value)}
            errorInput={errorInput?.companyName}
          />
          {errorInput?.companyName && (
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
                {errorInput.companyName}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={() => setAddressByPostCodeModal(true)}>
            <OutlinedTextInput
              label={"Registered Address"}
              value={value.registeredAddress}
              buttonType
              onChangeText={(value) => onChangeText("registeredAddress")(value)}
              errorInput={errorInput.registeredAddress}
            />
          </TouchableOpacity>

          {errorInput?.registeredAddress && (
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
                {errorInput.registeredAddress}
              </Text>
            </View>
          )}
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: COLORS.brand, fontWeight: "500" }}>
                Enter address manually
              </Text>
            </TouchableOpacity>
          </View>
          <OutlinedTextInput
            label={"Trading Business Name"}
            value={value.tradingBusinessName}
            onChangeText={(value) => onChangeText("tradingBusinessName")(value)}
            errorInput={errorInput.tradingBusinessName}
          />
          {errorInput?.tradingBusinessName && (
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
                {errorInput.tradingBusinessName}
              </Text>
            </View>
          )}

          <OutlinedTextInput
            label={"Trading Business Address"}
            value={value.tradingBusinessAddress}
            onChangeText={(value) =>
              onChangeText("tradingBusinessAddress")(value)
            }
            errorInput={errorInput.tradingBusinessAddress}
          />
          {errorInput?.tradingBusinessAddress && (
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
                {errorInput.tradingBusinessAddress}
              </Text>
            </View>
          )}
          <OutlinedTextInput
            label={"Legal Entity Type"}
            value={value.legalEntityType}
            onChangeText={(value) => onChangeText("legalEntityType")(value)}
            errorInput={errorInput.legalEntityType}
          />
          {errorInput?.legalEntityType && (
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
                {errorInput.legalEntityType}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterCompanyDetailsForm;
