
import AvailableButton from './components/AvailableButton';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Header from './components/Header'
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify'; // NEW: Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // NEW: Import Toastify CSS


export default function App() {
  const [coins, setCoins] = useState(parseInt(0))
   // State to manage for choose player display
  const [selectedPlayers, setSelectedPlayers] = useState([])


  const handleAddCoins = (biddingPrice, player)=> {
    if(coins >= biddingPrice){
      setCoins((prevCoins) => prevCoins - biddingPrice);
      setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
      toast.success(`Congrates !! ${player.name} is now in your squad.`); 
    }
    
    else  {
      toast.error("Not enough coins to select this player!");
    }

  }

  //Conditional rendering for toggle buttonsgggg
  const [isActive, setIsActive] = useState({
    available: true,
    status: 'active'
  })

    const showAvailablePlayers = () => {
      setIsActive({
        available: true,
        status: 'Available'
      });
    };

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




  //Add single player to the array
  const handleSelectedPlayer = (player) => {
    const isPlayerSelected = selectedPlayers.find((p) => p.playerId == player.playerId)
    
    if (isPlayerSelected){
      toast.info(`${player.name} is already selected`);
    }
    else if(selectedPlayers.length >= 6){
      toast.error("You can only select up to 6 players.");
    }
    else{ 
      handleAddCoins(player.biddingPrice, player)
    }
  }

  //delate button
  const handleDelete = (id) => {
    //console.log(id)
    const remainingPlayers = selectedPlayers.filter((p) => p.playerId != id)

    setSelectedPlayers(remainingPlayers);
  }


  return (
    <div>

      {/* Toast Container to display notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />


      <Header 
        coins = {coins}
      ></Header>

      <Banner 
        setCoins = {setCoins} 
        coins = {coins}
      ></Banner>
      
        <div>
          <AvailableButton
            handleIsActive= {handleIsActive} 
            isActive={isActive}
            selectedPlayers={selectedPlayers}
            handleDelete={handleDelete}
            handleSelectedPlayer={handleSelectedPlayer}
            showAvailablePlayers={showAvailablePlayers} 
            
          ></AvailableButton>
        </div>       
      
      <Footer></Footer>
      
    </div>
  )
}



