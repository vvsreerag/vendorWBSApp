import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import MainHeaderComponents from "../../components/MainHeaderComponents";
import { BarChart } from "react-native-gifted-charts";
import { COLORS } from "../../constants";
import SingleShowCaseMenuItems from "../../components/Menu/SingleShowCaseMenuItems";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import MenuItemGroup from "../../components/Menu/MenuItemGroup";
import MenuItem from "../../components/Menu/MenuItem";
import EarningSkeleton from "../../Skeleton/EarningSkeleton";

const Earning = () => {
  const [selectedTab, setSelectedTab] = useState("weekly");

  const chartData = [
    { value: 250, label: "1/4" },
    { value: 500, label: "2/4" },
    { value: 745, label: "3/4" },
    { value: 320, label: "4/4" },
    { value: 600, label: "5/4" },
    { value: 256, label: "6/4" },
    { value: 300, label: "7/4" },
  ];

  const monthlyChartData = [
    { value: 1250, label: "Jan" },
    { value: 1500, label: "Feb" },
    { value: 1745, label: "Mar" },
    { value: 1320, label: "Apr" },
    { value: 1600, label: "May" },
    { value: 1256, label: "Jun" },
  ];

  const renderTab = (tab, label) => (
    <TouchableOpacity onPress={() => setSelectedTab(tab)} style={styles.tab}>
      <Text
        style={[styles.headerText, selectedTab === tab && styles.activeTabText]}
      >
        {label}
      </Text>
      {selectedTab === tab && <View style={styles.activeTabIndicator} />}
    </TouchableOpacity>
  );

  const renderStatsCard = (value, label) => (
    <View style={styles.statsItem}>
      <View style={styles.statsValueContainer}>
        <Text style={styles.statsValue}>{value}</Text>
      </View>
      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );

  const chartDataToUse =
    selectedTab === "weekly" ? chartData : monthlyChartData;
  const dateRange = selectedTab === "weekly" ? "12-18 APR" : "APR 2023";
  const totalEarnings = "£10,00,240.00";
  const earningsComparison = "£150 more than last month";
  const earningsPercentage = "+08%";

  return (
    <View style={styles.container}>
      <MainHeaderComponents />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          {renderTab("weekly", "Weekly")}
          {renderTab("monthly", "Monthly")}
        </View>
        {/* <EarningSkeleton /> */}
        <View style={styles.dateContainer}>
          <Text style={styles.statsValue}>{dateRange}</Text>
        </View>

        <ScrollView>
          <View style={styles.body}>
            <View style={styles.statsCard}>
              {renderStatsCard(140, "REQUESTS FULFILLED")}
              {renderStatsCard(300, "TICKETS PRINTED")}
            </View>

            <View style={styles.earningsContainer}>
              <Text style={styles.earningsLabel}>TOTAL EARNINGS</Text>
              <View style={styles.earningsInfo}>
                <Text style={styles.earningsValue}>{totalEarnings}</Text>
                <View style={styles.earningsPercentage}>
                  <Text style={styles.percentageText}>
                    {earningsPercentage}
                  </Text>
                </View>
                <Text style={styles.earningsComparison}>
                  {earningsComparison}
                </Text>
              </View>

              <View style={styles.chartContainer}>
                <BarChart
                  barWidth={20}
                  noOfSections={4}
                  barBorderRadius={2}
                  frontColor={COLORS.brand}
                  data={chartDataToUse}
                  hideRules
                  spacing={27}
                  yAxisThickness={0}
                  xAxisThickness={0}
                  xAxisLabelTextStyle={styles.chartLabelText}
                  isAnimated
                />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.earningsLabel}>EARNINGS SPLIT</Text>
              <SingleShowCaseMenuItems
                label="Winnings"
                icon={
                  <FontAwesome6
                    name="hand-holding-dollar"
                    size={18}
                    color={COLORS.darkGrey}
                  />
                }
              />
              <SingleShowCaseMenuItems
                label="Request Fee"
                icon={
                  <Ionicons name="receipt" size={18} color={COLORS.darkGrey} />
                }
              />
              <SingleShowCaseMenuItems
                label="Request Failed"
                icon={
                  <MaterialIcons
                    name="sms-failed"
                    size={18}
                    color={COLORS.darkGrey}
                  />
                }
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.earningsLabel}>PAYMENT DETAILS</Text>
              <MenuItemGroup style={styles.menuGroup}>
                <MenuItem name="Transaction History" icon="payments" />
                <MenuItem name="Bank Details" icon="add-card" />
              </MenuItemGroup>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 15,
    alignItems: "center",
  },
  activeTabIndicator: {
    marginTop: 5, // Space between text and border
    height: 3,
    width: "100%",
    backgroundColor: COLORS.brand,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    fontWeight: "700",
    paddingVertical: 5,
  },
  activeTabText: {
    color: COLORS.brand,
  },
  dateContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.lightGrey,
  },
  body: {
    paddingHorizontal: 20,
  },
  statsCard: {
    width: "100%",
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
  },
  statsItem: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  statsValueContainer: {
    backgroundColor: COLORS.lightGrey,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 5,
  },
  statsValue: {
    color: COLORS.black,
    fontWeight: "700",
  },
  statsLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
  },
  earningsContainer: {
    marginTop: 20,
    backgroundColor: COLORS.lightGrey,
    padding: 10,
    borderRadius: 10,
  },
  earningsLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
  earningsInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  earningsValue: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: "600",
  },
  earningsPercentage: {
    marginHorizontal: 10,
  },
  percentageText: {
    fontSize: 12,
  },
  earningsComparison: {
    color: COLORS.grey,
    fontSize: 12,
  },
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  chartLabelText: {
    color: COLORS.grey,
    fontSize: 12,
  },
  section: {
    marginTop: 20,
  },
  menuGroup: {
    marginBottom: 10,
  },
});

export default Earning;
