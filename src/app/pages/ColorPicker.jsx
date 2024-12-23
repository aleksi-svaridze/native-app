import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const colors = ["bg-black", "bg-red-500", "bg-blue-500", "bg-yellow-500"];

const ColorPicker = () => {
  let [bg, setBg] = useState("bg-black");

  return (
    <View className={`py-5 ${bg}`}>
      <View className="flex-row">
        <Link href='/' className="py-2 px-3 bg-red-500 text-white">Main page</Link>
        <Link href='/pages/Counter' className="py-2 px-3 bg-red-500 text-white">Counter</Link>
        <Link href='/pages/WeatherApp' className="py-2 px-3 bg-red-500 text-white">Weather</Link>
      </View>
  
      <View className={`my-5 py-5  flex-row items-center justify-evenly`}>
        {colors.map((color) => (
          <TouchableOpacity
            className={`size-10 ${color} rounded-full border-2 border-white`}
            key={color}
            onPress={() => setBg(color)}
          />
        ))}
      </View>
    </View>
  );
};

export default ColorPicker;
