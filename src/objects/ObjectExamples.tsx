import { useState } from "react"
import { View, Text, FlatList, Button } from "react-native"

// export const DeleteObjectElement = () => {
//     const [friends, setFriends] = useState<string[]>(['Alex', 'Maya','Tatu', 'Kaia', 'Batu']);
//     const deleteFriend = () => {
//         setFriends(friends.filter(f => f !== 'Batu'))
//     }
//     return (
//         <View className="my-5 py-5">
//              <Text className="font-bold text-lg mb-2">List of friends</Text>
//             <FlatList data={friends} keyExtractor={friend => friend} renderItem={
//                 ({item}) => <Text className="border-2 border-red-500 my-1 p-3 rounded-lg">{item}</Text>
//                 } />
//             <Button title="Remove friend" onPress={deleteFriend} />
//         </View>
//     )
// }

export const UpdateObjectElement = () => {
    const [movie, setMovie] = useState<{title: string, rating: number}>({title: 'It', rating: 0});
    const updateMovie = () => {setMovie({...movie, title: 'Rango', rating: 5})};

    return (
        <View className="my-5 py-5">
             <Text className="font-bold text-lg mb-2">Movie: '{movie.title}'</Text>
             <Text className="font-bold text-lg mb-2">Rating: {movie.rating}</Text>
          
            <Button title="Update Movie" onPress={updateMovie} />
        </View>
    )
}

// export const AddObjectElement = () => {
//     const [movie, setMovie] = useState({id: 1, title: 'It', rating: 0});
//     const addMovie = () => {setMovie({...movie, title: 'Rango', rating: 5})};

//     return(
//         <View className="my-5 py-5">
//             <Text className="font-bold text-lg mb-2">List of Movies</Text>
//             <Text className="font-bold text-lg mb-2">Movie: '{movie.title}'</Text>
//             <Text className="font-bold text-lg mb-2">Rating: {movie.rating}</Text>
//             <FlatList data={movie} keyExtractor={m => m.id.toString()} renderItem={({item}) => <Text>{item.title} - {item.rating}</Text>} />
//             <Button title="Add friend" onPress={addMovie} />
//         </View>
//     )
// }