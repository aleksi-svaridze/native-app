import { View, Text, ScrollView, FlatList } from "react-native";
import Lists from "../components/Lists";
import "../../global.css";
import Profile from "../components/Profile";
import Car from "../components/Car";
import FlatListRender from "../components/FlatList";
import Product from "../components/ChildComponent";
import { useState } from "react";
import WithoutState from "../counter/WithoutState";

const app = () => {
  const [data, setData] = useState([
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png",
      name: "Product A",
      price: "35.99",
      desc: "Product A description",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png",
      name: "Product B",
      price: "25.99",
      desc: "Product B description",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_1280.png",
      name: "Product C",
      price: "30.99",
      desc: "Product C description",
    },
  ]);
  return (
    <ScrollView className="flex-1 px-3 pt-20">
      <Text className="mb-3 bg-white p-3 rounded-lg text-red-500">
        Hello 2 + 20 = {2 + 20}
      </Text>
      <Profile />
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Product
            id={item.id}
            name={item.name}
            src={item.src}
            price={item.price}
            desc={item.desc}
          />
        )}
      />

      <WithoutState />

      <Lists />
      <Car />
      <FlatListRender />
      <View className="mb-40">
        <Text className="bg-black text-white text-center font-bold text-lg py-5">
          Footer
        </Text>
      </View>
    </ScrollView>
  );
};

export default app;
