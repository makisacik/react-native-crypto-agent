/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from "react-native";
import { Text, Button, Dialog, Portal, Provider } from "react-native-paper";
import Conversation from "../../Conversation";
import { useScore } from "../../../context/ScoreContext";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const SecondLevelTutorial7 = () => {
  const [visible, setVisible] = useState(false);
  const [showConversation, setShowConversation] = useState(true);
  const { resetScore } = useScore();

  useEffect(() => {
    resetScore();
  }, []);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleConversationFinish = () => {
    setShowConversation(false);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Triple DES (3DES)</Text>
            <Text style={styles.text}>
              Triple DES, also known as 3DES, is a symmetric encryption
              algorithm that applies the DES algorithm three times to each data
              block. It was developed to provide a{" "}
              <Text style={styles.boldText}>
                higher level of security than DES
              </Text>{" "}
              due to the vulnerability of DES to brute-force attacks.
            </Text>
            <Text style={styles.text}>
              Triple DES uses three 56-bit keys, giving it an effective key
              length of 168 bits. This makes it much more secure than DES.
            </Text>
            <Text style={styles.tableTitle}>
              Difference between DES and 3DES
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Criteria</Text>
                <Text style={styles.tableHeader}>DES</Text>
                <Text style={styles.tableHeader}>3DES</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Key Size</Text>
                <Text style={styles.tableCell}>56-bit</Text>
                <Text style={styles.tableCell}>
                  168-bit (three 56-bit keys)
                </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Block Size</Text>
                <Text style={styles.tableCell}>64-bit</Text>
                <Text style={styles.tableCell}>64-bit</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Security</Text>
                <Text style={styles.tableCell}>Considered insecure</Text>
                <Text style={styles.tableCell}>More secure than DES</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Performance</Text>
                <Text style={styles.tableCell}>Faster</Text>
                <Text style={styles.tableCell}>
                  Slower (due to triple encryption)
                </Text>
              </View>
            </View>
            <Button
              mode="text"
              onPress={showDialog}
              labelStyle={styles.buttonTextLabel}
            >
              Learn More
            </Button>
            <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>About 3DES</Dialog.Title>
                <Dialog.Content>
                  <Text style={styles.dialogText}>
                    Triple DES was created as a way to improve the security of
                    DES without needing to design a completely new algorithm. By
                    applying DES three times with different keys, 3DES
                    significantly increases the difficulty of brute-force
                    attacks.
                  </Text>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    onPress={hideDialog}
                    labelStyle={styles.buttonTextLabel}
                  >
                    Close
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </ScrollView>
          {showConversation && (
            <View style={styles.conversationContainer}>
              <Conversation
                level="SecondLevel"
                conversationNumber={2}
                onFinish={handleConversationFinish}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "UbuntuBold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  tableTitle: {
    fontSize: 18,
    fontFamily: "UbuntuBold",
    marginVertical: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  tableHeader: {
    flex: 1,
    padding: 8,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
  tableCell: {
    flex: 1,
    padding: 8,
  },
  buttonTextLabel: {
    fontSize: 14,
    fontFamily: "UbuntuRegular",
  },
  dialogText: {
    fontSize: 16,
    fontFamily: "UbuntuRegular",
    marginBottom: 10,
  },
  conversationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default SecondLevelTutorial7;
