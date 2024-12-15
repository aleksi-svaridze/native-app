import { useState } from "react"
import { View, Text, FlatList, Button } from "react-native"

export const DeleteArrayElement = () => {
    const [friends, setFriends] = useState<string[]>(['Alex', 'Maya','Tatu', 'Kaia', 'Batu']);
    const deleteFriend = () => {
        setFriends(friends.filter(f => f !== 'Batu'))
    }
    return (
        <View className="my-5 py-5">
             <Text className="font-bold text-lg mb-2">List of friends</Text>
            <FlatList data={friends} keyExtractor={friend => friend} renderItem={
                ({item}) => <Text className="border-2 border-red-500 my-1 p-3 rounded-lg">{item}</Text>
                } />
            <Button title="Remove friend" onPress={deleteFriend} />
        </View>
    )
}

export const UpdateArrayElement = () => {
    const [friends, setFriends] = useState(['Alex', 'Maya','Tatu', 'Kaia', 'Batu']);
    const updateFriend = () => {
        setFriends(friends.map(f => f === 'Batu' ? 'Batu - mi' : f))
    }
    return (
        <View className="my-5 py-5">
             <Text className="font-bold text-lg mb-2">List of friends</Text>
            <FlatList data={friends} keyExtractor={friend => friend} renderItem={
                ({item}) => <Text className="border-2 border-red-500 my-1 p-3 rounded-lg">{item}</Text>
                } />
            <Button title="Update friend" onPress={updateFriend} />
        </View>
    )
}

export const AddArrayElement = () => {
    const [friends, setFriends] = useState(['Alex', 'Maya','Tatu', 'Kaia', 'Batu']);
    const AddFriend = () => {
        setFriends([...friends, 'John'])
    }
    return(
        <View className="my-5 py-5">
            <Text className="font-bold text-lg mb-2">List of friends</Text>
            <FlatList data={friends} keyExtractor={friend => friend} renderItem={
                ({item}) => <Text className="border-2 border-red-500 my-1 p-3 rounded-lg">{item}</Text>
                } />
            <Button title="Add friend" onPress={AddFriend} />
        </View>
    )
}