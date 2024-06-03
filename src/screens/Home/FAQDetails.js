import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { MaterialIcons } from "@expo/vector-icons";
import MenuItemGroup from "../../components/Menu/MenuItemGroup";
import MenuItem from "../../components/Menu/MenuItem";

const FAQDetails = ({ route, navigation }) => {
  const { paramName } = route.params;
  const [selectedItem, setSelectedItem] = useState(paramName);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Scroll to the selected item when paramName changes
    if (scrollViewRef.current) {
      const selectedItemIndex = [
        "Account",
        "Payments",
        "Requests",
        "Others",
      ].indexOf(selectedItem);
      if (selectedItemIndex !== -1) {
        scrollViewRef.current.scrollTo({
          x: selectedItemIndex * 150,
          animated: true,
        });
      }
    }
  }, [selectedItem]);
  const SupportFilterItem = ({ icon, title, backgroundColor }) => (
    <TouchableOpacity
      style={[
        styles.supportItem,
        { backgroundColor },
        selectedItem === title && { borderColor: COLORS.black, borderWidth: 1 },
      ]}
      onPress={() => setSelectedItem(title)}
    >
      <MaterialIcons name={icon} size={20} color={COLORS.black} />
      <Text style={styles.supportItemText}>{title}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => {
    switch (selectedItem) {
      case "Account":
        return (
          <Text style={styles.contentText}>Account related content...</Text>
        );
      case "Payments":
        return (
          <>
            <MenuItem
              name="What are the payment terms and conditions?"
              dropDescription={
                "100% upfront, in case the vendor fails to print the ticket, the vendor is responsible for refunding the full amount before canceling the printing."
              }
            />
            <MenuItem
              name="What payment methods are available?"
              dropDescription={`We offer payments via direct bank transfer, PayPal, and check. You can select your preferred payment method in the "Payment Settings" section of the vendor portal.`}
            />
            <MenuItem
              name="How do I update my payment information?"
              dropDescription={`To update your payment information, log in to your vendor account, go to "Account Settings," and select "Payment Information." Enter your new payment details and save the changes. Ensure all information is accurate to avoid payment delays.`}
            />
            <MenuItem
              name=" When will I receive my payment?"
              dropDescription={
                "You will receive your payment with the ticket order. The exact timing may vary depending on your bank or payment provider."
              }
            />
            <MenuItem
              name="How can I view my payment history?"
              dropDescription={`You can view your payment history by logging in to the vendor portal and navigating to the "Payment History" section. Here, you will find detailed records of all payments made to your account, including dates, amounts, and transaction references.
              `}
            />
            <MenuItem
              name="What should I do if I haven’t received my payment?"
              dropDescription={`If you have not received your payment within the expected time-frame, please do the following:
              1. Check that your payment details are correct and up-to-date.
              2. Verify with your bank or payment provider if there are any delays on their end.
              3. Contact our support team at info@winbysyndicate.com or call us at 7990493161. Our support team is available Monday through Friday, 9 AM to 5 PM (BST).`}
            />
            <MenuItem
              name="Are there any fees associated with receiving payments? "
              dropDescription={`We do not charge any fees for processing payments. However, your bank or payment provider may impose fees for receiving funds. Please check with your bank or payment provider for more information on any applicable fees.`}
            />
            <MenuItem
              name="How is the payment amount calculated?"
              dropDescription={`Payment amounts are calculated based on the number of tickets. You can view detailed breakdowns of your earnings in the "Earnings Report" section of the vendor portal.
              `}
            />
            <MenuItem
              name="Do I get an advance payment?"
              dropDescription={`Yes, you will get advance payment with your ticket order.`}
            />
            <MenuItem
              name="What should I do if there’s a discrepancy in my payment?"
              dropDescription={
                "If you notice any discrepancies in your payment, please contact our support team immediately. Provide details of the discrepancy, including dates, amounts, and any relevant transaction references. Our team will investigate and resolve the issue as quickly as possible."
              }
            />
            <MenuItem
              name="How can I ensure my scanned tickets are counted for payment?"
              dropDescription={`Ensure that all tickets are scanned correctly and uploaded promptly. Verify that your device has a stable internet connection for real-time uploads. Regularly check the "Ticket Management" section of the app to confirm that all scanned tickets have been successfully uploaded and recorded.`}
            />
            <MenuItem
              name="Who do I contact for payment-related issues? "
              dropDescription={`For any payment-related questions or issues, please contact our support team at info@winbysyndicate.com or call us at 7990493161. Our support team is available Monday through Friday, 9 AM to 5 PM (BST).`}
            />
          </>
        );
      case "Requests":
        return (
          <Text style={styles.contentText}>Requests related content...</Text>
        );
      case "Others":
        return (
          <Text style={styles.contentText}>Others related content...</Text>
        );
      default:
        return (
          <Text style={styles.contentText}>
            Select an item to view details.
          </Text>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.scrollViewContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.supportItemsContainer}
        >
          <SupportFilterItem
            icon="insert-emoticon"
            title="Account"
            backgroundColor="#FEF9C3"
          />
          <SupportFilterItem
            icon="payments"
            title="Payments"
            backgroundColor="#C8E6C9"
          />
          <SupportFilterItem
            icon="receipt-long"
            title="Requests"
            backgroundColor="#E1D9FF"
          />
          <SupportFilterItem
            icon="star-border"
            title="Others"
            backgroundColor="#E8CCD6"
          />
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItemGroup>{renderContent()}</MenuItemGroup>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  scrollViewContainer: {
    height: 40,
    marginTop: 10,
  },
  supportItemsContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  supportItem: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  supportItemText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
    marginLeft: 10,
  },
  contentContainer: {
    marginTop: 20,
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default FAQDetails;
