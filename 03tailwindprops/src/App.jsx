import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
let myObject = {
  name: 'object_name',
  age:'20',
  address:{
    city: 'Rijad',
    country: 'Saudi'
  }
}
let newArr = [1,2,3]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username="adam" post='accountant' />
    <Card username="lukasz" post='programmer' newObj={myObject}/>
    {/* curly braces below cause this is array, similar case on objects or db data */}
    <Card myArr ={newArr}/> 
    </>
  )
}

export default App
