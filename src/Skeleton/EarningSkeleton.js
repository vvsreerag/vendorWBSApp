import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Skeleton } from "@rneui/themed"; // Assuming you are using @rneui/themed Skeleton
import { COLORS } from "../constants";

const EarningSkeleton = () => {
  return (
    <View>
      <Skeleton
        width={"100%"}
        height={35}
        skeletonStyle={styles.skeletonStyle}
      />

      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Skeleton
          width={"100%"}
          height={70}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Skeleton
          width={"100%"}
          height={250}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.earningsLabel}>EARNING SPLIT</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Skeleton
          width={"100%"}
          height={40}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Skeleton
          width={"100%"}
          height={40}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Skeleton
          width={"100%"}
          height={40}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={styles.earningsLabel}>PAYMENT DETAILS</Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Skeleton
          width={"100%"}
          height={45}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 10 }}>
        <Skeleton
          width={"100%"}
          height={45}
          skeletonStyle={styles.skeletonStyle}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  skeletonStyle: {
    backgroundColor: COLORS.lightGrey,
  },
  earningsLabel: {
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default EarningSkeleton;
