import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../contexts/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  const blogPost = state.find((item) => item.id === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Edit", { id });
          }}
        >
          <Feather name="edit-2" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
