import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../contexts/BlogContext";
import { FontAwesome } from "@expo/vector-icons";
const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <Button title="Add a blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blog) => blog.title}
        renderItem={({ item }) => (
          <View style={styles.blogPost}>
            <Text style={styles.title}> {item.title}</Text>
            <TouchableOpacity
              onPress={() => {
                deleteBlogPost(item.id);
              }}
            >
              <FontAwesome name="trash-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  blogPost: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
});
