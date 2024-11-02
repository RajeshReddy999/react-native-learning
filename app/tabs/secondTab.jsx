import { Text } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';

const SecondTab = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      className="flex-1 justify-center items-center bg-white"
    >
      <Ionicons name="information-circle" size={50} color={"red"} />
      <Text className="mt-4 text-2xl text-green-500">Second Tab Component</Text>
    </Animated.View>
  );
};
export default SecondTab;
