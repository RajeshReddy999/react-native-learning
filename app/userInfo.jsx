import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

const UserInfo = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleNavigation = () => {
    const username = name.trim();
    if (username) {
      router.push(`/${username}`);
    }
  };
  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-2xl text-blue-600 mb-4">UserInfo</Text>
      <TextInput
        className="border-gray-700 border-2 w-full p-3 text-lg rounded-md"
        placeholder="Type your Name"
        value={name}
        onChangeText={setName}
      />
      <Pressable
        className="bg-blue-700 p-4 rounded-md mt-4 w-full"
        onPress={handleNavigation}
      >
        <Text className="text-center text-white text-xl">GO</Text>
      </Pressable>
    </View>
  );
};
export default UserInfo;
