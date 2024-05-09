import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import LandingPage from "../screens/Auth/LandingPage";
import Register from "../screens/Auth/Register";
import AuthSteppedHeaderComponents from "../components/AuthSteppedHeaderComponents";

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
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
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default AuthenticationStack;
