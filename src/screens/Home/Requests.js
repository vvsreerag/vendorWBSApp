import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import RequestDetailsHeader from "../../components/Menu/RequestDetailsHeader";
import RequestHeaderStatus from "../../components/Menu/RequestHeaderStatus";
import TicketItems from "../../components/Menu/TicketItems";
import RequestInfoHeader from "../../components/Menu/RequestInfoHeader";
import { Ionicons } from "@expo/vector-icons";

const Requests = () => {
  return (
    <View style={styles.container}>
      <SubHeaderComponents deleteContent />

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
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={4} lines={10} />
        <TicketItems number={10} lines={10} />
      </ScrollView>
      <View
        style={{
          backgroundColor: COLORS.lightGrey,
          paddingHorizontal: 20,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.scanTicketsText}>
          Mark as Print Complete to start scanning tickets.
        </Text>
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Ionicons name="close" size={24} color={COLORS.grey} />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.section, justifyContent: "center" }}>
        <TouchableOpacity style={styles.mainButton}>
          <Text
            style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}
          >
            Print Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    elevation: 4,
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
  mainButton: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
  },
});

export default Requests;
