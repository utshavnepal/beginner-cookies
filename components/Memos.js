import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useMemo, useState} from 'react'

const Memos = () => {
    const [count,setCount] = useState(0)
    const [todos, settODOS] = useState([])
    const allprimes = useMemo(()=>expensiveCalculation(count),[count]);
    const increment = ()=>{
        setCount((e)=>e+1)
        console.log(count)
    }
    const decrement = ()=>{
        setCount((e)=>e-1)
    }
    const addTodo = ()=>{
        console.log(count)
        settODOS((t)=>[...t,"New Todo"])
        console.log(todos)
    }
  return (
    <View>
      <Text>Memos</Text>
      <TouchableOpacity onPress={addTodo} style={{padding:20, margin:30, alignItems:'center', alignSelf:'center', justifyContent:'center'}}>
      <Text>
        add todos


      </Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={increment}>
<Text>
    increment
</Text>
      </TouchableOpacity>
      <Text>
        {allprimes}
      </Text>
    </View>
  )
}

const expensiveCalculation = (num)=>{
    console.log('...calculating')
    for(let i =0; i<100000; i++){
        num+=1 
    }
    return num
}
export default Memos

const styles = StyleSheet.create({})