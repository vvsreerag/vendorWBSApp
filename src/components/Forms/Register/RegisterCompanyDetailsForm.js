import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS, ROUTES } from "../../../constants";
import RegisterAddressModal from "../../Modal/RegisterAddressModal";

const RegisterCompanyDetailsForm = ({ value, onChangeText, errorInput }) => {
  const [state, setState] = useState({
    companyName: value.companyName || "",
    registeredAddress: value.registeredAddress || "",
    tradingBusinessName: value.tradingBusinessName || "",
    tradingBusinessAddress: value.tradingBusinessAddress || "",
    legalEntityType: value.legalEntityType || "",
  });
  const [addressByPostCodeModal, setAddressByPostCodeModal] = useState(false);

  //   const handleAaddressByPostCodeModal = () => {

  //   }

  const onChangeTextHandle = (fieldName) => (value) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
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
            value={state.companyName}
            onChangeText={(value) => onChangeTextHandle("companyName")(value)}
            errorInput={errorInput}
          />
          <TouchableOpacity onPress={() => setAddressByPostCodeModal(true)}>
            <OutlinedTextInput
              label={"Registered Address"}
              value={state.registeredAddress}
              buttonType
              onChangeText={(value) =>
                onChangeTextHandle("registeredAddress")(value)
              }
              errorInput={errorInput}
            />
          </TouchableOpacity>

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
            value={state.tradingBusinessName}
            onChangeText={(value) =>
              onChangeTextHandle("tradingBusinessName")(value)
            }
            errorInput={errorInput}
          />

          <OutlinedTextInput
            label={"Trading Business Address"}
            value={state.tradingBusinessAddress}
            onChangeText={(value) =>
              onChangeTextHandle("tradingBusinessAddress")(value)
            }
            errorInput={errorInput}
          />
          <OutlinedTextInput
            label={"Legal Entity Type"}
            value={state.legalEntityType}
            onChangeText={(value) =>
              onChangeTextHandle("legalEntityType")(value)
            }
            errorInput={errorInput}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterCompanyDetailsForm;
