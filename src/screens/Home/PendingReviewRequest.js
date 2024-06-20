import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import RequestItem from "../../components/Menu/RequestItem";
import WBCheckBox from "../../components/WBCheckBox";
import { Ionicons } from "@expo/vector-icons";

const PendingReviewRequest = () => {
  //   const [checkedItems, setCheckedItems] = useState({});

  //   const toggleCheckbox = (id) => {
  //     setCheckedItems((prevState) => ({
  //       ...prevState,
  //       [id]: !prevState[id],
  //     }));
  //   };

  //   const handleSelectAll = () => {
  //     const newCheckedItems = {};
  //     if (Object.values(checkedItems).some((value) => value)) {
  //       // Deselect all
  //       setCheckedItems({});
  //     } else {
  //       // Select all
  //       [1, 2, 3, 4, 5, 6].forEach((id) => {
  //         newCheckedItems[id] = true;
  //       });
  //       setCheckedItems(newCheckedItems);
  //     }
  //   };

  //   const isAnySelected = Object.values(checkedItems).some((value) => value);

  return (
    <View style={styles.container}>
      <SubHeaderComponents />
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Review Requests</Text>
          {/* <TouchableOpacity onPress={handleSelectAll}>
            <Text style={styles.selectAllText}>
              {isAnySelected ? "Deselect All" : "Select All"}
            </Text>
          </TouchableOpacity> */}
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <View key={id} style={styles.requestItemContainer}>
              <RequestItem fullWidth />
              {/* <WBCheckBox
                isChecked={!!checkedItems[id]}
                onPress={() => toggleCheckbox(id)}
              /> */}
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            styles.rejectButton,
            !isAnySelected && { borderColor: COLORS.lightGrey },
          ]}
          disabled={!isAnySelected}
        >
          <Ionicons
            name="close"
            size={20}
            color={!isAnySelected ? COLORS.grey : COLORS.brand}
          />
          <Text
            style={[
              styles.rejectButtonText,
              !isAnySelected && { color: COLORS.grey },
            ]}
          >
            Reject
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.mainButton,
            !isAnySelected && { backgroundColor: COLORS.lightGrey },
          ]}
          disabled={!isAnySelected}
        >
          <Ionicons
            name="checkmark-sharp"
            size={20}
            color={!isAnySelected ? COLORS.grey : COLORS.white}
          />
          <Text
            style={[
              styles.buttonText,
              !isAnySelected && { color: COLORS.grey },
            ]}
          >
            Accept
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.black,
  },
  selectAllText: {
    fontWeight: "700",
    color: COLORS.brand,
  },
  content: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  scrollContent: {
    gap: 10,
    paddingBottom: 20,
  },
  requestItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGrey,
    gap: 20,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flex: 1,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
  rejectButtonText: {
    color: COLORS.brand,
    fontWeight: "bold",
  },
  rejectButton: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
  },
  disabledButton: {
    backgroundColor: COLORS.grey,
    borderColor: COLORS.grey,
  },
});

export default PendingReviewRequest;
