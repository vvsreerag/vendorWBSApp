import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { IMAGE } from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />

      <View style={styles.landingHeader}>
        <Image source={IMAGE.landingImage1} style={styles.headerImage} />
        <View style={{ ...styles.section, paddingTop: 20 }}>
          <Text style={styles.heading}>Manager your orders in one place</Text>
          <Text style={styles.contentText}>
            You can easily accept or reject requests according to your
            availability, and keep track of any pending orders.
          </Text>
        </View>
      </View>
      <View style={styles.landingFooter}>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text style={styles.whiteText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.mainButton, backgroundColor: COLORS.white }}
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.brandText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  section: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  landingHeader: {
    flex: 0.7,
    backgroundColor: COLORS.lightGrey,
  },
  landingFooter: {
    flex: 0.3,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 14,
    color: COLORS.grey,
  },
  whiteText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.white,
  },
  brandText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.brand,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default LandingPage;
