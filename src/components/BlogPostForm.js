import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)} />
      <Button title="Save" onPress={() => {}} />
    </View>
  );
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

export default BlogPostForm;
