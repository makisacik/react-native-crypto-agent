/** @format */

import CryptoJS from "react-native-crypto-js";

export const encryptAES = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decryptAES = (ciphertext, key) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
