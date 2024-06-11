import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import DeleteTicketModal from "./Modal/DeleteTicketModal";

const SubHeaderComponents = ({
  download,
  discard,
  callBackDiscard,
  deleteContent,
}) => {
  const navigation = useNavigation();

  const [isOpenDeletedModal, setIsOpenDeleteModal] = useState(false);
  return (
    <View>
      {deleteContent && (
        <DeleteTicketModal
          isOpenModal={isOpenDeletedModal}
          closeModal={() => setIsOpenDeleteModal(false)}
        />
      )}
      <View style={{ backgroundColor: COLORS.white }}>
        <View
          style={{
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() =>
                discard ? callBackDiscard() : navigation.goBack()
              }
            >
              <Ionicons
                name="arrow-back-outline"
                size={24}
                color={COLORS.grey}
              />
            </TouchableOpacity>

            {download && (
              <TouchableOpacity>
                <MaterialIcons
                  name="file-download"
                  size={24}
                  color={COLORS.grey}
                />
              </TouchableOpacity>
            )}
            {deleteContent && (
              <TouchableOpacity onPress={() => setIsOpenDeleteModal(true)}>
                <Octicons name="trash" size={24} color={COLORS.grey} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubHeaderComponents;
