/** @format */

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import {
  Text,
  Provider,
  Dialog,
  Portal,
  Button,
  IconButton,
} from "react-native-paper";
import Conversation from "../../Conversation";
import { useScore } from "../../../context/ScoreContext";

const { width } = Dimensions.get("window");
const containerWidth = width * 0.9;

const applications = [
  {
    text: "Data Encryption: Symmetric key cryptography is used to encrypt data for secure storage and transmission.",
    image: require("../../../assets/data_encryption.png"),
  },
  {
    text: "Secure Communications: It is used in various secure communication protocols like SSL/TLS for protecting internet communications.",
    image: require("../../../assets/secure_communications.png"),
  },
  {
    text: "Digital Signatures: Symmetric key cryptography is used in creating and verifying digital signatures.",
    image: require("../../../assets/digital_signatures.png"),
  },
  {
    text: "Authentication: It is used for verifying the identity of users and devices.",
    image: require("../../../assets/authentication.png"),
  },
  {
    text: "Payment Systems: It is used in securing transactions in online payment systems.",
    image: require("../../../assets/payment_systems.png"),
  },
];

const SecondLevelTutorial10 = () => {
  const [showConversation, setShowConversation] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllApplications, setShowAllApplications] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const { resetScore } = useScore();
  const animationValues = useRef(
    applications.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    resetScore();
  }, []);

  const handleDialogueChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleConversationFinish = () => {
    setShowConversation(false);
    setShowAllApplications(true);

    const animations = applications.map((_, index) =>
      Animated.timing(animationValues[index], {
        toValue: 1,
        duration: 500,
        delay: index * 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      })
    );

    Animated.stagger(300, animations).start();
  };

  const showDialog = (application: any) => {
    setSelectedApplication(application);
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
    setSelectedApplication(null);
  };

  return (
    <Provider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>
              Applications of Symmetric Key Cryptography
            </Text>
            {!showAllApplications &&
              currentIndex > 0 &&
              currentIndex <= applications.length && (
                <>
                  <Image
                    source={applications[currentIndex - 1].image}
                    style={styles.image}
                  />
                  <Text style={styles.text}>
                    {applications[currentIndex - 1].text}
                  </Text>
                </>
              )}
            {showAllApplications && (
              <>
                {applications.map((app, index) => (
                  <Animated.View
                    key={index}
                    style={[
                      styles.applicationListItem,
                      {
                        opacity: animationValues[index],
                        transform: [
                          {
                            scale: animationValues[index].interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.8, 1],
                            }),
                          },
                          {
                            translateY: animationValues[index].interpolate({
                              inputRange: [0, 1],
                              outputRange: [20, 0],
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <Image source={app.image} style={styles.icon} />
                    <Text style={styles.listItemText}>
                      {app.text.split(":")[0]}
                    </Text>
                    <IconButton
                      icon="information"
                      size={20}
                      onPress={() => showDialog(app)}
                      style={styles.infoButton}
                    />
                  </Animated.View>
                ))}
              </>
            )}
          </ScrollView>
          {showConversation && (
            <View style={styles.conversationContainer}>
              <Conversation
                level="SecondLevel"
                conversationNumber={3}
                onDialogueChange={handleDialogueChange}
                onFinish={handleConversationFinish}
              />
            </View>
          )}
          <Portal>
            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
              <Dialog.Title>Application Info</Dialog.Title>
              <Dialog.Content>
                <Text>{selectedApplication?.text}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Close</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
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
    width: containerWidth,
    alignSelf: "center",
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
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  applicationContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  applicationListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  listItemText: {
    fontSize: 18,
    fontFamily: "UbuntuRegular",
    flex: 1,
  },
  infoButton: {
    marginLeft: "auto",
  },
  conversationContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default SecondLevelTutorial10;
