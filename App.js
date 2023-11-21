import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import Ingredient from "./screens/Ingredient";
import Kategori from "./screens/Kategori";
import Profile from "./screens/Profile";
import Suka from "./screens/Suka";
import Recipe from "./screens/Recipe";
// import LandingPage from "./LandingPage";
// import LandingPage from "./LandingPage";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;
        let iconColor;

        if (focused) {
          // Jika terfokus, ubah warna menjadi merah
          iconName = "book-outline";
          iconColor = "#F3D396";
        } else {
          // Jika tidak terfokus, warna tetap kuning
          switch (route.name) {
            case "HomeScreen":
              iconName = "book-outline";
              break;
            case "Kategori":
              iconName = "restaurant-outline";
              break;
            case "Suka":
              iconName = "heart-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }
          iconColor = "#EF9F08";
        }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={iconColor}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={noHead} />
      <Tab.Screen name="Kategori" component={Kategori} options={noHead} />
      <Tab.Screen name="Suka" component={Suka} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          {/* <Stack.Screen name="Tabs" component={Tabs} options={noHead} /> */}
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={noHead}
          />
          <Stack.Screen
            name="Ingredient"
            component={Ingredient}
            options={noHead}
          />
          <Stack.Screen
            name="Recipe"
            component={Recipe}
            options={noHead}
          />
          {/* <Stack.Screen name="landingPage" component={LandingPage} options={noHead} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};


export default App;