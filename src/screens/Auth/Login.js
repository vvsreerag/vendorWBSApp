import React, { useState } from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import AuthSteppedHeaderComponents from "../../components/AuthSteppedHeaderComponents";
import OutlinedTextInput from "../../components/Input/OutlinedTextInputComponents";
import LoginForm from "../../components/Forms/Login/LoginForm";
import { useNavigation } from "@react-navigation/native";
import GoogleAuthentication from "../../components/GoogleAuthentication";

const Login = () => {
  const [activeFlowTab, setActiveFlowTab] = useState(1);
  const navigation = useNavigation();
  const handleChangeBackNavigation = () => {
    setActiveFlowTab((active) => active - 1);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />
      <AuthSteppedHeaderComponents
        count={1}
        active={activeFlowTab}
        navigatePrev={handleChangeBackNavigation}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>

        <LoginForm />

        <View style={styles.orContinue}>
          <Text style={styles.orContinueText}>Or Continue With</Text>
          <GoogleAuthentication />
        </View>
      </View>
      <View style={{ ...styles.bottomText, flexDirection: "row" }}>
        <Text style={styles.bottomTextContent}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text
            style={{
              color: COLORS.brand,
              fontWeight: "500",
              marginLeft: 5,
              fontSize: 13,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 100, // Adjust as needed to leave space for the bottom text
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.grey,
    marginTop: 10,
    marginBottom: 10,
  },
  orContinue: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  orContinueText: {
    fontSize: 14,
    color: COLORS.grey,
  },
  bottomText: {
    position: "fixed",
    bottom: 20,
    left: 0,
    right: 0,

    justifyContent: "center",
  },
  bottomTextContent: {
    fontSize: 13,
    color: COLORS.grey,
  },
});

export default Login;
