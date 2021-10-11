import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text>Enter title</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Text>Enter content</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = { initialValues: { title: "", content: "" } };

export default BlogPostForm;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
