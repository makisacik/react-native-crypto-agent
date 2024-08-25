/** @format */
// CHARACTER COMPONENT TO DISPLAY CHARACTER IMAGE AND NAME

import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Character = ({
  image,
  name,
  onPress,
}: {
  image: any;
  name: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Character;
