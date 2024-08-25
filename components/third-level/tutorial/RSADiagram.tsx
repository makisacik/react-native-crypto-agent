/** @format */
//RSA DIAGRAM CREATED USING SVG COMPONENTS

import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Svg, { Rect, Text as SvgText, Path } from "react-native-svg";

const RSADiagram = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.diagramContainer}>
        <Svg height="480" width="350">
          {/* Public Key */}
          <Rect x="30" y="0" width="130" height="50" fill="green" />
          <SvgText
            x="95"
            y="30"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Public Key
          </SvgText>

          {/* Plain Text */}
          <Rect x="190" y="0" width="130" height="50" fill="green" />
          <SvgText
            x="255"
            y="30"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Plain Text
          </SvgText>

          {/* Arrow from Public Key to Cipher */}
          <Path
            d="M95 50 V100 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Arrow from Plain Text to Cipher */}
          <Path
            d="M255 50 V100 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Cipher */}
          <Rect x="80" y="100" width="190" height="50" fill="green" />
          <SvgText
            x="175"
            y="130"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Cipher
          </SvgText>

          {/* Arrow from Cipher to Cipher Text */}
          <Path d="M175 150 V200" stroke="black" strokeWidth="2" fill="none" />

          {/* Cipher Text */}
          <Rect x="80" y="200" width="190" height="50" fill="blue" />
          <SvgText
            x="175"
            y="230"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Cipher Text
          </SvgText>

          {/* Arrow from Cipher Text to Decryption */}
          <Path d="M175 250 V300" stroke="black" strokeWidth="2" fill="none" />

          {/* Private Key */}
          <Rect x="30" y="300" width="130" height="50" fill="orange" />
          <SvgText
            x="95"
            y="330"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Private Key
          </SvgText>

          {/* Decrypted Text */}
          <Rect x="190" y="300" width="130" height="50" fill="orange" />
          <SvgText
            x="255"
            y="330"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Decrypted Text
          </SvgText>

          {/* Arrow from Cipher Text to Decryption */}
          <Path
            d="M95 350 V400 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Arrow from Private Key to Decryption */}
          <Path
            d="M255 350 V400 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        </Svg>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  diagramContainer: {
    marginBottom: 20,
  },
});

export default RSADiagram;
