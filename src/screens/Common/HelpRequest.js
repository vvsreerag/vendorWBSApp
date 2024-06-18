import React, { useEffect, useState } from "react";
import {
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SubHeaderComponents from "../../components/SubHeaderComponents";
import { COLORS } from "../../constants";
import OutlinedTextInput from "../../components/Input/OutlinedTextInputComponents";
import OutlinedSelectInput from "../../components/Input/OutlinedSelectInputComponents";
import UploadComponents from "../../components/Input/UploadComponents";
import DiscardAlert from "../../components/Alert/DiscardAlert";
import { useNavigation } from "@react-navigation/native";

const HelpRequest = () => {
  const [category, setCategory] = useState("");
  const [discardModal, setDiscardModal] = useState(false);

  const navigation = useNavigation();

  const handleSelect = () => {};

  const handleSubmit = () => {
    // Handle submission logic
  };
  const handleDiscardContactForm = () => {
    setDiscardModal(false);
    navigation.goBack();
  };

  useEffect(() => {
    const backAction = () => {
      setDiscardModal(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <SubHeaderComponents
        discard
        callBackDiscard={() => setDiscardModal(true)}
      />
      <DiscardAlert
        visible={discardModal}
        onClose={setDiscardModal}
        onDiscard={handleDiscardContactForm}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Help Request</Text>
        <ScrollView>
          <OutlinedSelectInput
            label="Category"
            onSelect={handleSelect}
            defaultValue
          >
            <OutlinedSelectInput.Option
              label="Account"
              value="account"
              selected={true}
            />
            <OutlinedSelectInput.Option label="Payments" value="payments" />
            <OutlinedSelectInput.Option label="Requests" value="requests" />
            <OutlinedSelectInput.Option label="Others" value="other" />
          </OutlinedSelectInput>

          <OutlinedSelectInput
            label="Priority"
            onSelect={handleSelect}
            defaultValue
          >
            <OutlinedSelectInput.Option
              label="High"
              value="high"
              selected={true}
            />
            <OutlinedSelectInput.Option label="Medium" value="medium" />
            <OutlinedSelectInput.Option label="Low" value="low" />
          </OutlinedSelectInput>

          <OutlinedTextInput
            label="Detailed Description"
            value={category}
            onChangeText={(value) => setCategory(value)}
            multiline
          />

          <UploadComponents
            title="You can add a maximum of 5 images. (OPTIONAL)"
            buttonTitle="Add Image"
            multiUpload
            style={{ marginTop: 10 }}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.mainButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 100, // Adjust as needed to leave space for the bottom button
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  mainButton: {
    backgroundColor: COLORS.brand,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
});

export default HelpRequest;
