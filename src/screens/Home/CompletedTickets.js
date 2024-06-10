import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import RequestDetailsHeader from "../../components/Menu/RequestDetailsHeader";
import RequestCompletedTicketHeader from "../../components/Menu/RequestCompletedTicketHeader";
import { COLORS } from "../../constants";
import TicketLine from "../../components/Menu/TicketLine";

const CompletedTickets = () => {
  const ticketNumbers = [1, 4, 10, 17, 45, 45];

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <RequestDetailsHeader
        title="Ticket No : 1"
        description="Number of Lines : 10"
      />
      <RequestCompletedTicketHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
        <TicketLine label="LINE No #123" numbers={ticketNumbers} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
});

export default CompletedTickets;
