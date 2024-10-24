
import Banner from './components/Banner'
import Header from './components/Header'
import Players from './components/Players'
import { useState } from 'react';

export default function App() {
  const [coins, setCoins] = useState(parseInt(0))// It starts with an initial value of 0.
  //console.log(coins)
  
  return (
    <div>
      <Header coins = {coins}></Header>
      <Banner setCoins = {setCoins} coins = {coins}
      ></Banner>
      <Players></Players>
      
    </div>
  )
}

