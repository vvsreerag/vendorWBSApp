import React, { useRef, useEffect } from "react";
import {
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StyleSheet,
} from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const WBModal = ({ height, isOpenModal, closeModal, children }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpenModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpenModal, modalAnimatedValue]);

  const modalTranslateY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [height * 10, 0],
  });

  const closeModalWithAnimation = () => {
    Animated.timing(modalAnimatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      closeModal();
    });
  };
  return (
    <Modal
      visible={isOpenModal}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
    >
      <StatusBar barStyle="light-content" backgroundColor="#00000062" />
      <View style={styles.overlay}>
        <Animated.View
          style={[
            styles.modal,
            { transform: [{ translateY: modalTranslateY }] },
            { height: height ? `${height}%` : "50%" },
          ]}
        >
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={closeModalWithAnimation}>
              <Ionicons name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000062",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: COLORS.white,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  closeButtonContainer: {
    alignItems: "flex-end",
  },
});

export default WBModal;
