import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useReducer } from 'react'
import { Link } from 'expo-router'

const initialState = {todos: [
    {title: 'Buy milk'},
    {title: 'Buy bred'},
]}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addTodo':
            return {
                todos: [...state.todos, {title: action.payload}]
            }
        case 'removeTodo':
            return {
                todos: state.todos.filter(todo => todo.title !== action.payload)
            }
        default:
            return state;
    }
}

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [text, setText] = useState('');

    const addNewTodo = () => {
        if(text.trim()){
            dispatch({type: 'addTodo', payload: text})
            setText('')
        }
       
    }

    const removeTodos = (title) => {
        dispatch({type: 'removeTodo', payload: title})
    }

    return (
        <View className='py-5 px-4'>
            <View className="flex-row">
                <Link href='/pages/Counter' className="py-2 px-3 bg-red-500 text-white">Counter</Link>
                <Link href='/pages/ColorPicker' className="py-2 px-3 bg-red-500 text-white">Color picker</Link>
                <Link href='/pages/WeatherApp' className="py-2 px-3 bg-red-500 text-white">Weather</Link>
                <Link href='/pages/ReducerCounter' className="py-2 px-3 bg-red-500 text-white">RedCounter</Link>
                <Link href='/' className="py-2 px-3 bg-red-500 text-white">Main page</Link>
            </View>
            <Text className='font-bold text-3xl my-5 text-center'>Todos</Text>
            <TextInput  
                onChangeText={setText}
                value={text} 
                placeholder='Write new todo here..' 
                className='border-2 mb-5 h-20 px-3 border-red-500'
            />
            <Button title='Add todo' onPress={addNewTodo} />

           <FlatList data={state.todos} keyExtractor={item => item.title} renderItem={({item}) => (
            <View className='p-5 my-1 bg-red-500'>
                <Text>{item.title}</Text>
                <TouchableOpacity onPress={() => removeTodos(item.title)}> 
                   Remove
                </TouchableOpacity>
            </View>
           )} />
        </View>
    )
}

export default Todos