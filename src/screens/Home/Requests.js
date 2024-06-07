import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import RequestDetailsHeader from "../../components/Menu/RequestDetailsHeader";
import RequestHeaderStatus from "../../components/Menu/RequestHeaderStatus";
import TicketItems from "../../components/Menu/TicketItems";
import RequestInfoHeader from "../../components/Menu/RequestInfoHeader";

const Requests = () => {
  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <RequestDetailsHeader
        title="SYN123323423"
        description="Request Date 24 May 2024, 13:20"
      />
      <RequestHeaderStatus status={"To Do"} color={COLORS.red} />
      <RequestInfoHeader />
      <View style={styles.scanTickets}>
        <Text style={styles.scanTicketsText}>SCAN TICKETS</Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: COLORS.white,
            height: 6,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `10%`,
              backgroundColor: COLORS.brand,
              height: "100%",
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <Text style={{ color: COLORS.black, fontSize: 14 }}>10 scanned</Text>
          <Text style={{ color: COLORS.black, fontSize: 14 }}>
            60 tickets left
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TicketItems number={1} lines={10} />
        <TicketItems number={2} lines={10} />
        <TicketItems number={3} lines={10} />
        <TicketItems number={4} lines={10} />
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

export default Requests;
