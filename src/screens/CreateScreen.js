import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../contexts/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      <Button
        title="Save"
        onPress={() => {
          addBlogPost({ title, content }, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
