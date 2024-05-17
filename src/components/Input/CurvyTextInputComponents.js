import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
const CurvyTextInputComponents = ({ style, searchInput }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGrey,
        ...style,
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 0.9 }}>
          <TextInput
            style={{
              backgroundColor: COLORS.lightGrey,
              fontSize: 14,
              padding: 4,
            }}
          />
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CurvyTextInputComponents;
