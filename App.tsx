import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Dog } from "./screens/Dog";
import { Cat } from "./screens/Cat";
import { HomeIcon } from "./icons/DogIcon";
import { InfoIcon } from "./icons/CatIcon";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "brown",
          headerShown: false,
          tabBarItemStyle: { marginBottom: -30 },
        }}
      >
        <Tab.Screen
          name="dog"
          component={Dog}
          options={{
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Cat"
          component={Cat}
          options={{
            tabBarIcon: ({ color }) => <InfoIcon color={color} />,
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const HomeTab = createBottomTabNavigator();

const HomeTabScreens = () => {
  return (
    <HomeTab.Navigator screenOptions={{ headerShown: false }}>
      <HomeTab.Screen name="HomeTab" component={Dog} />
      <HomeTab.Screen name="AboutTab" component={Cat} />
    </HomeTab.Navigator>
  );
};

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="FirstScreen" component={HomeTabScreens} />
//         <Stack.Screen name="Home1" component={Home1} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }