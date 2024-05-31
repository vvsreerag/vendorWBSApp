import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";

const DetailSection = ({ title, details }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.sectionContent}>
      {details.map((detail, index) => (
        <View key={index} style={styles.detailItem}>
          <Text style={styles.detailLabel}>{detail.label}</Text>
          <Text style={styles.detailValue}>{detail.value}</Text>
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
  ];

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.contentContainer}>
        <Header title="Vendor ID" subTitle="#1234567890" />
        <ScrollView>
          <DetailSection title="CONTACT DETAILS" details={contactDetails} />
          <DetailSection title="COMPANY DETAILS" details={companyDetails} />
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
  contentContainer: {
    paddingHorizontal: 20,
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
    fontSize: 13,
    fontWeight: "500",
    color: COLORS.black,
    marginLeft: 5,
  },
  sectionContainer: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 11,
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
    fontSize: 11,
    color: COLORS.grey,
  },
  detailValue: {
    fontSize: 11,
    color: COLORS.black,
  },
});

export default VendorDetails;
