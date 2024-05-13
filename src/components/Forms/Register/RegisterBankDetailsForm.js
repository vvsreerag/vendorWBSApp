import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";

const RegisterBankDetailsForm = ({ value, errorInput }) => {
  const [state, setState] = useState({
    bankName: value.bankName || "",
    payeeName: value.payeeName || "",
    accountNumber: value.accountNumber || "",
    sortCode: value.sortCode || "",
  });
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 20 }}>
        Bank Details
      </Text>
      <ScrollView>
        <OutlinedTextInput
          label={"Bank Name"}
          value={state.bankName}
          onChangeText={(value) => onChangeTextHandle("bankName")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Payee Name"}
          value={state.payeeName}
          onChangeText={(value) => onChangeTextHandle("payeeName")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Account Number"}
          value={state.accountNumber}
          onChangeText={(value) => onChangeTextHandle("accountNumber")(value)}
          errorInput={errorInput}
        />
        <OutlinedTextInput
          label={"Sort Code"}
          value={state.sortCode}
          onChangeText={(value) => onChangeTextHandle("sortCode")(value)}
          errorInput={errorInput}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterBankDetailsForm;
