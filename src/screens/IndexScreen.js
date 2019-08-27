import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        style
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate("Show", { id: item.id })}>
              <View style={[styles.row, { borderTopWidth: index === 0 ? 1 : 0 }]}>
                <Text style={styles.title}>{`${item.title} - ${item.id}`}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.deleteIcon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather style={styles.createIcon} name="plus" size={30} />
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  title: {
    fontSize: 18
  },
  deleteIcon: {
    fontSize: 24
  },
  createIcon: {
    fontSize: 24,
    marginRight: 8
  }
});

export default IndexScreen;
