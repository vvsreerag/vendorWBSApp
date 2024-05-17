import React, { useRef, useEffect } from "react";
import {
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const ContactUsModal = ({ isOpenModal, closeModal }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpenModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 300, // Adjust duration as needed
        useNativeDriver: true,
      }).start();
    }
  }, [isOpenModal, modalAnimatedValue]);

  const modalTranslateY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  const closeModalWithAnimation = () => {
    Animated.timing(modalAnimatedValue, {
      toValue: 0,
      duration: 300, // Adjust duration as needed
      useNativeDriver: true,
    }).start(() => {
      closeModal();
    });
  };

  return (
    <Modal
      visible={isOpenModal}
      transparent={true}
      animationType={"fade"}
      statusBarTranslucent
    >
      <StatusBar barStyle="light-content" backgroundColor={"#00000062"} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#00000062",
          justifyContent: "flex-end",
        }}
      >
        <Animated.View
          style={{
            backgroundColor: COLORS.white,
            height: "25%",
            borderRadius: 16,
            padding: 20,
            transform: [{ translateY: modalTranslateY }],
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={closeModalWithAnimation}>
              <Ionicons name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "700", marginBottom: 10 }}>
              How would you like us to contact you?
            </Text>
            <TouchableOpacity>
              <View
                style={{
                  paddingLeft: 10,
                  paddingTop: 15,
                  paddingBottom: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 0.1, marginLeft: 10 }}>
                  <Ionicons name="call-outline" size={20} color="black" />
                </View>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Text>WhatsApp</Text>
                  <Text style={{ fontSize: 12, color: COLORS.grey }}>
                    8:00am - 10:00pm
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.4,
                    alignItems: "flex-end",
                    marginRight: 20,
                  }}
                >
                  <Text style={{ color: COLORS.brand }}> xxxx-xxx-xxx</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  paddingLeft: 10,
                  paddingTop: 15,
                  paddingBottom: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 0.1, marginLeft: 10 }}>
                  <Ionicons name="mail-outline" size={20} color="black" />
                </View>
                <View
                  style={{
                    flex: 0.4,
                    alignItems: "flex-start",
                    flexDirection: "column",
                  }}
                >
                  <Text>Email</Text>
                  <Text style={{ fontSize: 12, color: COLORS.grey }}>
                    24 x 7 support
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    alignItems: "flex-end",
                    marginRight: 20,
                  }}
                >
                  <Text style={{ color: COLORS.brand }}>
                    info@winbysyndicate.com
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ContactUsModal;
