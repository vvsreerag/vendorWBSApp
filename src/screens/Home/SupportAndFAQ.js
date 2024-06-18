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
                name="Why am I not receiving the OTP?"
                dropDescription={"hi how are you"}
              />
              <MenuItem
                name="Why am I unable to log in to my account?"
                dropDescription={"hi how are you"}
              />
              <MenuItem
                name="How do I reset my password?"
                dropDescription={"hi how are you"}
              />
              <MenuItem
                name="How do I update my contact details?"
                dropDescription={"hi how are you"}
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
