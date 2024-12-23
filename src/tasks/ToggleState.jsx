import { useState } from "react";
import { View, Text, Button } from "react-native";

const ToggleState = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggleState = () => {
    setToggle(!toggle);
  };
  return (
    <View className="my-5 py-5">
      <Text className="bg-red-500 text-center text-4xl py-5 text-white font-bold">
        {toggle ? "On" : "Off"}
      </Text>
      <Button title="Press me" onPress={handleToggleState} />
    </View>
  );
};

export default ToggleState;
