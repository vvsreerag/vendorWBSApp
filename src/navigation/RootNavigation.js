import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ApplicationStack from "./ApplicationStack";
import AuthenticationStack from "./AuthenticationStack";
import { ROUTES } from "../constants";
import * as Linking from "expo-linking";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const prefix = Linking.createURL("/");

const RootNavigation = () => {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        [ROUTES.REGISTER]: "vendor-register/:token",
      },
    },
  };
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);
  return (
    <NavigationContainer theme={navTheme} linking={linking}>
      {/* {isLoggedIn ? <ApplicationStack /> : <AuthenticationStack />} */}
      <ApplicationStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
