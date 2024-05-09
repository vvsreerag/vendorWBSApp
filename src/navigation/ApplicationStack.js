import React from "react";
import { ROUTES } from "../constants";
import Dashboard from "../screens/Home/Dashboard";

const ApplicationStack = () => {
  return (
    <>
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
        initialRouteName={ROUTES.DASHBOARD}
      >
        <Stack.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};

export default ApplicationStack;
