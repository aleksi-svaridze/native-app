import { Text, View } from "react-native";

const Lists = () => {
  const data = [
    {
      id: 1,
      title: "title 1",
      body: "body one",
    },
    {
      id: 2,
      title: "title 2",
      body: "body two",
    },
    {
      id: 3,
      title: "title 3",
      body: "body three",
    },
  ];
  return (
    <View style={{boxShadow: '0 0 20px 5px rgba(0,0,0, .2)'}} className="bg-slate-500 flex flex-col items-center py-10 rounded-lg my-10">
      {data.map((item) => (
        <Text
          key={item.id}
          className="text-red-500 bg-white w-1/2 mb-2 text-center py-4 rounded-lg"
        >
          {item.title} - {item.body}
        </Text>
      ))}
    </View>
  );
};

export default Lists;
