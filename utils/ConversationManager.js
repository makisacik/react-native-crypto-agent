/** @format */

const conversations = {
  FirstLevel: [
    "Hello, agent!",
    "Welcome to Crypto Agent.",
    "Today, we'll learn about the Caesar Cipher.",
    "The Caesar Cipher is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.",
    "For example, with a shift of 3, A would be replaced by D, B would become E, and so on.",
    "Ready to start? Let's dive in!",
  ],
};

export const getConversation = (level) => conversations[level] || [];
