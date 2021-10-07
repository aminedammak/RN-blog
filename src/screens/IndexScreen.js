import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import BlogContext from "../contexts/BlogContext";
const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add a blog" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => <Text> {item.title}</Text>}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
