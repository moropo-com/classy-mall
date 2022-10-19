import React, { useCallback, useEffect } from "react";
import { TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { IconButton } from "react-native-paper";

export const Search = ({ search }) => {
  const [textInput, setTextInput] = useState("");
  const navigation = useNavigation();
  const searching = useSharedValue(false);
  useEffect(() => {
    search(textInput);
  }, [textInput]);

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerLeft: () => (
          <IconButton
            size={30}
            color="#333"
            icon={"magnify"}
            onPress={() => (searching.value = !searching.value)}
          />
        ),
      });
    }, [])
  );

  const searchStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: withSpring(searching.value ? 0 : -90),
  }));

  return (
    <Animated.View style={[styles.clearButton, searchStyle]}>
      <TextInput
        underlineColorAndroid="rgba(0,0,0,0)"
        value={textInput}
        style={styles.searchInput}
        onChangeText={setTextInput}
        placeholder="Search"
      />
      <MaterialIcons
        style={styles.clearIcon}
        onPress={() => setTextInput("")}
        name="clear"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    paddingLeft: 15,
    borderColor: "lightgrey",
    borderRadius: 50,
    borderWidth: 1,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 100,
  },
  clearIcon: {
    position: "absolute",
    color: "grey",
    right: 5,
    top: 3,
    fontSize: 30,
  },
  searchInput: {
    fontSize: 20,
    backgroundColor: "white",
  },
});
