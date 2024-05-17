import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants";
import AuthSteppedHeaderComponents from "../../components/AuthSteppedHeaderComponents";
import { IMAGE } from "../../constants/Image";
import OutlinedTextInput from "../../components/Input/OutlinedTextInputComponents";
import ContactUsModal from "../../components/Modal/ContactUsModal";

const ForgotPassword = () => {
  const [activeFlowTab, setActiveFlowTab] = useState(1);
  const [isContactModal, setIsContactModal] = useState(false);
  const [email, setEmail] = useState("");
  const handleChangeBackNavigation = () => {
    setActiveFlowTab((active) => active - 1);
  };
  return (
    <View style={styles.container}>
      <ContactUsModal
        isOpenModal={isContactModal}
        closeModal={() => setIsContactModal(false)}
      />
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />
      <AuthSteppedHeaderComponents
        count={1}
        active={activeFlowTab}
        navigatePrev={handleChangeBackNavigation}
      />
      <View style={{ marginTop: 20, paddingLeft: 10 }}>
        <Image
          source={IMAGE.lockQuestion}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.container}>
        <View style={{ flex: 9 }}>
          <View style={styles.content}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>
              Enter your registered email address. We will send an email in
              order to let you choose a new password.
            </Text>
            <OutlinedTextInput
              label={"Email"}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subtitle}>Don’t remember your email?</Text>
              <TouchableOpacity onPress={() => setIsContactModal(true)}>
                <Text
                  style={{
                    color: COLORS.brand,
                    fontWeight: "500",
                    marginLeft: 5,
                    fontSize: 13,
                    marginTop: 5,
                    marginBottom: 10,
                  }}
                >
                  Contact Us
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.9 }}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.mainButton}>
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}
              >
                Reset Password
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
  content: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.grey,
    marginTop: 5,
    marginBottom: 10,
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
  },
});
export default ForgotPassword;
