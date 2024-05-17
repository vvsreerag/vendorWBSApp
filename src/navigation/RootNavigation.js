import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ApplicationStack from "./ApplicationStack";
import AuthenticationStack from "./AuthenticationStack";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const RootNavigation = () => {
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);
  return (
    <NavigationContainer theme={navTheme}>
      {/* {isLoggedIn ? <ApplicationStack /> : <AuthenticationStack />} */}
      <ApplicationStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
