/** @format */
// UTILITY FILE TO GET CONVERSATION DATA FROM CONVERSARTIONS.JSON FILE

const conversations = require("../data/conversations.json");

export const getConversation = (level, conversationNumber) => {
  const levelConversations = conversations[level];
  return levelConversations
    ? levelConversations["conversation" + conversationNumber] || {}
    : {};
};
