import {View, Text, Image, Pressable} from 'react-native';

const Car = () => {
    const carData = {
        price: '$200 000',
        src: '../assets/lambo.jpg',
        model: 'Lamborgini',
        rating: 3.5,
        desc: 'Short description about'
    }
    return(
        <View className='flex gap-y-5 my-10'>
            <Text className='p-5 bg-gray-900 text-white rounded-lg w-40 text-center'>{carData.price}</Text>
            <Image source={require('../assets/lambo.jpg')} className='w-full rounded-lg' />
            <View className='flex flex-row justify-between'>
                <Text className='w-1/2 text-xl font-bold'>Name: {carData.model}</Text>
                <Text className='w-1/2 text-right text-base'>Rating: {carData.rating}</Text>
            </View>
            <Text className='text-base'>{carData.desc}</Text>
            <Pressable className='bg-slate-700 w-1/2 mx-auto'>
                <Text className='text-white text-lg text-center py-3'>Add to Cart</Text>
            </Pressable>
        </View>
    )
}

export default Car