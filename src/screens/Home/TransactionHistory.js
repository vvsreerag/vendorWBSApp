import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";
import CurvyTextInputComponents from "../../components/Input/CurvyTextInputComponents";
import { MaterialIcons } from "@expo/vector-icons";
import TransactionItem from "../../components/Menu/TransactionItem";
import TransactionHistorySortBy from "../../components/Modal/TransactionHistorySortBy";
import TransactionDirectionFilter from "../../components/Modal/TransactionDirectionFilter";
import TransactionHistoryTypeFilter from "../../components/Modal/TransactionHistoryTypeFilter";
import TransactionHistoryDateFilter from "../../components/Modal/TransactionHistoryDateFilter";

const TransactionHistory = () => {
  const [sortByModal, setSortByModal] = useState(false);
  const [filterByDirectionModal, setFilterByDirectionModal] = useState(false);
  const [filterByTypeModal, setFilterByTypeModal] = useState(false);
  const [filterByDateModal, setFilterByDateModal] = useState(false);

  const [selectedDirectionFilter, setSelectedDirectionFilter] = useState(null);

  const handleSortByPress = () => {
    setSortByModal(!sortByModal);
  };
  const handleDirectionFilterPress = () => {
    setFilterByDirectionModal(!filterByDirectionModal);
  };
  const handleTypeFilterPress = () => {
    setFilterByTypeModal(!filterByTypeModal);
  };

  const handleDateFilterPress = () => {
    setFilterByDateModal(!filterByDateModal);
  };
  const filters = [
    {
      label: "Sort",
      icon: "filter-list",
      dropdown: true,
      onPress: () => handleSortByPress(),
    },
    {
      label: selectedDirectionFilter ? selectedDirectionFilter : "Direction",
      dropdown: !selectedDirectionFilter,
      onPress: () => handleDirectionFilterPress(),
      removeFilter: () => setSelectedDirectionFilter(null),
    },
    { label: "Type", dropdown: true, onPress: () => handleTypeFilterPress() },
    {
      label: "Date",
      dropdown: true,
      onPress: () => handleDateFilterPress(),
    },
  ];

  return (
    <View style={styles.container}>
      <TransactionHistorySortBy
        isOpenModal={sortByModal}
        closeModal={() => handleSortByPress()}
      />
      <TransactionDirectionFilter
        isOpenModal={filterByDirectionModal}
        closeModal={() => handleDirectionFilterPress()}
        getCheckedValue={setSelectedDirectionFilter}
        value={selectedDirectionFilter}
      />
      <TransactionHistoryTypeFilter
        isOpenModal={filterByTypeModal}
        closeModal={() => handleTypeFilterPress()}
      />
      <TransactionHistoryDateFilter
        isOpenModal={filterByDateModal}
        closeModal={() => handleDateFilterPress()}
      />
      <SubHeaderComponents download />
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Transaction History</Text>
        <CurvyTextInputComponents
          placeholder="Search by Transaction Number"
          style={styles.margin}
        />
        <View style={styles.filterContainer}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              style={styles.filterButton}
              onPress={filter.dropdown ? filter.onPress : filter.removeFilter}
            >
              {filter.icon && (
                <MaterialIcons
                  name={filter.icon}
                  size={16}
                  color={COLORS.black}
                />
              )}
              <Text style={styles.filterText}>{filter.label}</Text>

              <MaterialIcons
                name={filter.dropdown ? "arrow-drop-down" : "close"}
                size={filter.dropdown ? 18 : 14}
                color={COLORS.black}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.margin}>
          <Text style={{ fontSize: 11, color: COLORS.darkGrey }}>
            Data shown for last 6 months | 124 transactions
          </Text>
        </View>
        <View style={styles.margin}>
          <ScrollView>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
          </ScrollView>
        </View>
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
  },
  headerText: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: "700",
  },
  margin: {
    marginTop: 15,
  },
  filterContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  filterButton: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  filterText: {
    color: COLORS.black,
    fontSize: 12,
    marginLeft: 5,
    marginRight: 5,
  },
});

export default TransactionHistory;
