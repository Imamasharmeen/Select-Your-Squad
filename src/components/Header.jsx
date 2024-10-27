

import logo from '../assets/logo.png'
import coin from '../assets/coin.png'

export default function Header({coins}) {
  return (
    <div  className="w-full bg-white sticky top-0 z-50  bg-opacity-50 backdrop-blur-sm  border border-gray-50">
        <nav className=" w-11/12 md:w-10/12 mx-auto flex justify-between items-center my-5  md:my-8 lg:my-10">
            <div className="flex justify-between">
            <img src={logo} alt="Logo" />        
            </div>
            <div className="md:flex gap-2 md:gap-4 lg:gap-8 items-center">
                <ul className="flex gap-2 md:gap-4 lg:gap-8 text-base md:text-lg lg:text-2xl ">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul> 
                <div className="flex items-center gap-2 rounded-xl p-1 md:p-3  border border-gray-200 text-base md:text-lg lg:text-2xl ">
                    <button>{coins} Coin</button>
                    <img src={coin} alt="Coin" />
                </div>   
                                                
            </div>
            
        </nav>
    </div>
  )
}

