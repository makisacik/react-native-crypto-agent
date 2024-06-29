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

const SecondLevelTutorial4 = () => {
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
            <Text style={styles.title}>Data Encryption Standard (DES)</Text>
            <Text style={styles.text}>
              The Data Encryption Standard (DES) is a symmetric encryption
              algorithm that was widely used in the past. It encrypts data in
              blocks of 64 bits using a 56-bit key. However, due to its smaller
              key size and advances in computing power, DES is now considered
              insecure.
            </Text>
            <Text style={styles.tableTitle}>
              Difference between DES and AES
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Criteria</Text>
                <Text style={styles.tableHeader}>DES</Text>
                <Text style={styles.tableHeader}>AES</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Key Size</Text>
                <Text style={styles.tableCell}>56-bit</Text>
                <Text style={styles.tableCell}>128, 192, or 256-bit</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Block Size</Text>
                <Text style={styles.tableCell}>64-bit</Text>
                <Text style={styles.tableCell}>128-bit</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Security</Text>
                <Text style={styles.tableCell}>Considered insecure</Text>
                <Text style={styles.tableCell}>Highly secure</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Performance</Text>
                <Text style={styles.tableCell}>Slower</Text>
                <Text style={styles.tableCell}>Faster</Text>
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
                <Dialog.Title>About DES</Dialog.Title>
                <Dialog.Content>
                  <Text style={styles.dialogText}>
                    DES was once the standard encryption algorithm used by
                    governments and industries worldwide. However, its 56-bit
                    key size makes it vulnerable to brute-force attacks. AES,
                    with its larger key sizes and stronger security, has largely
                    replaced DES.
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
                conversationNumber="2"
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

export default SecondLevelTutorial4;
