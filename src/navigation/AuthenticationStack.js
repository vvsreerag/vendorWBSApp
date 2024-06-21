import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import LandingPage from "../screens/Auth/LandingPage";
import Register from "../screens/Auth/Register";
import AuthSteppedHeaderComponents from "../components/AuthSteppedHeaderComponents";
import Login from "../screens/Auth/Login";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import HelpRequest from "../screens/Common/HelpRequest";
import SubHeaderComponents from "../components/SubHeaderComponents";
import * as Linking from "expo-linking";

const Stack = createNativeStackNavigator();
const prefix = Linking.createURL("/");

const AuthenticationStack = () => {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Register: "vendor-register/:token",
      },
    },
  };
  return (
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
        initialRouteName={ROUTES.LANDING_PAGE}
        linking={linking}
      >
        <Stack.Screen name={ROUTES.LANDING_PAGE} component={LandingPage} />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={Register}
          options={{
            header: (props) => (
              <AuthSteppedHeaderComponents
                {...props}
                navigation={props.navigation}
              />
            ),
          }}
        />
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={Login}
          options={{
            header: (props) => (
              <AuthSteppedHeaderComponents
                {...props}
                navigation={props.navigation}
              />
            ),
          }}
        />
        <Stack.Screen
          name={ROUTES.FORGOT_PASSWORD}
          component={ForgotPassword}
          options={{
            header: (props) => (
              <AuthSteppedHeaderComponents
                {...props}
                navigation={props.navigation}
              />
            ),
          }}
        />
        <Stack.Screen
          name={ROUTES.HELP_REQUEST}
          component={HelpRequest}
          options={{
            header: (props) => (
              <SubHeaderComponents {...props} navigation={props.navigation} />
            ),
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthenticationStack;
