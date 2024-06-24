import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS, ROUTES } from "../../constants";
import { MaterialIcons } from "@expo/vector-icons";
import MenuItemGroup from "../../components/Menu/MenuItemGroup";
import MenuItem from "../../components/Menu/MenuItem";
import { useNavigation } from "@react-navigation/native";

// Component for each support item
const SupportItem = ({ icon, title, backgroundColor, route }) => (
  <TouchableOpacity
    style={[styles.supportItem, { backgroundColor }]}
    onPress={route}
  >
    <MaterialIcons name={icon} size={20} color={COLORS.black} />
    <Text style={styles.supportItemText}>{title}</Text>
  </TouchableOpacity>
);

const SupportAndFAQ = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Support & FAQ</Text>
        <View style={styles.supportItemsContainer}>
          <SupportItem
            icon="insert-emoticon"
            title="Account"
            backgroundColor="#FEF9C3"
            route={() =>
              navigation.navigate(ROUTES.FAQ_DETAILS, { paramName: "Account" })
            }
          />
          <SupportItem
            icon="payments"
            title="Payments"
            backgroundColor="#C8E6C9"
            route={() =>
              navigation.navigate(ROUTES.FAQ_DETAILS, { paramName: "Payments" })
            }
          />
        </View>
        <View style={styles.supportItemsContainer}>
          <SupportItem
            icon="receipt-long"
            title="Requests"
            backgroundColor="#E1D9FF"
            route={() =>
              navigation.navigate(ROUTES.FAQ_DETAILS, { paramName: "Requests" })
            }
          />
          <SupportItem
            icon="star-border"
            title="Others"
            backgroundColor="#E8CCD6"
            route={() =>
              navigation.navigate(ROUTES.FAQ_DETAILS, { paramName: "Others" })
            }
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.headerLabel}>FREQUENTLY ASKED QUESTIONS</Text>
          <ScrollView>
            <MenuItemGroup style={styles.menuGroup}>
              <MenuItem
                name="How long does it take for account approval after registration?"
                dropDescription={
                  "It may take up to 48-72 hours for approval. A confirmation email will be sent to you once the account is approved."
                }
              />
              <MenuItem
                name="How do I create an account?"
                dropDescription={
                  "To create an account, click on the link sent to you via email. Fill in the required information asked at the time of account creation."
                }
              />
              <MenuItem
                name="I forgot my password. How can I reset it?"
                dropDescription={
                  "Click on the 'Forgot Password?' link on the login page. Enter your registered email address, and we will send you instructions to reset your password."
                }
              />
              <MenuItem
                name="How do I update my account information?"
                dropDescription={
                  "Log in to your account, go to your profile settings, and edit your information. Don't forget to save the changes."
                }
              />
            </MenuItemGroup>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  section: {
    marginTop: 20,
  },
  header: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 10,
  },
  supportItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  supportItem: {
    paddingVertical: 13,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  supportItemText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
    marginLeft: 10,
  },
  headerLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default SupportAndFAQ;
