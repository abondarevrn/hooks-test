import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id", null);
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { id: navigation.getParam("id", null) })}
      >
        <Feather style={styles.editIcon} name="edit-2" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  editIcon: {
    fontSize: 24,
    marginRight: 8
  }
});

export default ShowScreen;
