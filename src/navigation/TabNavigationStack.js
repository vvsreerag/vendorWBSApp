import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, ROUTES } from "../constants";
import Dashboard from "../screens/Home/Dashboard";
import Earning from "../screens/Home/Earning";
import Profile from "../screens/Home/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigationStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        cardStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.DASHBOARD) {
            iconName = focused ? "view-dashboard" : "view-dashboard";
          } else if (route.name === ROUTES.EARNING) {
            iconName = focused ? "credit-card-outline" : "credit-card-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? "emoticon-outline" : "emoticon-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: COLORS.brand,
        tabBarInactiveTintColor: COLORS.darkGrey,
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name={ROUTES.DASHBOARD} component={Dashboard} />
      <Tab.Screen name={ROUTES.EARNING} component={Earning} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigationStack;
