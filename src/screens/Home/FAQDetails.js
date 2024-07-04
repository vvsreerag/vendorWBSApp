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
          x: selectedItemIndex * 140,
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
          <>
            <MenuItem
              name="How will I know my account is approved?"
              dropDescription={
                "You will receive an email at your registered email address."
              }
            />
            <MenuItem
              name="Why am I not able to change my documents?"
              dropDescription={
                "You can upload new documents to your account. Once submitted, the request will be sent to our team for approval. It may take up to 48-72 hours for approval. Once the request is approved, you can see your new documents under your account."
              }
            />
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
              name="What information do I need to provide to register? "
              dropDescription={
                "You will need to provide your business details, bank details, contact details, and business documents."
              }
            />
            <MenuItem
              name="I did not receive a confirmation email. What should I do?"
              dropDescription={
                "First, check your spam or junk folder. If you still cannot find the confirmation email, ensure that you entered the correct email address during registration. If the issue persists, contact our support team at info@winbysyndicate.com."
              }
            />
            <MenuItem
              name="Can I sign up using my social media accounts?"
              dropDescription={
                "Yes, you can register using your Facebook, Google, or other supported social media accounts by clicking the respective icons on the registration page."
              }
            />
            <MenuItem
              name="Is there a fee to create an account?"
              dropDescription={"Creating an account is free."}
            />
            <MenuItem
              name="How do I log in to my account?"
              dropDescription={
                " To log in, click on the 'Login' button on the homepage. Enter your registered email address and password, then click 'Submit.'"
              }
            />
            <MenuItem
              name="I forgot my password. How can I reset it?"
              dropDescription={
                "Click on the 'Forgot Password?' link on the login page. Enter your registered email address, and we will send you instructions to reset your password."
              }
            />
            <MenuItem
              name="I entered the correct email and password, but I still can't log in. What should I do? "
              dropDescription={
                "Ensure that your caps lock is off and that there are no typos in your email or password. If you still can't log in, try resetting your password. If the problem persists, contact our support team at info@winbysyndicate.com."
              }
            />
            <MenuItem
              name="Can I stay logged in on my device?"
              dropDescription={
                "Yes, you can choose the 'Remember Me' option on the login page to stay logged in on your device. This is not recommended for shared or public devices."
              }
            />
            <MenuItem
              name="How do I log out of my account?"
              dropDescription={
                "To log out, click on your profile icon at the top right corner of the page and select 'Log Out' from the dropdown menu."
              }
            />
            <MenuItem
              name="How do I update my account information?"
              dropDescription={
                "Log in to your account, go to your profile settings, and edit your information. Don't forget to save the changes."
              }
            />
            <MenuItem
              name="How can I delete my account?"
              dropDescription={
                "To delete your account, go to your account settings and select the option to delete your account. Confirm your decision, and your request will be sent to our team. Our team will get back to you for confirmation."
              }
            />
            <MenuItem
              name="I’m having trouble registering or logging in. Who can I contact for help?"
              dropDescription={
                "If you encounter any issues, please contact our support team at info@winbysyndicate.com or call us at 7990493161. We’re here to help!"
              }
            />
            <MenuItem
              name="Can I change my password?"
              dropDescription={
                "Yes, you can change your password by going to your account settings and selecting the option to change your password."
              }
            />
          </>
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
          <>
            <MenuItem
              name="How do I print tickets for scanning?"
              dropDescription={
                "To print tickets, you can use a national lottery machine."
              }
            />
            <MenuItem
              name="What type of scanner should I use?"
              dropDescription={
                "We recommend using a high-quality barcode scanner compatible with our app. Most modern barcode scanners with USB or Bluetooth connectivity will work seamlessly."
              }
            />
            <MenuItem
              name="How do I scan a ticket using the app?"
              dropDescription={
                "Open the app and log in to your vendor account. Go to the 'Scan Tickets' section, and use the in-app scanner by pointing your device’s camera at the ticket barcode. Ensure the barcode is within the frame and well-lit for accurate scanning."
              }
            />
            <MenuItem
              name="Can I use my smartphone to scan tickets?"
              dropDescription={
                "Yes, our app is designed to work with most smartphones. Simply download the app, log in, and use the camera to scan the tickets. Make sure your phone's camera is clean and the lens is not obstructed."
              }
            />
            <MenuItem
              name="What should I do if a ticket won’t scan?"
              dropDescription={`
              If a ticket won’t scan, try the following steps:
              1. Ensure the barcode is not damaged or smudged.
              2. Adjust the lighting to reduce glare and shadows.
              3. If the problem persists, contact our support team for further assistance.`}
            />
            <MenuItem
              name="How do I upload scanned tickets to the app?"
              dropDescription={
                "Scanned tickets are automatically uploaded to the app in real-time. Ensure your device is connected to the internet for immediate upload. You can check the upload status in the 'Ticket Management' section of the app."
              }
            />
          </>
        );
      case "Others":
        return (
          <>
            <MenuItem
              name="The app is not recognizing scanned tickets. What could be the issue?"
              dropDescription={
                "Verify that you are using the latest version of the app. Check the barcode quality and ensure it is not damaged. Ensure your device has a stable internet connection. If the issue persists, contact our support team."
              }
            />
            <MenuItem
              name="How do I check the status of uploaded tickets?"
              dropDescription={
                "You can check the status of uploaded tickets in the 'Ticket Management' section of the app. Each ticket will have a status indicator showing whether it has been successfully uploaded, is pending, or failed to upload."
              }
            />
            <MenuItem
              name="I’m experiencing slow upload speeds. How can I improve this?"
              dropDescription={
                "Slow upload speeds can be due to a weak internet connection. Ensure you have a strong and stable internet connection. If you are using a mobile data connection, try switching to a Wi-Fi network. Additionally, close any unnecessary apps running in the background to free up device resources."
              }
            />
            <MenuItem
              name="Can I scan tickets offline?"
              dropDescription={
                "Yes, you can scan tickets offline. The app will store the scanned data and upload it automatically once your device reconnects to the internet. Ensure you sync your device as soon as possible to avoid delays in ticket processing."
              }
            />
            <MenuItem
              name="Who do I contact for support if I encounter issues?"
              dropDescription={
                "For any issues or support needs, contact our support team at info@winbysyndicate.com or call us at 07990493161. Our support team is available Monday through Friday, 9 AM to 5 PM (BST)."
              }
            />
          </>
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
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 16,
    color: COLORS.black,
  },
});

export default FAQDetails;
