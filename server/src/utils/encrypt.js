// Encryption function
const encryptName = (name) => {
    let encryptedName = "";
    for (let i = 0; i < name.length; i++) {
      // Shift each character by a fixed number of positions (you can choose your own shift)
      let charCode = name.charCodeAt(i) + 5; // Shift by 5 position (you can change this value)
      encryptedName += String.fromCharCode(charCode);
    }
    return encryptedName;
  };
  
  // Decryption function
  const decryptName = (encryptedName) => {
    let decryptedName = "";
    for (let i = 0; i < encryptedName.length; i++) {
      // Reverse the shift done during encryption
      let charCode = encryptedName.charCodeAt(i) - 5; // Reverse the shift (you can change this value)
      decryptedName += String.fromCharCode(charCode);
    }
    return decryptedName;
  };
  
  module.exports = { encryptName, decryptName };