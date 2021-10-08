import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Context } from "../contexts/BlogContext";

const CreateScreen = ({ navigation, route }) => {
  const { state, addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (route.params?.hasOwnProperty("id")) {
      const id = route.params.id;
      const editPost = state.find((item) => {
        return item.id === id;
      });
      if (editPost) {
        setTitle(editPost.title);
        setContent(editPost.content);
      }
    }
  }, []);

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
