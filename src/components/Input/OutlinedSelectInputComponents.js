import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const OptionModal = ({
  visible,
  options,
  onSelect,
  onClose,
  selectedValue,
  label,
}) => (
  <Modal
    animationType="fade"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{label || "Select an Option"}</Text>
        </View>
        <View style={styles.modalContent}>
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  item.value === selectedValue ? styles.selectedOption : null,
                ]}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  </Modal>
);

const OutlinedSelectInput = ({
  label,
  onSelect,
  children,
  defaultValue = null,
  placeHolder,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = React.Children.map(children, (child) => child.props);

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find((option) => option?.selected == true);
      if (defaultOption) {
        setSelectedOption(defaultOption.label);
        onSelect(defaultOption);
      }
    }
  }, [defaultValue]);

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    onSelect(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.label}>{label}</Text>
        <Text>{selectedOption || placeHolder || "Select an option"}</Text>
        <Ionicons name="chevron-down" size={20} color={COLORS.black} />
      </TouchableOpacity>

      <OptionModal
        visible={isModalVisible}
        options={options}
        onSelect={handleSelect}
        onClose={() => setIsModalVisible(false)}
        selectedValue={
          options.find((option) => option.label === selectedOption)?.value
        }
        label={label}
      />
    </View>
  );
};

OutlinedSelectInput.Option = ({ label, value }) => null;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
  },
  label: {
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
    position: "absolute",
    left: 12,
    top: -10,
    fontSize: 11,
  },
  selectContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 2,
    padding: 13,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  modalContent: {
    marginTop: 10,
  },
  option: {
    padding: 10,
  },
  selectedOption: {
    backgroundColor: COLORS.lightGrey,
  },
  header: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 5,
  },
});

export default OutlinedSelectInput;
