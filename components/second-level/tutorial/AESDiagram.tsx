/** @format */
// AES DIAGRAM TO DISPLAY THE AES ENCRYPTION PROCESS

import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Svg, { Rect, Text as SvgText, Path } from "react-native-svg";

const AESDiagram = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.diagramContainer}>
        <Svg height="300" width="350">
          {/* Secret Key */}
          <Rect x="30" y="20" width="130" height="50" fill="green" />
          <SvgText
            x="95"
            y="50"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Secret Key
          </SvgText>

          {/* Plain Text */}
          <Rect x="190" y="20" width="130" height="50" fill="green" />
          <SvgText
            x="255"
            y="50"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Plain Text
          </SvgText>

          {/* Arrow from Secret Key to Cipher */}
          <Path
            d="M95 70 V120 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Arrow from Plain Text to Cipher */}
          <Path
            d="M255 70 V120 H175"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />

          {/* Cipher */}
          <Rect x="80" y="120" width="190" height="50" fill="green" />
          <SvgText
            x="175"
            y="150"
            fontSize="15"
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            Cipher
          </SvgText>

          {/* Arrow from Cipher to Cipher Text */}
          <Path d="M175 170 V220" stroke="black" strokeWidth="2" fill="none" />

          {/* Cipher Text */}
          <Rect x="80" y="220" width="190" height="50" fill="blue" />
          <SvgText
            x="175"
            y="250"
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
            y="40"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            128 bit
          </SvgText>
          <SvgText
            x="10"
            y="60"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            192 bit
          </SvgText>
          <SvgText
            x="10"
            y="80"
            fontSize="10"
            fontWeight="bold"
            textAnchor="start"
            fill="black"
          >
            256 bit
          </SvgText>

          <SvgText
            x="310"
            y="40"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
            fill="black"
          >
            128 bit
          </SvgText>
          <SvgText
            x="310"
            y="60"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
            fill="black"
          >
            192 bit
          </SvgText>
          <SvgText
            x="310"
            y="80"
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
