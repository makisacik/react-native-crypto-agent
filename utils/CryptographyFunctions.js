/** @format */

import CryptoJS from "crypto-js";

export const encryptAES = (text, key) => {
  return CryptoJS.AES.encrypt(text, key).toString();
};

export const decryptAES = (ciphertext, key) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const encryptDES = (text, key) => {
  return CryptoJS.DES.encrypt(text, key).toString();
};

export const decryptDES = (ciphertext, key) => {
  const bytes = CryptoJS.DES.decrypt(ciphertext, key);
  return bytes.toString(CryptoJS.enc.Utf8);
};
