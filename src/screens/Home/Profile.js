import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, ROUTES } from "../../constants";
import MainHeaderComponents from "../../components/MainHeaderComponents";
import MenuItemGroup from "../../components/Menu/MenuItemGroup";
import MenuItem from "../../components/Menu/MenuItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <MainHeaderComponents />
      <View style={styles.contentContainer}>
        <View style={styles.dateContainer}>
          <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            <View></View>
            <View>
              <Text style={styles.headerText}>Company Name</Text>
              <Text>username@gmail.com</Text>
              <Text>+44 1234456646</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>ACCOUNT DETAILS</Text>
          <MenuItemGroup style={styles.menuGroup}>
            <MenuItem
              name="Vendor Details"
              icon="insert-emoticon"
              route={() => navigation.navigate(ROUTES.VENDOR_DETAILS)}
            />
            <MenuItem name="Order History" icon="receipt-long" />
            <MenuItem
              name="Transaction History"
              icon="payments"
              route={() => navigation.navigate(ROUTES.TRANSACTION_HISTORY)}
            />
          </MenuItemGroup>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>SUPPORT</Text>
          <MenuItemGroup style={styles.menuGroup}>
            <MenuItem name="Support & FAQ" icon="help-outline" />
            <MenuItem name="Terms & Conditions" icon="assignment-add" />
            <MenuItem name="Privacy Policy" icon="privacy-tip" />
            <MenuItem
              name="About Us"
              icon="info-outline"
              route={() => navigation.navigate(ROUTES.ABOUT_US)}
            />
          </MenuItemGroup>
        </View>
        <View style={styles.section}>
          <TouchableOpacity style={styles.mainButton}>
            <MaterialIcons name="logout" size={20} color={COLORS.brand} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: COLORS.brand,
                marginLeft: 5,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontWeight: "700",
    fontSize: 15,
    paddingVertical: 5,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
  dateContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightGrey,
  },
  mainButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
  },
});
export default Profile;
