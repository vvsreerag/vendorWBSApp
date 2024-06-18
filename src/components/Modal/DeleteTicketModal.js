import React from "react";
import WBModal from "./WBModal";
import { Image, StyleSheet, Text, View } from "react-native";
import { IMAGE } from "../../constants/Image";
import { COLORS } from "../../constants";

const DeleteTicketModal = ({ isOpenModal, closeModal }) => {
  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={65}>
      <View>
        <Image source={IMAGE.warning} style={{ width: 90, height: 90 }} />
        <View style={{ marginTop: 10 }}>
          <Text
            style={{ fontSize: 16, color: COLORS.black, fontWeight: "700" }}
          >
            Are you sure you want to delete this request?
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 3 }}>
            Changes made till now be saved
          </Text>
          <View style={styles.scanTickets}>
            <Text style={styles.scanTicketsText}>REASON FOR CANCELLATION</Text>
          </View>
        </View>
      </View>
    </WBModal>
  );
};
const styles = StyleSheet.create({
  scanTickets: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  scanTicketsText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default DeleteTicketModal;
