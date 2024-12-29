import CryptoJS from "crypto-js";

const SECRET_KEY = "ASKIP_MOB_V01_DEVXJS";

const encrypt = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

const decrypt = (data) => {
    const bytes =  CryptoJS.AES.decrypt(data, SECRET_KEY)
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
};


export {encrypt, decrypt}