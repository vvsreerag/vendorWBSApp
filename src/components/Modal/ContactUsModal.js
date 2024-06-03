import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import WBModal from "./WBModal";

const ContactUsModal = ({ isOpenModal, closeModal }) => {
  const contactOptions = [
    {
      icon: "call-outline",
      method: "WhatsApp",
      availability: "8:00am - 10:00pm",
      contact: "07990493161",
    },
    {
      icon: "mail-outline",
      method: "Help Request",
      availability: "24 x 7 support",
    },
  ];

  return (
    <WBModal isOpenModal={isOpenModal} closeModal={closeModal} height={25}>
      <>
        <Text style={styles.title}>How would you like us to contact you?</Text>
        {contactOptions.map((option, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.contactOption}>
              <View style={styles.iconContainer}>
                <Ionicons name={option.icon} size={20} color="black" />
              </View>
              <View style={styles.contactInfo}>
                <Text>{option.method}</Text>
                <Text style={styles.availabilityText}>
                  {option.availability}
                </Text>
              </View>
              {option?.contact && (
                <View style={styles.contactTextContainer}>
                  <Text style={styles.contactText}>{option.contact}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </>
    </WBModal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    marginBottom: 10,
  },
  contactOption: {
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flex: 0.1,
    marginLeft: 10,
  },
  contactInfo: {
    flex: 0.4,
    alignItems: "flex-start",
  },
  availabilityText: {
    fontSize: 12,
    color: COLORS.grey,
  },
  contactTextContainer: {
    flex: 0.5,
    alignItems: "flex-end",
    marginRight: 20,
  },
  contactText: {
    color: COLORS.brand,
  },
});

export default ContactUsModal;
