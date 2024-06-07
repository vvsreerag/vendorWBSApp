import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import RequestDetailsHeader from "../../components/Menu/RequestDetailsHeader";
import RequestHeaderStatus from "../../components/Menu/RequestHeaderStatus";
import RequestInfoHeader from "../../components/Menu/RequestInfoHeader";
import TicketItems from "../../components/Menu/TicketItems";

const CompletedRequests = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <RequestDetailsHeader
        title="SYN123323423"
        description="Request Date 24 May 2024, 13:20"
      />
      <RequestHeaderStatus status="Completed" date="24 May 2024, 13:20" />
      <RequestInfoHeader />
      <View style={styles.scanTickets}>
        <Text style={styles.scanTicketsText}>SCAN TICKETS</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TicketItems number={1} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={2} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={3} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
        <TicketItems number={4} lines={10} file="SCANNEDFILE.PDF" completed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  scanTickets: {
    paddingVertical: 5,
    paddingLeft: 20,
  },
  scanTicketsText: {
    color: COLORS.grey,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default CompletedRequests;
