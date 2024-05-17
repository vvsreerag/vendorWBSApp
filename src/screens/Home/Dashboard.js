import React from "react";
import { StatusBar, Text, View } from "react-native";
import { COLORS } from "../../constants";

const Dashboard = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Text>Heere in home</Text>
    </View>
  );
};

export default Dashboard;
