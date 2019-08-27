import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { BlogPostForm } from "../components";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default CreateScreen;
