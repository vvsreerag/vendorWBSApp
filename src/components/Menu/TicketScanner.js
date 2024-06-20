import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import DocumentScanner from "react-native-document-scanner-plugin";
const TicketScanner = () => {
  const [scannedImage, setScannedImage] = useState();
  const scanDocument = async () => {
    const { scannedImages } = await DocumentScanner.scanDocument({
      croppedImageQuality: 100,
    });

    if (scannedImages.length > 0) {
      setScannedImage(scannedImages[0]);
    }
  };
  useEffect(() => {
    scanDocument();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {scanDocument != null && (
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: scannedImage }}
        />
      )}
      {/* <TouchableOpacity onPress={() => scanDocument()}>
        <Text>Scan</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default TicketScanner;
