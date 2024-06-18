import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";

const sections = [
  {
    header: "About Us",
    body: "WinBySyndicate.com is proud to partner with a premier Ticket Printing Vendor to enhance our services as a leading Ticket Purchasing Company and Syndicate Operator for Lotto enthusiasts. Our collaboration is designed to streamline the process of buying, printing, and dispatching lottery tickets, ensuring a seamless experience for all our syndicate members.",
  },
  {
    header: "Our Commitment",
    body: "We are committed to providing our members with the utmost convenience and reliability. Our Ticket Printing Vendor plays a crucial role in this commitment, handling the meticulous task of printing and confirming the dispatch of your lottery tickets with precision and care.",
  },
  {
    header: "Leadership and Management",
    body: "The strategic partnership is guided by the visionary leadership of Vipul Kumar and Pawan Prasad, Directors of Insight GHRF Consultancy Ltd. Their expertise in managing complex operations ensures that every ticket printed meets the highest standards of quality and security.",
  },
  {
    header: "Our Base of Operations",
    body: "Located at 35, New Broad Street, London EC2M 1NH, our Ticket Printing Vendor is situated at the heart of our operations, allowing for efficient coordination and prompt service. Join us at WinBySyndicate.com and experience the difference that professional ticket printing and management can make. Together, we're not just playing the Lotto; we're revolutionising the way it's played.",
  },
];

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.contentContainer}>
        <ScrollView style={styles.content}>
          {sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.header}>{section.header}</Text>
              <Text style={styles.bodyText}>{section.body}</Text>
            </View>
          ))}
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
    flex: 1,
  },
  content: {
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.black,
  },
});

export default AboutUs;
