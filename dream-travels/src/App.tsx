import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useGetTrips } from './hooks/use-get-trips'
import './App.css'
import { Button } from './ components/button/button'
import { Nav } from './ components/nav/nav'

function App() {

  const { trips } = useGetTrips()
  const [count, setCount] = useState(0)

  console.log('trips', trips);

  return (
    <>
      
      <Nav />
    </>
  )
}

export default App
