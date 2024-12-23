import { View, Text, Image, Pressable } from "react-native";



const Product = ({ price, name, desc, src, id }) => {
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
