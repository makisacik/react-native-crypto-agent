/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Text as SvgText, Line } from "react-native-svg";

interface CircularAlphabetProps {
  shift: number;
}

const CircularAlphabet: React.FC<CircularAlphabetProps> = ({ shift }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const radiusOuter = 105;
  const radiusInner = 80;
  const center = 120;
  const lineOffsetOuter = 8;
  const lineOffsetInner = 8;

  const getShiftedAlphabet = () => {
    return alphabet
      .split("")
      .map((char, index) => {
        const shiftedIndex = (index + shift) % 26;
        return alphabet[shiftedIndex];
      })
      .join("");
  };

  const shiftedAlphabet = getShiftedAlphabet();

  return (
    <View style={styles.container}>
      <Svg height={2 * center} width={2 * center}>
        {alphabet.split("").map((char, index) => {
          const angle = (index / 26) * 2 * Math.PI - Math.PI / 2;
          const xOuter = center + radiusOuter * Math.cos(angle);
          const yOuter = center + radiusOuter * Math.sin(angle);
          const xInner = center + radiusInner * Math.cos(angle);
          const yInner = center + radiusInner * Math.sin(angle);
          const xOuterLine =
            center + (radiusOuter - lineOffsetOuter) * Math.cos(angle);
          const yOuterLine =
            center + (radiusOuter - lineOffsetOuter) * Math.sin(angle);
          const xInnerLine =
            center + (radiusInner + lineOffsetInner) * Math.cos(angle);
          const yInnerLine =
            center + (radiusInner + lineOffsetInner) * Math.sin(angle);
          const shiftedChar = shiftedAlphabet[index];

          return (
            <React.Fragment key={index}>
              <SvgText
                x={xOuter}
                y={yOuter}
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="black"
              >
                {char}
              </SvgText>
              <SvgText
                x={xInner}
                y={yInner}
                fontSize="14"
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="black"
              >
                {shiftedChar}
              </SvgText>
              <Line
                x1={xOuterLine}
                y1={yOuterLine}
                x2={xInnerLine}
                y2={yInnerLine}
                stroke="black"
                strokeWidth="0.5"
              />
            </React.Fragment>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CircularAlphabet;
