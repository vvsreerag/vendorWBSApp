import React, { useState } from "react";
import { Text, View, Switch } from "react-native";
import { COLORS } from "../constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import SwitchComponent from "./SwitchComponent";

const MainHeaderComponents = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{
        height: 60,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flex: 0.5, justifyContent: "flex-start" }}>
        <SwitchComponent value={isEnabled} onValueChange={setIsEnabled} />
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default MainHeaderComponents;
