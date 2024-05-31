import React, { useEffect, useState } from "react";
import { Pressable, View, Animated, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const SwitchComponent = (props) => {
  const { value, onValueChange } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 21],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.darkGrey, COLORS.green],
  });

  const borderColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.darkGrey, COLORS.green],
  });

  const toggleSwitch = () => {
    onValueChange(!value);
  };

  return (
    <View>
      <Pressable onPress={toggleSwitch} style={styles.pressable}>
        <Animated.View
          style={[styles.container, { backgroundColor, borderColor }]}
        >
          <View style={styles.innerContainer}>
            <Animated.View
              style={{
                transform: [{ translateX }],
              }}
            >
              <View style={styles.thumb} />
            </Animated.View>
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: 48,
    height: 28,
    borderRadius: 15,
  },
  container: {
    borderRadius: 15,
    borderWidth: 2,
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    position: "relative",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: COLORS.white,
  },
});

export default SwitchComponent;
