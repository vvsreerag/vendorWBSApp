import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import TabNavigationStack from "./TabNavigationStack";
import TransactionHistory from "../screens/Home/TransactionHistory";
import VendorDetails from "../screens/Home/VendorDetails";
import AboutUs from "../screens/Home/AboutUs";
import SupportAndFAQ from "../screens/Home/SupportAndFAQ";

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
          <Stack.Screen
            name={ROUTES.VENDOR_DETAILS}
            component={VendorDetails}
          />
          <Stack.Screen name={ROUTES.ABOUT_US} component={AboutUs} />
          <Stack.Screen
            name={ROUTES.SUPPORT_AND_FAQ}
            component={SupportAndFAQ}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

export default ApplicationStack;
