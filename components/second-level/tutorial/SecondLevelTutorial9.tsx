/** @format */
// CHACHA20 TUTORIAL PAGE

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
import { useScore } from "../../../context/ScoreContext";

const SecondLevelTutorial9 = () => {
  const [visible, setVisible] = useState(false);
  const { resetScore } = useScore();

  useEffect(() => {
    resetScore();
  }, []);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>ChaCha20</Text>
            <Text style={styles.text}>
              ChaCha20 is a stream cipher designed by Daniel J. Bernstein. It is
              a variant of the Salsa20 algorithm and is known for its{" "}
              <Text style={{ fontWeight: "bold" }}>speed and security</Text>.
              ChaCha20 operates with 20 rounds of encryption and is{" "}
              <Text style={{ fontWeight: "bold" }}>
                resistant to cryptographic attacks
              </Text>
              , making it a preferred choice for many modern encryption
              protocols.
            </Text>
            <Text style={styles.tableTitle}>
              Comparison with Other Algorithms
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Criteria</Text>
                <Text style={styles.tableHeader}>ChaCha20</Text>
                <Text style={styles.tableHeader}>AES</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Type</Text>
                <Text style={styles.tableCell}>Stream Cipher</Text>
                <Text style={styles.tableCell}>Block Cipher</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Key Size</Text>
                <Text style={styles.tableCell}>256-bit</Text>
                <Text style={styles.tableCell}>128, 192, or 256 bits</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Rounds</Text>
                <Text style={styles.tableCell}>20</Text>
                <Text style={styles.tableCell}>10, 12, or 14</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Performance</Text>
                <Text style={styles.tableCell}>Very Fast</Text>
                <Text style={styles.tableCell}>Fast</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Security</Text>
                <Text style={styles.tableCell}>Highly secure</Text>
                <Text style={styles.tableCell}>Highly secure</Text>
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
                <Dialog.Title>About ChaCha20</Dialog.Title>
                <Dialog.Content>
                  <Text style={styles.dialogText}>
                    ChaCha20 is an evolution of the Salsa20 algorithm, designed
                    to be faster and more secure. It is used in various modern
                    encryption protocols due to its robustness and efficiency.
                    ChaCha20 is especially favored in mobile environments
                    because of its high performance.
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

export default SecondLevelTutorial9;
