import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants";
import { IMAGE } from "../constants/Image";

const GoogleAuthentication = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.grey,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Image source={IMAGE.google} style={{ width: 20, height: 20 }} />
      <Text style={{ fontWeight: "700", fontSize: 14 }}>
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthentication;
