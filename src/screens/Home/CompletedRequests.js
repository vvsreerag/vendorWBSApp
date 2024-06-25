import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, ROUTES } from "../../constants";
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
        <TicketItems
          number={1}
          lines={7}
          file="SCANNEDFILE.PDF"
          completed
          onClick={() => navigation.navigate(ROUTES.COMPLETED_TICKETS)}
        />
        <TicketItems number={2} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={3} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={4} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={5} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={6} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={7} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={8} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={9} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={10} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={11} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={12} lines={7} file="SCANNEDFILE.PDF" />
        <TicketItems number={13} lines={6} file="SCANNEDFILE.PDF" />
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
