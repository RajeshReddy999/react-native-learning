import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const DynamicScreen = () => {
  const { name } = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <Text className="text-3xl text-green-600">Hello, {name}</Text>
      <Text className="mt-4 text-xl text-green-600">
        This is your personalized screen
      </Text>
    </View>
  );
};
export default DynamicScreen;
