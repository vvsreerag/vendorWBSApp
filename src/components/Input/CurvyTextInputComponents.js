import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
const CurvyTextInputComponents = ({ style, searchInput, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGrey,
        ...style,
        borderRadius: 50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 0.9 }}>
          <TextInput
            placeholder={placeholder}
            style={{
              backgroundColor: COLORS.lightGrey,
              fontSize: 14,
              padding: 4,
            }}
          />
        </View>
        <View style={{ flex: 0.1, alignItems: "flex-end", marginRight: 10 }}>
          <TouchableOpacity>
            <Ionicons name="search" size={20} color={COLORS.darkGrey} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CurvyTextInputComponents;
