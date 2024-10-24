import { View } from "react-native";
import { useEffect, useState } from "react";

export default function GoalUsers() {
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error(`HTTP error happened with status ${response.status}`);
      }
      const data = await response.json();
    }
    fetchUsers();
  }, []);

  return <View></View>;
}
