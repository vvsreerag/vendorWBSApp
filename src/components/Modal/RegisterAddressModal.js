import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

import { Ionicons } from "@expo/vector-icons";
const RegisterAddressModal = ({ isOpen, closeModal }) => {
  return (
    <Modal visible={isOpen} animationType="fade" statusbarTranslucent>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: COLORS.lightGrey }}>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={closeModal}>
                <Ionicons name="close-sharp" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 16, fontWeight: "700", marginLeft: 20 }}>
                Registered Address
              </Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: COLORS.white }}></View>
      </View>
    </Modal>
  );
};

export default RegisterAddressModal;
