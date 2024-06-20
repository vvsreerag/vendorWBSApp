import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import TabNavigationStack from "./TabNavigationStack";
import TransactionHistory from "../screens/Home/TransactionHistory";
import VendorDetails from "../screens/Home/VendorDetails";
import AboutUs from "../screens/Home/AboutUs";
import SupportAndFAQ from "../screens/Home/SupportAndFAQ";
import FAQDetails from "../screens/Home/FAQDetails";
import SubHeaderComponents from "../components/SubHeaderComponents";
import CompletedRequests from "../screens/Home/CompletedRequests";
import Requests from "../screens/Home/Requests";
import CompletedTickets from "../screens/Home/CompletedTickets";
import PendingReviewRequest from "../screens/Home/PendingReviewRequest";
import EditVendorDetails from "../screens/Home/EditVendorDetails";
import DeleteAccount from "../screens/Home/DeleteAccount";
import TicketScanner from "../components/Menu/TicketScanner";

const Stack = createNativeStackNavigator();

const ApplicationStack = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: "transparent",
          flex: 1,
        }}
      >
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              backgroundColor: "transparent",
            },
            headerShown: false,
            animation: "fade",
            animationTypeForReplace: "push",
            animationDuration: 500,
          }}
          initialRouteName={ROUTES.MAIN}
        >
          <Stack.Screen name={ROUTES.MAIN} component={TabNavigationStack} />
          <Stack.Screen
            name={ROUTES.TRANSACTION_HISTORY}
            component={TransactionHistory}
          />
          <Stack.Screen
            name={ROUTES.VENDOR_DETAILS}
            component={VendorDetails}
          />
          <Stack.Screen name={ROUTES.ABOUT_US} component={AboutUs} />
          <Stack.Screen
            name={ROUTES.SUPPORT_AND_FAQ}
            component={SupportAndFAQ}
          />
          <Stack.Screen name={ROUTES.FAQ_DETAILS} component={FAQDetails} />
          <Stack.Screen
            name={ROUTES.COMPLETED_REQUESTS}
            component={CompletedRequests}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.COMPLETED_TICKETS}
            component={CompletedTickets}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.REQUESTS}
            component={Requests}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.PENDING_REVIEW_REQUEST}
            component={PendingReviewRequest}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.EDIT_VENDOR_DETAILS}
            component={EditVendorDetails}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.DELETE_ACCOUNT}
            component={DeleteAccount}
            options={{
              header: (props) => (
                <SubHeaderComponents {...props} navigation={props.navigation} />
              ),
            }}
          />
          <Stack.Screen
            name={ROUTES.TICKET_SCANNER}
            component={TicketScanner}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </>
  );
};

export default ApplicationStack;
