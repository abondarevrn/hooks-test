import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { BlogPostForm } from "../components";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam("id", null));

  return <BlogPostForm />;
};

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  input: {
    fontSize: 20,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "black"
  },
  label: {
    fontSize: 20,
    marginBottom: 4
  }
});

export default EditScreen;
