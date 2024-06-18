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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DetailSection = ({ title, details, files }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {details.map((detail, index) => (
        <View key={index} style={styles.detailItem}>
          <Text style={styles.detailLabel}>{detail.label}</Text>
          {files ? (
            <View style={styles.fileContainer}>
              <Ionicons name="document-text" size={24} color="black" />
              <View style={styles.fileInfo}>
                <Text style={styles.fileName}>{detail.value}</Text>
                <Text style={styles.fileSize}>{detail.size}</Text>
              </View>
            </View>
          ) : (
            <Text style={styles.detailValue}>{detail.value}</Text>
          )}
        </View>
      ))}
    </View>
  </View>
);

const Header = ({ title, subTitle }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
    <Text style={styles.headerSubTitle}>{subTitle}</Text>
  </View>
);

const VendorDetails = () => {
  const navigation = useNavigation();

  const contactDetails = [
    { label: "Company Email ID", value: "user@email.com" },
    { label: "Company Mobile Number", value: "+44 12345678" },
  ];

  const companyDetails = [
    { label: "Company Name", value: "WinBySyndicate" },
    { label: "Email ID", value: "user@gmail.com" },
    { label: "Mobile Number", value: "+44 12345678" },
    {
      label: "Registered Address",
      value: "Number 45, Floor 2, Building Name, Area, 456",
    },
    { label: "Legal Entity Type", value: "Type 1" },
  ];
  const primaryContactDetails = [
    { label: "Employee Name", value: "Name" },
    { label: "Designation", value: "CEO" },
    { label: "Email ID", value: "user@gmail.com" },
    { label: "Mobile Number", value: "+44 12345678" },
  ];
  const legalDocuments = [
    {
      label: "Business Registration Certificate",
      value: "Business_registration_certificate.pdf",
      size: "200 KB",
    },
    {
      label: "Merchant ID Details - Trading Certificate",
      value: "MerchantID_DetailsTrading_Certificate.pdf",
      size: "200 KB",
    },
  ];
  const bankDetails = [
    { label: "Bank Name", value: "HSBC Bank" },
    { label: "Payee Name", value: "Win By Syndicate" },
    { label: "Account Number", value: "40005364" },
    { label: "Sort Code", value: "20-12-43" },
  ];

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.contentContainer}>
        <Header title="Vendor ID" subTitle="#1234567890" />
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
        >
          <DetailSection title="CONTACT DETAILS" details={contactDetails} />
          <DetailSection title="COMPANY DETAILS" details={companyDetails} />
          <DetailSection
            title="PRIMARY CONTACT DETAILS"
            details={primaryContactDetails}
          />
          <DetailSection
            title="LEGAL DOCUMENTS"
            details={legalDocuments}
            files
          />
          <DetailSection title="BANK DETAILS" details={bankDetails} />
        </ScrollView>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.rejectButton]}
          onPress={() => navigation.navigate(ROUTES.DELETE_ACCOUNT)}
        >
          <Text style={styles.rejectButtonText}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.mainButton]}
          onPress={() => navigation.navigate(ROUTES.EDIT_VENDOR_DETAILS)}
        >
          <Text style={styles.buttonText}>Update Details</Text>
        </TouchableOpacity>
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
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContentContainer: {
    paddingBottom: 10,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: COLORS.lightGrey,
    borderRadius: 7,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.grey,
  },
  headerSubTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.black,
    marginLeft: 5,
  },
  sectionContainer: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 12,
    color: COLORS.grey,
  },
  sectionContent: {
    marginTop: 10,
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 8,
  },
  detailItem: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  detailLabel: {
    fontSize: 12,
    color: COLORS.grey,
  },
  detailValue: {
    fontSize: 14,
    color: COLORS.black,
  },
  fileContainer: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  fileInfo: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  fileName: {
    fontSize: 12,
  },
  fileSize: {
    fontSize: 12,
    color: COLORS.grey,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  rejectButtonText: {
    color: COLORS.red,
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
  },
});

export default VendorDetails;
