

export default function Player() {
  return (
    
    <div className="container mx-auto my-20 border border-red-500">
      <div>
        <img></img>
      </div>

      <p>name</p>
      <div className="flex justify-between">
        <p>country</p>
        <p>role</p>
      </div> 
      <hr/>
      <div className="flex justify-between">
        <div>
          <p>battingType</p>
          <p>biddingPrice</p>
        </div>
        <div>
          <p>bowlingType</p>
          <button>Choose player</button>
        </div>
      </div>
    </div>
  )
}


