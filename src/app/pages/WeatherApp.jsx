import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const data = {
  tbilisi: "20c, cloudy",
  qutaisi: "40c, sunny",
  gori: "25c, clear",
};

const WeatherApp = () => {
  const [value, setValue] = useState("");
  const [weather, setWeather] = useState("");

  const getWeather = () => {
    setWeather(data[value] || "no data is available");
  };
  return (
    <View className="my-10 bg-black p-4">
      <View className="flex-row">
        <Link href='/' className="py-2 px-3 bg-red-500 text-white">Main page</Link>
        <Link href='/pages/Counter' className="py-2 px-3 bg-red-500 text-white">Counter</Link>
        <Link href='/pages/ColorPicker' className="py-2 px-3 bg-red-500 text-white">Color picker</Link>
        <Link href='/pages/ReducerCounter' className="py-2 px-3 bg-red-500 text-white">RedCounter</Link>
        <Link href='/pages/Todos' className="py-2 px-3 bg-red-500 text-white">Todos</Link>
      </View>
      <View className="my-5 py-5">
        <TextInput
          className="p-5 text-center border-red-500 border-2 focus:border-green-500"
          value={value}
          onChangeText={setValue}
        />
        <Text className="py-3 text-center font-bold">{weather}</Text>
        <Button title="Get Weather" onPress={getWeather} />
      </View>
    </View>
  );
};

export default WeatherApp;
