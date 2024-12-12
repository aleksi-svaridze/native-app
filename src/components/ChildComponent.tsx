import { View, Text, Image, FlatList, Pressable } from "react-native";

type Data = {
  id: number;
  name: string;
  src: string;
  price: string;
  desc: string;
};

const Product = ({ price, name, desc, src, id }: Data) => {
  return (
    <View className="my-1 bg-green-800 py-5 px=2 flex-row" key={id}>
      <Image source={{ uri: src }} className="size-20" />
      <View className="pl-10">
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{desc}</Text>
        <Pressable onPress={() => alert(id)}>
          <Text>Press me</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Product;
