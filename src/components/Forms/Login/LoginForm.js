import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OutlinedTextInput from "../../Input/OutlinedTextInputComponents";
import { COLORS, ROUTES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const LoginForm = ({ value }) => {
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View>
      <OutlinedTextInput
        label={"Email or Mobile Number"}
        value={emailOrNumber}
        onChangeText={(value) => setEmailOrNumber(value)}
      />
      <OutlinedTextInput
        label={"Password"}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}
        >
          <Text
            style={{ color: COLORS.brand, fontWeight: "500", marginLeft: 10 }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.mainButton}>
        <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
  },
});
export default LoginForm;
