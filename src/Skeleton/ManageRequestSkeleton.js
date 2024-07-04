import React from "react";
import { View, StyleSheet } from "react-native";
import { Skeleton } from "@rneui/themed";
import { COLORS } from "../constants";

const ManageRequestSkeleton = () => {
  return (
    <View style={{ gap: 10 }}>
      <View style={styles.container}>
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
      <View style={styles.container}>
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
      <View style={styles.container}>
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
      <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    borderColor: COLORS.border,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    marginRight: 10,
    gap: 10,
  },
  skeletonStyle: {
    backgroundColor: COLORS.lightGrey,
  },
});

export default ManageRequestSkeleton;
