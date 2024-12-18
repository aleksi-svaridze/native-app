import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

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
    <View className="my-5 py-5">
      <TextInput
        className="p-5 text-center border-red-500 border-2 focus:border-green-500"
        value={value}
        onChangeText={setValue}
      />
      <Text className="py-3 text-center font-bold">{weather}</Text>
      <Button title="Get Weather" onPress={getWeather} />
    </View>
  );
};

export default WeatherApp;
