
import AvailableButton from './components/AvailableButton';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Header from './components/Header'
import { useState } from 'react';


export default function App() {
 const [coins, setCoins] = useState(parseInt(0))// It starts with an initial value of 0.
  //console.log(coins)
  const handleAddCoins = (addCoins)=> {
    //setCoins(coins-addCoins)

    if(coins > addCoins){
      setCoins(coins - addCoins)
      
    }
    else {
    alert("Not enough coins to select this player!");
    }

  }
 
  //Conditional rendering for toggle buttons
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
  // State to manage for choose player display
  const [selectedPlayers, setSelectedPlayers] = useState([])


  //Add single player to the array
  const handleSelectedPlayer = (player) => {
    const isPlayerSelected = selectedPlayers.find((p) => p.playerId == player.playerId)
    if (isPlayerSelected){
      alert('Player selected')
    }
    else{ 
      handleAddCoins(player.biddingPrice)
      const newPlayer = [...selectedPlayers, player]
      setSelectedPlayers(newPlayer)
    }
  }

  //delate button
  const handleDelete = (id) => {
    console.log(id)
    const remainingPlayers = selectedPlayers.filter((p) => p.playerId != id)

    setSelectedPlayers(remainingPlayers);
  }

  return (
    <div>
      <Header 
        coins = {coins}
      ></Header>

      <Banner 
        setCoins = {setCoins} 
        coins = {coins}
      ></Banner>
      <section className='container mx-auto items-center my-16 border border-gray-600'>
        <div>
          <AvailableButton
            handleIsActive= {handleIsActive} 
            isActive={isActive}
            selectedPlayers={selectedPlayers}
            handleDelete={handleDelete}
            handleSelectedPlayer={handleSelectedPlayer}
          ></AvailableButton>
        </div>       
      </section>
      <Footer></Footer>
      
    </div>
  )
}




