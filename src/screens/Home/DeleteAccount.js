import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import OutlinedSelectInput from "../../components/Input/OutlinedSelectInputComponents";
import DiscardAlert from "../../components/Alert/DiscardAlert";

const DeleteAccount = () => {
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const handleSelect = () => {};
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <DiscardAlert
        visible={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
        type="delete_account"
      />
      <View style={styles.contentContainer}>
        <Text
          style={{
            fontSize: 14,
            color: COLORS.black,
            fontWeight: "700",
            marginTop: 10,
          }}
        >
          Delete Account
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.black, marginTop: 20 }}>
          {`Once you place your request to delete to your account, our team will carefully review your request to ensure all necessary criteria are met.\n The review process typically takes 3-5 business days. During this time, you will still have access to your account unless otherwise specified.`}
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.black, marginTop: 20 }}>
          {`If your request is approved, \nyou will receive a confirmation email, and your account will be permanently deleted. \nIf your request is not approved, \nOur team will contact you with further details and any additional steps that may be required.`}
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.black, marginTop: 20 }}>
          We appreciate your business and hope to serve you again in the future.
        </Text>
        <OutlinedSelectInput
          label="Reasons"
          onSelect={handleSelect}
          placeHolder="Reason for Deletion?"
          style={{ marginTop: 30 }}
        >
          <OutlinedSelectInput.Option
            label="Concerns about privacy and security"
            value="1"
          />
          <OutlinedSelectInput.Option
            label="Customer support issues"
            value="2"
          />
          <OutlinedSelectInput.Option
            label="Technical issues with the platform"
            value="3"
          />
          <OutlinedSelectInput.Option label="Business closed" value="4" />
          <OutlinedSelectInput.Option label="Not enough features" value="5" />
          <OutlinedSelectInput.Option
            label="Difficult to use the app"
            value="6"
          />
          <OutlinedSelectInput.Option
            label="Not receiving enough orders"
            value="7"
          />
          <OutlinedSelectInput.Option label="Billing Issues" value="8" />
          <OutlinedSelectInput.Option label="Other" value="other" />
        </OutlinedSelectInput>
      </View>
      <View>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 10,
            }}
          >
            <Text>By continuing, you agree to our</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                gap: 40,
                marginTop: 20,
                marginBottom: 20,
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
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.rejectButton]}
            onPress={() => setDeleteConfirmationOpen(!deleteConfirmationOpen)}
          >
            <Text style={styles.rejectButtonText}>Delete Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.mainButton]}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContentContainer: {
    paddingBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  rejectButtonText: {
    color: COLORS.red,
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
  },
});
export default DeleteAccount;
