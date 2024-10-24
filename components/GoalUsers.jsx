import { FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { readAll, writeToDB } from "../firebase/firestoreHelper";

export default function GoalUsers({ goalId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const dataFromDB = await readAll(`/goals/${goalId}/users`);
      if (dataFromDB.length) {
        setUsers(dataFromDB.map((user) => user.name));
        return;
      }
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error(`HTTP error happened with status ${response.status}`);
      }
      const data = await response.json();
      data.forEach((user) => {
        writeToDB(user, `/goals/${goalId}/users`);
      });
      setUsers(data.map((user) => user.name));
    }
    fetchUsers();
  }, []);

  return (
    <FlatList data={users} renderItem={({ item }) => <Text>{item}</Text>} />
  );
}
