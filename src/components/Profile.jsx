import { Image, Pressable, Text, View } from "react-native"

const Profile = () => {
    return(
        <View style={{boxShadow: '0 0 20px 5px rgba(0,0,0, .2)'}} className="rounded-lg bg-white p-10 flex flex-col items-center gap-y-10 mb-10">
            <Image source={require('../assets/person.jpg')} className="rounded-full size-40" />
            <Text className="text-4xl text-center">Aleksi Svaridze</Text>
            <Text className="text-base text-center">I am Aleksi, and I love coding</Text>
            <Pressable onPress={() => alert('Downloaded')} className="bg-blue-700 w-60 rounded-lg">
                <Text className="text-white text-center py-6 text-xl">Download my CV</Text>
            </Pressable>
        </View>
    )
}

export default Profile