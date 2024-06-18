import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";
import OutlinedTextInput from "../../components/Input/OutlinedTextInputComponents";

const validationSchema = Yup.object().shape({
  companyEmail: Yup.string().email("Invalid email").required("Required"),
  companyMobile: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  tradingBusinessName: Yup.string().required("Required"),
  tradingBusinessAddress: Yup.string().required("Required"),
  legalEntityType: Yup.string().required("Required"),
  employeeName: Yup.string().required("Required"),
  designation: Yup.string().required("Required"),
  primaryEmail: Yup.string().email("Invalid email").required("Required"),
  primaryMobile: Yup.string().required("Required"),
  bankCompanyName: Yup.string().required("Required"),
  payeeName: Yup.string().required("Required"),
  accountNumber: Yup.string().required("Required"),
  sortCode: Yup.string().required("Required"),
});

const EditVendorForm = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => (
  <>
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Update Vendor Details</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={{ marginTop: 15 }}>
          <Text style={styles.subTitle}>CONTACT DETAILS</Text>
          <OutlinedTextInput
            label="Company Email"
            value={values.companyEmail}
            onChangeText={handleChange("companyEmail")}
            onBlur={handleBlur("companyEmail")}
            errorInput={touched.companyEmail && errors.companyEmail}
          />
          <OutlinedTextInput
            label="Company Mobile Number"
            value={values.companyMobile}
            onChangeText={handleChange("companyMobile")}
            onBlur={handleBlur("companyMobile")}
            errorInput={touched.companyMobile && errors.companyMobile}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>COMPANY DETAILS</Text>
          <OutlinedTextInput
            label="Company Name"
            value={values.companyName}
            onChangeText={handleChange("companyName")}
            onBlur={handleBlur("companyName")}
            errorInput={touched.companyName && errors.companyName}
          />
          <OutlinedTextInput
            label="Address"
            value={values.address}
            onChangeText={handleChange("address")}
            onBlur={handleBlur("address")}
            errorInput={touched.address && errors.address}
          />
          <OutlinedTextInput
            label="Trading Business Name"
            value={values.tradingBusinessName}
            onChangeText={handleChange("tradingBusinessName")}
            onBlur={handleBlur("tradingBusinessName")}
            errorInput={
              touched.tradingBusinessName && errors.tradingBusinessName
            }
          />
          <OutlinedTextInput
            label="Trading Business Address"
            value={values.tradingBusinessAddress}
            onChangeText={handleChange("tradingBusinessAddress")}
            onBlur={handleBlur("tradingBusinessAddress")}
            errorInput={
              touched.tradingBusinessAddress && errors.tradingBusinessAddress
            }
          />
          <OutlinedTextInput
            label="Legal Entity Type"
            value={values.legalEntityType}
            onChangeText={handleChange("legalEntityType")}
            onBlur={handleBlur("legalEntityType")}
            errorInput={touched.legalEntityType && errors.legalEntityType}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>PRIMARY CONTACT DETAILS</Text>
          <OutlinedTextInput
            label="Employee Name"
            value={values.employeeName}
            onChangeText={handleChange("employeeName")}
            onBlur={handleBlur("employeeName")}
            errorInput={touched.employeeName && errors.employeeName}
          />
          <OutlinedTextInput
            label="Designation"
            value={values.designation}
            onChangeText={handleChange("designation")}
            onBlur={handleBlur("designation")}
            errorInput={touched.designation && errors.designation}
          />
          <OutlinedTextInput
            label="Email Id"
            value={values.primaryEmail}
            onChangeText={handleChange("primaryEmail")}
            onBlur={handleBlur("primaryEmail")}
            errorInput={touched.primaryEmail && errors.primaryEmail}
          />
          <OutlinedTextInput
            label="Mobile Number"
            value={values.primaryMobile}
            onChangeText={handleChange("primaryMobile")}
            onBlur={handleBlur("primaryMobile")}
            errorInput={touched.primaryMobile && errors.primaryMobile}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={styles.subTitle}>BANK DETAILS</Text>
          <OutlinedTextInput
            label="Company Name"
            value={values.bankCompanyName}
            onChangeText={handleChange("bankCompanyName")}
            onBlur={handleBlur("bankCompanyName")}
            errorInput={touched.bankCompanyName && errors.bankCompanyName}
          />
          <OutlinedTextInput
            label="Payee Name"
            value={values.payeeName}
            onChangeText={handleChange("payeeName")}
            onBlur={handleBlur("payeeName")}
            errorInput={touched.payeeName && errors.payeeName}
          />
          <OutlinedTextInput
            label="Account Number"
            value={values.accountNumber}
            onChangeText={handleChange("accountNumber")}
            onBlur={handleBlur("accountNumber")}
            errorInput={touched.accountNumber && errors.accountNumber}
          />
          <OutlinedTextInput
            label="Sort Code"
            value={values.sortCode}
            onChangeText={handleChange("sortCode")}
            onBlur={handleBlur("sortCode")}
            errorInput={touched.sortCode && errors.sortCode}
          />
        </View>
      </ScrollView>
    </View>

    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={[styles.button, styles.rejectButton]}
        onPress={() => handleReset()}
      >
        <Text style={styles.rejectButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.mainButton]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  </>
);

const EditVendorDetails = () => {
  return (
    <View style={styles.container}>
      <SubHeaderComponents />

      <Formik
        initialValues={{
          companyEmail: "",
          companyMobile: "",
          companyName: "",
          address: "",
          tradingBusinessName: "",
          tradingBusinessAddress: "",
          legalEntityType: "",
          employeeName: "",
          designation: "",
          primaryEmail: "",
          primaryMobile: "",
          bankCompanyName: "",
          payeeName: "",
          accountNumber: "",
          sortCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => <EditVendorForm {...props} />}
      </Formik>
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
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.black,
  },
  subTitle: {
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
    color: COLORS.brand,
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

export default EditVendorDetails;
