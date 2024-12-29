import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { useReducer } from 'react'

const initialState = {count: 0}; // 2

function reducer (state, action) {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error('Unhandled action type')
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState); // 1

  return (
    <View className="p-4">
        <View className="flex-row">
            <Link href='/pages/Counter' className="py-2 px-3 bg-red-500 text-white">Counter</Link>
            <Link href='/pages/ColorPicker' className="py-2 px-3 bg-red-500 text-white">Color picker</Link>
            <Link href='/pages/WeatherApp' className="py-2 px-3 bg-red-500 text-white">Weather</Link>
            <Link href='/' className="py-2 px-3 bg-red-500 text-white">Main page</Link>
            <Link href='/pages/Todos' className="py-2 px-3 bg-red-500 text-white">Todos</Link>
        </View>
      <Text className='py-3'>ReducerCounter</Text>
      <View>
      <TouchableOpacity className='bg-red-500'>
            <Text onPress={() => dispatch({ type: 'decrement'})}>-</Text>
        </TouchableOpacity>
        <Text>Count - {state.count}</Text>
        <TouchableOpacity className='bg-red-500'>
            <Text onPress={() => dispatch({type: 'increment'})}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ReducerCounter