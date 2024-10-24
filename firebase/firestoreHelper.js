import { database } from "./firebaseSetup";

import { collection, addDoc } from "firebase/firestore";

export async function writeToDB(data, collectionName) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (err) {
    console.log(err);
  }
}
