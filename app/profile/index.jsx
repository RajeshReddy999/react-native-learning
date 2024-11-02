import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

const ProfileScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-white text-3xl">
      <Text className="text-blue-700 mt-4 px-4">My Profile</Text>
      <Pressable
        className="bg-pink-500 p-4 mt-4 rounded-md"
        onPress={() => router.push("/profile/settings")}
      >
        <Text className="text-white text-center">Go to Settings</Text>
      </Pressable>
    </View>
  );
};
export default ProfileScreen;
