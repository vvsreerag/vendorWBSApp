import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const AuthSteppedHeaderComponents = ({
  count,
  active,
  navigatePrev,
  noGoBack,
}) => {
  const remainingBar = Math.floor(parseInt(count, 10) - parseInt(active, 10));
  const completedBar = Math.floor(parseInt(count, 10) - remainingBar);

  const navigation = useNavigation();
  return (
    <View>
      <View style={{ backgroundColor: COLORS.lightGrey }}>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {active === 1 ? (
            <>
              {!noGoBack && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back-outline"
                    size={24}
                    color={COLORS.grey}
                  />
                </TouchableOpacity>
              )}
            </>
          ) : (
            <TouchableOpacity onPress={() => navigatePrev()}>
              <Ionicons
                name="arrow-back-outline"
                size={24}
                color={COLORS.grey}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {count > 1 && (
        <View style={{ paddingTop: 2, paddingBottom: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: completedBar, marginRight: 2 }}>
              <View
                style={{
                  backgroundColor: COLORS.green,
                  height: 4,
                  borderRadius: 10,
                  width: "100%",
                }}
              />
            </View>
            <View style={{ flex: remainingBar }}>
              <View
                style={{
                  backgroundColor: COLORS.lightGreen,
                  height: 4,
                  borderRadius: 10,
                  width: "100%",
                }}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default AuthSteppedHeaderComponents;
