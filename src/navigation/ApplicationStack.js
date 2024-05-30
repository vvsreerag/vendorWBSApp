import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import TabNavigationStack from "./TabNavigationStack";
import TransactionHistory from "../screens/Home/TransactionHistory";

const Stack = createNativeStackNavigator();

const ApplicationStack = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "transparent",
          flex: 1,
        }}
      >
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: "transparent",
            },
            headerShown: false,
            animation: "fade",
            animationTypeForReplace: "push",
            animationDuration: 500,
          }}
          initialRouteName={ROUTES.MAIN}
        >
          <Stack.Screen name={ROUTES.MAIN} component={TabNavigationStack} />
          <Stack.Screen
            name={ROUTES.TRANSACTION_HISTORY}
            component={TransactionHistory}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

export default ApplicationStack;
