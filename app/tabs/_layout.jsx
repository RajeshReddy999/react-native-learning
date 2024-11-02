import { useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';
import FirstTab from "./firstTab";
import SecondTab from "./secondTab";

const TabsLayout = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "first", title: "First Tab", icon: "home" },
    { key: "second", title: "Second Tab", icon: "information-circle" },
  ];
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={SceneMap({
        first: FirstTab,
        second: SecondTab,
      })}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="top"
      renderTabBar={(props) => (
        <TabBar
          {...props}
          renderIcon={({ route }) => (
            <Ionicons
              name={route.icon}
              size={20}
              color={
                index === routes.findIndex((r) => r.key === route.key)
                  ? "green"
                  : "grey"
              }
            />
          )}
          indicatorStyle={{ backgroundColor: "blue" }}
          style={{
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#ccc",
          }}
          labelStyle={{
            color: "black",
            fontSize: 20,
          }}
        />
      )}
    />
  );
};
export default TabsLayout;
