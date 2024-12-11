import { View, Text, Image, Pressable, ScrollView } from "react-native";
import Lists from "../components/Lists";
import "../../global.css";

const app = () => {
  return (
    <ScrollView className="flex-1 bg-red-500 px-3 py-20">
      <Text className="mb-3 bg-white p-3 rounded-lg text-red-500">
        Hello 2 + 20 = {2 + 20}
      </Text>
      <Lists />
      <Pressable
        className="bg-blue-400 w-1/2 mx-auto mt-5 rounded-lg"
        onPress={() => alert("Hello")}
      >
        <Text className="text-white text-center p-8 text-2xl">Press Me</Text>
      </Pressable>

      <Image className="mt-5 w-full" source={require("../assets/image.jpg")} />
    </ScrollView>
  );
};

export default app;
