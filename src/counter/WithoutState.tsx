import { useState } from "react";
import { View, Text, Pressable } from "react-native";

const WithoutState = () => {
  let [result, setResult] = useState<number>(0);

  console.log(result);
  return (
    <View className="my-10 bg-black p-4 flex-row justify-between">
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
  );
};

export default WithoutState;
