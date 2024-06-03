import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";

const FAQDetails = ({}) => {
  const supportFilterItem = ({}) => {};
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={{ flexDirection: "row", marginTop: 10 }}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default FAQDetails;
