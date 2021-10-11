import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../contexts/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const onSubmit = (title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate("Index");
    });
  };
  return <BlogPostForm onSubmit={onSubmit} />;
};

export default CreateScreen;

const styles = StyleSheet.create({});
