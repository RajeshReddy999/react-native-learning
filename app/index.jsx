import { Text, Pressable } from "react-native";
import "../global.css";
import { useRouter } from "expo-router";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { useDrawerStatus } from "@react-navigation/drawer";

const Home = () => {
  const router = useRouter();
  const isDrawerOpen = useDrawerStatus() === "open";

  return (
    <Animated.View
      entering={SlideInRight.duration(500)}
      exiting={SlideOutLeft.duration(500)}
      className="flex-1 justify-center items-center"
    >
      <Text className="text-3xl">Home</Text>
      {/* 
      <Link href={"/about"} asChild>
                <Pressable>
                    <Text>Go to About</Text>
                </Pressable>
            </Link>
             */}
      {isDrawerOpen ? (
        <Text className="text-green-600 mt-4">Drawer is Opened</Text>
      ) : (
        <Text className="text-red-600 mt-4">Drawer is Closed</Text>
      )}
      <Pressable
        onPress={() => {
          router.push("/about");
        }}
        className="p-4 rounded-md bg-blue-600 mt-2"
      >
        <Text className="text-white text-center">Go to About</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/tabs");
        }}
        className="p-4 rounded-md bg-orange-600 m-2"
      >
        <Text className="text-white text-center">Go to Tab Screen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/userInfo");
        }}
        className="p-4 rounded-md bg-indigo-600 m-2"
      >
        <Text className="text-white text-center">Go to User Screen</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/profile");
        }}
        className="p-4 rounded-md bg-pink-600 m-2"
      >
        <Text className="text-white text-center">Go to Profile Screen</Text>
      </Pressable>
    </Animated.View>
  );
};
export default Home;
