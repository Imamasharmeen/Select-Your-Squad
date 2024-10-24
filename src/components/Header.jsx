import logo from '../assets/logo.png'
import coin from '../assets/coin.png'

export default function Header() {
  return (
    <div>
        <nav className="container mx-auto flex justify-between items-center my-10 border border-red-500">
            <div className="flex justify-between">
            <img src={logo} alt="Logo" />        
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal text-base ">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                </ul> 
                <div className="flex items-center gap-2">
                    <button>0 Coin</button>
                    <img src={coin} alt="Coin" />
                </div>   
                                                
            </div>
            
        </nav>
    </div>
  )
}
