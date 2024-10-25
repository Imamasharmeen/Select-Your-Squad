
import AvailableButton from './components/AvailableButton';
import Banner from './components/Banner'
import Header from './components/Header'
import Players from './components/Players'
import { useState } from 'react';

export default function App() {
  const [coins, setCoins] = useState(parseInt(0))// It starts with an initial value of 0.
  //console.log(coins)

  const [choosePlayers, setChoosePlayers] = useState([])

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'active'
  })
  const handleIsActive = (status) => {
    if( status == 'available'){
      setIsActive({
        available: true,
        status: 'Available'})
    }
    else{
      setIsActive({
        available: false,
        status: 'selected'})
    }
  }

  console.log(isActive)
  return (
    <div>
      <Header coins = {coins}></Header>
      <Banner setCoins = {setCoins} coins = {coins}
      ></Banner>
      <AvailableButton handleIsActive= {handleIsActive} isActive={isActive}></AvailableButton>
      <Players
      coins = {coins} setCoins = {setCoins}
      ></Players>
      
    </div>
  )
}

