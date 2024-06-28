/** @format */

import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Svg, { Rect, Text as SvgText, Path } from "react-native-svg";

const AESDiagram = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.diagramContainer}>
        <Svg height="350" width="350">
          {/* Title */}
          <SvgText
            x="175"
            y="30"
            fontSize="20"
            fontWeight="bold"
            textAnchor="middle"
            fill="blue"
          >
            AES Design
          </SvgText>

          {/* Secret Key */}
          <Rect x="30" y="70" width="130" height="50" fill="green" />
          <SvgText
            x="95"
            y="100"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Secret Key
          </SvgText>

          {/* Plain Text */}
          <Rect x="190" y="70" width="130" height="50" fill="green" />
          <SvgText
            x="255"
            y="100"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Plain Text
          </SvgText>

          {/* Arrow from Secret Key to Cipher */}
          <Path
            d="M95 120 V170 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Arrow from Plain Text to Cipher */}
          <Path
            d="M255 120 V170 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Cipher */}
          <Rect x="80" y="170" width="190" height="50" fill="green" />
          <SvgText
            x="175"
            y="200"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Cipher
          </SvgText>

          {/* Arrow from Cipher to Cipher Text */}
          <Path d="M175 220 V270" stroke="black" strokeWidth="2" fill="none" />

          {/* Cipher Text */}
          <Rect x="80" y="270" width="190" height="50" fill="blue" />
          <SvgText
            x="175"
            y="300"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Cipher Text
          </SvgText>

          {/* Key Sizes */}
          <SvgText
            x="10"
            y="90"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            128 bit
          </SvgText>
          <SvgText
            x="10"
            y="110"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            192 bit
          </SvgText>
          <SvgText
            x="10"
            y="130"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            256 bit
          </SvgText>

          <SvgText
            x="310"
            y="90"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
            fill="black"
          >
            128 bit
          </SvgText>
          <SvgText
            x="310"
            y="110"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
            fill="black"
          >
            192 bit
          </SvgText>
          <SvgText
            x="310"
            y="130"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
            fill="black"
          >
            256 bit
          </SvgText>
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

export default AESDiagram;
