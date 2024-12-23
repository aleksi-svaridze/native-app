import { View, Text, ScrollView } from "react-native";
import Lists from "../components/Lists";
import "../../global.css";
import Profile from "../components/Profile";
import Car from "../components/Car";
import { Link } from "expo-router";
import ToggleState from "../tasks/ToggleState";

const app = () => {

  return (
    <ScrollView className="flex-1 px-3 pt-20">
      <View className="flex-row">
        <Link href='/pages/Counter' className="py-2 px-3 bg-red-500 text-white">Counter</Link>
        <Link href='/pages/ColorPicker' className="py-2 px-3 bg-red-500 text-white">Color picker</Link>
        <Link href='/pages/WeatherApp' className="py-2 px-3 bg-red-500 text-white">Weather</Link>
      </View>
      
      <ToggleState />

      <Profile />

      <Lists />

      <Car />

      <View className="mb-40">
        <Text className="bg-black text-white text-center font-bold text-lg py-5">
          Footer
        </Text>
      </View>
      
    </ScrollView>
  );
};

export default app;
