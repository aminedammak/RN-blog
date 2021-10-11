import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../contexts/BlogContext";

const CreateScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const { title, content } = state.find((item) => item.id === id);

  const onSubmit = (title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.navigate("Index");
    });
  };
  return (
    <BlogPostForm onSubmit={onSubmit} initialValues={{ title, content }} />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
