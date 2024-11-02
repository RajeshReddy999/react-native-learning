import { Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';

const FirstTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center bg-white"
    >
      <Ionicons name="home" size={50} color={"green"} />
      <Text className="mt-4 text-2xl text-green-500">First Tab Component</Text>
    </Animated.View>
  );
};
export default FirstTab;
