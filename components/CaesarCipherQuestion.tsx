/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Card,
  TextInput,
  Button,
  Paragraph,
  IconButton,
  Provider as PaperProvider,
} from "react-native-paper";
import Modal from "react-native-modal";
import CircularAlphabet from "./first-level/CircularAlphabet";
import SuccessAnimation from "./animations/SuccessAnimation";
import IncorrectAnimation from "./animations/IncorrectAnimation";

interface CaesarCipherQuestionProps {
  isEncoding: boolean;
  text: string;
  onCorrectAnswer: () => void;
  shift: number;
}

const CaesarCipherQuestion: React.FC<CaesarCipherQuestionProps> = ({
  isEncoding,
  text,
  onCorrectAnswer,
  shift,
}) => {
  const [inputText, setInputText] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showIncorrect, setShowIncorrect] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccess || showIncorrect) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        setShowIncorrect(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, showIncorrect]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const encodeCaesarCipher = (text: string): string => {
    return text.toLowerCase().replace(/[a-z]/g, (char: string) => {
      const start = 97; // ASCII value for 'a'
      return String.fromCharCode(
        ((char.charCodeAt(0) - start + shift) % 26) + start
      );
    });
  };

  const decodeCaesarCipher = (text: string): string => {
    return text.toLowerCase().replace(/[a-z]/g, (char: string) => {
      const start = 97; // ASCII value for 'a'
      return String.fromCharCode(
        ((char.charCodeAt(0) - start - shift + 26) % 26) + start
      );
    });
  };

  const handleValidation = () => {
    const expectedText = isEncoding
      ? encodeCaesarCipher(text)
      : decodeCaesarCipher(text);
    const isValid = inputText.toLowerCase() === expectedText;
    if (isValid) {
      setShowSuccess(true);
      onCorrectAnswer();
    } else {
      setShowIncorrect(true);
    }
    Keyboard.dismiss();
  };

  const clearInput = () => {
    setInputText("");
  };

  return (
    <PaperProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {showSuccess && (
            <View style={styles.animationContainer}>
              <SuccessAnimation />
            </View>
          )}
          {showIncorrect && (
            <View style={styles.animationContainer}>
              <IncorrectAnimation />
            </View>
          )}
          <Card style={styles.cardStyle}>
            <Card.Content>
              <View style={styles.row}>
                <Paragraph style={styles.question}>
                  Can you {isEncoding ? "encode" : "decode"} this text: "{text}
                  "?
                </Paragraph>
                <IconButton
                  icon="information"
                  size={20}
                  onPress={showModal}
                  style={styles.infoButton}
                />
              </View>
              <CircularAlphabet shift={shift} isEncoding={isEncoding} />
              <TextInput
                mode="outlined"
                label={isEncoding ? "Enter encoded text" : "Enter decoded text"}
                value={inputText}
                onChangeText={setInputText}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                right={
                  <TextInput.Icon
                    icon="close-circle"
                    size={20}
                    onPress={clearInput}
                  />
                }
              />
              <Button mode="contained" onPress={handleValidation}>
                Submit
              </Button>
            </Card.Content>
          </Card>
          <Modal
            isVisible={visible}
            onBackdropPress={hideModal}
            animationIn="zoomIn"
            animationOut="zoomOut"
            animationInTiming={300}
            animationOutTiming={300}
            backdropTransitionOutTiming={0}
          >
            <View style={styles.modalContent}>
              <Paragraph>
                For this cipher, the shift value is {shift}.
              </Paragraph>
              <View style={styles.spacing} />
              <Button mode="contained" onPress={hideModal}>
                Close
              </Button>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    paddingTop: 0,
  },
  cardStyle: {
    width: "100%",
    maxWidth: 600,
  },
  question: {
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoButton: {
    marginLeft: 0,
  },
  spacing: {
    height: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  animationContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
});

export default CaesarCipherQuestion;
