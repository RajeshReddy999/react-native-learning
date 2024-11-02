import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const Settings = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-white text-3xl">
      <Text className="text-blue-700 mt-4 px-4">Settings Page</Text>
    </View>
  );
};
export default Settings;
