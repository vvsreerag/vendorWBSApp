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
        <Text style={{ fontSize: 14, color: COLORS.black, fontWeight: "700" }}>
          Delete Account
        </Text>
      </View>
      <View>
        <View style={{ paddingHorizontal: 20 }}>
          <OutlinedSelectInput
            label="Reasons"
            onSelect={handleSelect}
            placeHolder="Reason for Deletion?"
          >
            <OutlinedSelectInput.Option label="Barclays" value="barclays" />
            <OutlinedSelectInput.Option label="Lloyds" value="lloyds" />
            <OutlinedSelectInput.Option label="HSBC" value="hsbc" />
            <OutlinedSelectInput.Option label="NatWest" value="natwest" />
          </OutlinedSelectInput>
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
                marginTop: 10,
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
