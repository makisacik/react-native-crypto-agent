/** @format */
// RC4 TUTORIAL PAGE

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

const SecondLevelTutorial8 = () => {
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
            <Text style={styles.title}>Rivest Cipher 4 (RC4)</Text>
            <Text style={styles.text}>
              RC4 (Rivest Cipher 4) is a stream cipher designed by Ron Rivest in
              1987. It is known for its{" "}
              <Text style={{ fontWeight: "bold" }}>simplicity and speed</Text>{" "}
              in software, making it widely used in protocols like{" "}
              <Text style={{ fontWeight: "bold" }}>SSL/TLS</Text> and{" "}
              <Text style={{ fontWeight: "bold" }}>WEP</Text>. However, RC4 has
              several vulnerabilities, particularly related to its weak key
              scheduling algorithm, making it less secure by modern standards.
            </Text>
            <Text style={styles.tableTitle}>
              Comparison with Other Algorithms
            </Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Criteria</Text>
                <Text style={styles.tableHeader}>RC4</Text>
                <Text style={styles.tableHeader}>AES</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Type</Text>
                <Text style={styles.tableCell}>Stream Cipher</Text>
                <Text style={styles.tableCell}>Block Cipher</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Key Size</Text>
                <Text style={styles.tableCell}>40-2048 bits</Text>
                <Text style={styles.tableCell}>128, 192, or 256 bits</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Speed</Text>
                <Text style={styles.tableCell}>Fast</Text>
                <Text style={styles.tableCell}>Fast</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Security</Text>
                <Text style={styles.tableCell}>Considered weak</Text>
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
                <Dialog.Title>About RC4</Dialog.Title>
                <Dialog.Content>
                  <Text style={styles.dialogText}>
                    RC4 was once a popular stream cipher due to its{" "}
                    <Text style={{ fontWeight: "bold" }}>
                      simplicity and speed
                    </Text>
                    . However, it has been found to have significant
                    vulnerabilities, especially in the key scheduling algorithm.
                    Today, it is generally recommended to use more secure
                    algorithms like{" "}
                    <Text style={{ fontWeight: "bold" }}>AES</Text>.
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
});

export default SecondLevelTutorial8;
