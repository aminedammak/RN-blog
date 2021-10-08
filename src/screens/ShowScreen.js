import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../contexts/BlogContext";

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  const blogPost = state.find((item) => item.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
