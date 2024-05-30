import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SubHeaderComponents = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ backgroundColor: COLORS.white }}>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={24}
                color={COLORS.grey}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="file-download"
                size={24}
                color={COLORS.grey}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubHeaderComponents;
