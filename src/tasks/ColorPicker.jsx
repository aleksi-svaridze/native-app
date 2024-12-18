import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const colors = ["bg-black", "bg-red-500", "bg-blue-500", "bg-yellow-500"];

const ColorPicker = () => {
  let [bg, setBg] = useState("bg-black");

  const changeBg = (bg) => {
    setBg(bg);
  };
  return (
    <View className={`my-5 py-5 ${bg} flex-row items-center justify-evenly`}>
      {colors.map((color) => (
        <TouchableOpacity
          className={`size-10 ${color} rounded-full border-2 border-white`}
          key={color}
          onPress={() => setBg(color)}
        />
      ))}
    </View>
  );
};

export default ColorPicker;
