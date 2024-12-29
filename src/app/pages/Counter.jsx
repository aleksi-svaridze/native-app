import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

const Counter = () => {
  let [result, setResult] = useState(0);

  return (
    <View className="my-10 bg-black p-4">
       <View className="flex-row">
          <Link href='/' className="py-2 px-3 bg-red-500 text-white">Main page</Link>
          <Link href='/pages/WeatherApp' className="py-2 px-3 bg-red-500 text-white">Weather</Link>
          <Link href='/pages/ColorPicker' className="py-2 px-3 bg-red-500 text-white">Color picker</Link>
          <Link href='/pages/ReducerCounter' className="py-2 px-3 bg-red-500 text-white">RedCounter</Link>
          <Link href='/pages/Todos' className="py-2 px-3 bg-red-500 text-white">Todos</Link>
        </View>
      <View className=" p-4 flex-row justify-between">
        <Pressable onPress={() => setResult(result + 1)}>
          <Text className="text-black bg-white font-bold p-5 rounded-full size-20 flex items-center justify-center text-4xl">
            +
          </Text>
        </Pressable>
        <Text className="text-black bg-white font-bold p-5 rounded-full size-20 flex items-center justify-center text-4xl">
          {result}
        </Text>
        <Pressable onPress={() => setResult(result - 1)}>
          <Text className="text-black bg-white font-bold p-5 rounded-full size-20 flex items-center justify-center text-4xl">
            -
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;
