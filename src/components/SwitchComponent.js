import React, { useEffect, useState } from "react";
import {
  Pressable,
  View,
  Animated,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { COLORS } from "../constants";

const SwitchComponent = (props) => {
  const { value, onValueChange } = props;
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    // Update the animated value when the value prop changes
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200, // Adjust the animation duration
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 21], // Adjust the distance of the switch head
  });

  const toggleSwitch = () => {
    const newValue = !value;
    onValueChange(newValue);
  };

  return (
    <View>
      <Pressable onPress={toggleSwitch} style={styles.pressable}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Animated.View
              style={{
                transform: [{ translateX }],
              }}
            >
              <View style={styles.thumb} />
            </Animated.View>
          </View>
        </View>
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
    borderColor: COLORS.darkGrey,
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
    backgroundColor: COLORS.darkGrey,
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

export default SwitchComponent;
