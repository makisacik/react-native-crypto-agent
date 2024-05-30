/** @format */

const conversations = require("../data/conversations.json");

export const getConversation = (level, conversationNumber) => {
  const levelConversations = conversations[level];
  return levelConversations
    ? levelConversations["conversation" + conversationNumber] || []
    : [];
};
