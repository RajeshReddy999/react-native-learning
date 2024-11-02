// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "HomeScreen",
            drawerIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="information-circle" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: "Tab",
            title: "Tab Screen",
            drawerIcon: ({ color }) => (
              <Ionicons name="settings" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};
export default DrawerLayout;
