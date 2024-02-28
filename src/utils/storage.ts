import EncryptedStorage from 'react-native-encrypted-storage';

// export const storeItem = async <T>(key: string, value: T) => {
//   await EncryptedStorage.setItem(key, JSON.stringify(value));
// };

// export const getItem = async (key: string) => {
//   const resp = await EncryptedStorage.getItem(key);
//   return resp !== undefined ? JSON.parse(resp) : '';
// };

export const storeItem = async <T>(key: string, value: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(value));
};

export const getItem = async (key: string, defaultValue: any) => {
  const resp = await EncryptedStorage.getItem(key, defaultValue);
  console.log('resp', resp);
  console.log('defaultValue', defaultValue);
  if (resp !== undefined) return resp;
  else return defaultValue;
};
