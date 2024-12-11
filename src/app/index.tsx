import { View, Text, ScrollView } from "react-native";
import Lists from "../components/Lists";
import "../../global.css";
import Profile from "../components/Profile";
import Car from "../components/Car";

const app = () => {
  return (
    <ScrollView className="flex-1 px-3 pt-20">
      <Text className="mb-3 bg-white p-3 rounded-lg text-red-500">
        Hello 2 + 20 = {2 + 20}
      </Text>
      <Profile />
      <Lists />
      <Car />
      <View className='mb-40'>
        <Text className="bg-black text-white text-center font-bold text-lg py-5">Footer</Text>
      </View>
    </ScrollView>
  );
};

export default app;
