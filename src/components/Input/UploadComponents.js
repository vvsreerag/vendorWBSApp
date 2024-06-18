import React, { useState, useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";

const UploadComponents = ({
  title = "Title",
  buttonTitle = "Add File",
  style,
  multiUpload = false,
  maxFiles = 5,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = useCallback(() => {
    if (uploadedFiles.length < maxFiles) {
      const newFile = {
        id: uploadedFiles.length + 1,
        name: `BusinessDocument${uploadedFiles.length + 1}.pdf`,
        size: "200 KB",
      };
      setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
    }
  }, [uploadedFiles, maxFiles]);

  const handleDelete = useCallback((id) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
  }, []);

  return (
    <View>
      <Text style={[styles.title, style]}>{title}</Text>

      {((!multiUpload && uploadedFiles.length === 0) ||
        (multiUpload && uploadedFiles.length < maxFiles)) && (
        <TouchableOpacity onPress={handleUpload} style={styles.uploadButton}>
          <Ionicons name="add" size={18} color={COLORS.brand} />
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
      )}

      {uploadedFiles.map((file) => (
        <View key={file.id} style={styles.fileContainer}>
          <View style={styles.fileDetails}>
            <Ionicons name="document-text" size={24} color="black" />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{file.name}</Text>
              <Text style={styles.fileSize}>{file.size}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handleDelete(file.id)}>
            <Ionicons name="trash-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: COLORS.grey,
    marginRight: 30,
  },
  uploadButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 120,
    borderColor: COLORS.brand,
    borderRadius: 50,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTitle: {
    color: COLORS.brand,
    marginLeft: 5,
    fontWeight: "600",
  },
  fileContainer: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fileDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  fileInfo: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10,
  },
  fileName: {
    fontSize: 12,
  },
  fileSize: {
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default UploadComponents;
