import React from "react";
import { View, StyleSheet } from "react-native";
import { Skeleton } from "@rneui/themed"; // Assuming you are using @rneui/themed Skeleton
import { COLORS } from "../constants"; // Ensure this path is correct

const RequestSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Skeleton
          width={250}
          height={15}
          skeletonStyle={styles.skeletonStyle}
        />
        <Skeleton
          width={250}
          height={15}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={styles.border}>
        <Skeleton
          width={250}
          height={15}
          skeletonStyle={styles.skeletonStyle}
        />
        <Skeleton
          width={250}
          height={15}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={styles.row}>
        <View style={{ gap: 10 }}>
          <Skeleton
            width={160}
            height={15}
            skeletonStyle={styles.skeletonStyle}
          />
          <Skeleton
            width={160}
            height={15}
            skeletonStyle={styles.skeletonStyle}
          />
        </View>
        <View style={{ gap: 10 }}>
          <Skeleton
            width={160}
            height={15}
            skeletonStyle={styles.skeletonStyle}
          />
          <Skeleton
            width={160}
            height={15}
            skeletonStyle={styles.skeletonStyle}
          />
        </View>
      </View>
      <View style={{ ...styles.row, justifyContent: "center", marginTop: 10 }}>
        <Skeleton
          width={100}
          height={30}
          skeletonStyle={styles.skeletonStyle}
        />
        <Skeleton
          width={100}
          height={30}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: COLORS.border,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    marginRight: 10,
    marginHorizontal: 20,
    gap: 10,
  },
  skeletonStyle: {
    backgroundColor: COLORS.lightGrey,
  },
  border: {
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
    gap: 10,
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
});

export default RequestSkeleton;
