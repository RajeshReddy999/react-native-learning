import { useRouter } from "expo-router";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Text, Pressable } from "react-native";

const About = () => {
  const router = useRouter();
  return (
    <Animated.View
      entering={SlideInLeft.duration(500)}
      exiting={SlideOutRight.duration(500)}
      className="flex-1 justify-center items-center"
    >
      <Text className="text-3xl">About</Text>
      {/* <Link href={"/"} asChild>
        <Pressable>
          <Text>Go to Home</Text>
        </Pressable>
      </Link> */}

      <Pressable
        onPress={() => {
          router.push("/");
        }}
        className="p-4 rounded-md bg-green-600 mt-2"
      >
        <Text className="text-white text-center">Back to Home</Text>
      </Pressable>
    </Animated.View>
  );
};
export default About;
