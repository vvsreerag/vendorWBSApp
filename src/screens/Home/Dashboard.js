import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import MainHeaderComponents from "../../components/MainHeaderComponents";
import RequestItem from "../../components/Menu/RequestItem";
import CurvyTextInputComponents from "../../components/Input/CurvyTextInputComponents";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsContainer}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            {
              borderColor: COLORS.border,
              backgroundColor:
                activeTab === index ? COLORS.lightGrey : COLORS.white,
            },
          ]}
          onPress={() => setActiveTab(index)}
        >
          <Text style={styles.tabText}>{tab.label}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{tab.count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isReviewRequest, setIsReviewRequest] = useState(true);

  const navigation = useNavigation();

  const tabs = [
    { label: "To Do", count: 10 },
    { label: "Print Complete", count: 10 },
    { label: "Completed", count: 10 },
  ];

  const items = [
    { id: 1, status: "To Do", text: "Item 1", scanned: 0, total: 60 },
    { id: 2, status: "To Do", text: "Item 2", scanned: 10, total: 50 },
    { id: 3, status: "To Do", text: "Item 2", scanned: 10, total: 50 },
    { id: 4, status: "To Do", text: "Item 2", scanned: 10, total: 50 },
    { id: 5, status: "To Do", text: "Item 2", scanned: 10, total: 50 },
    { id: 6, status: "Print Complete", text: "Item 3", scanned: 30, total: 60 },
    { id: 7, status: "Completed", text: "Item 4", scanned: 60, total: 60 },
    // Add more items as needed
  ];

  const filteredItems = items.filter(
    (item) => item.status === tabs[activeTab].label
  );

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGrey }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <MainHeaderComponents />
      {isReviewRequest && (
        <View style={styles.section}>
          <Text style={[styles.label, { paddingLeft: 20 }]}>
            REVIEW REQUESTS
          </Text>
          <View style={{ justifyContent: "flex-start", marginBottom: 20 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              scrollEventThrottle={16}
              snapToInterval={width * 0.8 + 10}
              decelerationRate="fast"
              contentContainerStyle={styles.horizontalScrollView}
            >
              <RequestItem />
              <RequestItem />
              <RequestItem />
            </ScrollView>
          </View>
          <View
            style={{
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.PENDING_REVIEW_REQUEST)}
            >
              <Text style={{ color: COLORS.brand, fontWeight: "700" }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={[styles.section, styles.manageRequestsSection]}>
        <Text style={styles.label}>MANAGE REQUESTS</Text>
        <CurvyTextInputComponents placeholder="Search by Syndicate Number" />
        <View>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredItems.map((item) => {
              const progress = (item.scanned / item.total) * 100;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.itemContainer}
                  onPress={() => navigation.navigate(ROUTES.COMPLETED_REQUESTS)}
                >
                  <View
                    style={[
                      styles.itemContainerContent,
                      item.status === "Completed" && {
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                      },
                    ]}
                  >
                    {item.status === "Completed" ? (
                      <MaterialCommunityIcons
                        name="progress-check"
                        size={20}
                        color={COLORS.grey}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="progress-clock"
                        size={20}
                        color={COLORS.grey}
                      />
                    )}

                    <View style={{ alignItems: "flex-start" }}>
                      <Text style={styles.itemTitle}>SYN123323423</Text>
                      <Text style={styles.itemDescription}>
                        Request Date 24 May 2024, 13:20
                      </Text>
                    </View>
                    {item.status !== "Completed" && (
                      <View style={{ alignItems: "flex-end" }}>
                        <View
                          style={[
                            styles.button,
                            { backgroundColor: COLORS.errorBackground },
                          ]}
                        >
                          <Text
                            style={{ fontSize: 14, color: COLORS.errorText }}
                          >
                            2D : 01H : 32M
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                  {item.status !== "Completed" && (
                    <View style={{ paddingHorizontal: 20 }}>
                      <View
                        style={{
                          borderRadius: 20,
                          backgroundColor: COLORS.white,
                          height: 7,
                          overflow: "hidden",
                        }}
                      >
                        <View
                          style={{
                            width: `${progress}%`,
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
                        <Text style={{ color: COLORS.black, fontSize: 14 }}>
                          {item.scanned} scanned
                        </Text>
                        <Text style={{ color: COLORS.black, fontSize: 14 }}>
                          {item.total - item.scanned} tickets left
                        </Text>
                      </View>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingTop: 10,
  },
  label: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
  horizontalScrollView: {
    paddingRight: 10,
    paddingLeft: 20,
  },
  itemTitle: {
    fontWeight: "700",
    fontSize: 15,
    color: COLORS.black,
  },
  itemDescription: {
    fontSize: 14,
    color: COLORS.grey,
  },
  manageRequestsSection: {
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 10,
    height: 60,
  },
  tab: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  tabText: {
    color: COLORS.black,
    fontWeight: "700",
    fontSize: 14,
  },
  badge: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 20,
    padding: 3,
    marginLeft: 10,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.darkGrey,
  },
  scrollViewContent: {
    alignItems: "flex-start", // Align items to the start of the scroll view
  },
  itemContainer: {
    backgroundColor: COLORS.lightGrey,
    borderRadius: 15,
    padding: 2,
    marginTop: 10,
    width: "100%",
  },
  itemContainerContent: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    gap: 10,
  },
});

export default Dashboard;
