import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, ROUTES } from "../../constants";
import { IMAGE } from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const LandingPage = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the first duplicate item

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length + 1 ? 1 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * screenWidth,
        animated: true,
      });
    }
  }, [currentIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);

    if (index === 0) {
      scrollViewRef.current.scrollTo({
        x: carouselItems.length * screenWidth,
        animated: false,
      });
      setCurrentIndex(carouselItems.length);
    } else if (index === carouselItems.length + 1) {
      scrollViewRef.current.scrollTo({
        x: screenWidth,
        animated: false,
      });
      setCurrentIndex(1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGrey} />
      <View style={styles.landingHeader}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {[
            ...carouselItems.slice(-1),
            ...carouselItems,
            ...carouselItems.slice(0, 1),
          ].map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              <View style={{ backgroundColor: COLORS.lightGrey }}>
                <Image source={item.image} style={styles.headerImage} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.heading}>{item.heading}</Text>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.landingFooter}>
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text style={styles.whiteText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.mainButton, styles.secondaryButton]}
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.brandText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const carouselItems = [
  {
    image: IMAGE.landingImage1,
    heading: "Manage your orders in one place",
    content:
      "You can easily accept or reject requests according to your availability, and keep track of any pending orders.",
  },
  {
    image: IMAGE.landingImage2,
    heading: "Secure Payment",
    content:
      "Get your commission for printing tickets and your winnings from national lottery credited to your account",
  },
  // Add more items as needed
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  landingHeader: {
    flex: 0.8,
  },
  landingFooter: {
    flex: 0.2,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  carouselItem: {
    width: screenWidth,
  },
  headerImage: {
    width: screenWidth,
    height: screenHeight * 0.65,
    resizeMode: "contain",
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  contentText: {
    fontSize: 14,
    color: COLORS.grey,
  },
  section: {
    paddingHorizontal: 20,
  },
  whiteText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.white,
  },
  brandText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.brand,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.brand,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
  },
});

export default LandingPage;
