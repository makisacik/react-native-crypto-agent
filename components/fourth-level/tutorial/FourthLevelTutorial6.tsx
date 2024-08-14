/** @format */

import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";

const FourthLevelTutorial6 = () => {
  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Diving Deeper into SHA-3</Text>
        <View style={styles.container}>
          <Text style={styles.text}>
            Now that we have a basic understanding of what SHA-3 is, let's dive
            deeper into the core mechanism that makes SHA-3 both unique and
            powerful: the{" "}
            <Text style={styles.bold}>Keccak sponge function</Text>.
          </Text>

          <Text style={styles.subtitle}>The Keccak Sponge Function</Text>
          <Text style={styles.text}>
            The Keccak sponge function is the heart of SHA-3. Unlike the
            Merkle-Damgård construction used in SHA-1 and SHA-2, Keccak uses a
            sponge construction, which is divided into two phases:
            <Text style={styles.bold}> absorption</Text> and{" "}
            <Text style={styles.bold}>squeezing</Text>.
          </Text>
          <Image
            source={require("../../../assets/sponge-function.png")}
            style={styles.image}
          />
          <Text style={styles.imageCaption}>
            The structure of the Keccak Sponge Function
          </Text>
          <Text style={styles.text}>
            In the <Text style={styles.bold}>absorption</Text> phase, the input
            message is XORed into the initial portion of the state, and then the
            state is iteratively transformed using a permutation function. This
            step is repeated until all input blocks are processed.
          </Text>
          <Text style={styles.text}>
            The <Text style={styles.bold}>squeezing</Text> phase begins once the
            entire message has been absorbed. The final hash value is produced
            by extracting output blocks from the state, which is again permuted
            between each block extraction.
          </Text>

          <Text style={styles.subtitle}>Why is SHA-3 Different?</Text>
          <Text style={styles.text}>
            Unlike SHA-2, where the internal state size is fixed, SHA-3 allows
            flexibility in the capacity and rate, enabling a trade-off between
            security and speed. This flexibility makes SHA-3 adaptable to a
            wider range of applications, including those requiring lightweight
            cryptography.
          </Text>
          <Text style={styles.text}>
            Moreover, the Keccak function is inherently resistant to length
            extension attacks, a vulnerability that affects the Merkle-Damgård
            construction used in SHA-1 and SHA-2.
          </Text>

          <Text style={styles.subtitle}>Applications of SHA-3</Text>
          <Text style={styles.text}>
            Given its unique structure, SHA-3 is not just a hashing algorithm;
            it can be adapted for other cryptographic primitives such as
            pseudo-random number generation, stream ciphers, and even message
            authentication codes (MACs). Its versatility and security make it a
            strong candidate for future cryptographic applications, especially
            in a world preparing for quantum computing.
          </Text>
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "UbuntuBold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
    textAlign: "left",
  },
  bold: {
    fontFamily: "UbuntuBold",
    textAlign: "left",
  },
  buttonLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  imageCaption: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
    color: "#555",
    textAlign: "center",
  },
});

export default FourthLevelTutorial6;
