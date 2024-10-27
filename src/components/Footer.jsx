//import logo-footer from '../assets/logo-footer.png'
import footer from '../assets/logo-footer.png'

export default function Footer() {
  return (
  <div className="absolute-full mx-auto">
    <div className="relative top-20 md:top-24 lg:top-40">
      
      <div className="static bottom-10  w-10/12 md:w-9/12 lg:w-8/12 mx-auto p-2 md:p-3 lg:p-5 text-center rounded-2xl bg-[#00000009] overlay border border-white">
        <div className="p-3 md:p-12 lg:p-24 rounded-2xl bg-gradient-to-tr from-[#CAEDF7] via-[#FFFFFF] to-[#FADCA1]">
          <div className="md:8/12 lg::w-1/2 mx-auto text-center rounded-2xl">
            <h1 className="text-base md:text-xl lg:text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="py-4 text-sm md:text-lg lg:text-xl">Get the latest updates and news right in your inbox!</p>
            <input className="text-center border border-gray-300 lg:py-2 lg:px-3 lg:rounded-r-xl rounded-xl" type="text" placeholder="Enter your email"></input>
            <button className="px-14 lg:py-2 lg:px-4 lg:rounded-r-xl rounded-xl bg-gradient-to-r from-[#CC6EA6] to-[#E8CB7B]">Subscribe </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className=" bg-[#06091A] text-white border border-blue-950">
        <section className="container mx-auto mt-8 md:mt-32 py-20 px-8 md:px-10">
          <div className=' py-5'>
          <img className='mx-auto' src={footer} alt="footer" /> 
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:">
            <div>
              <h1  className=" text-lg md:text-xl lg:text-2xl">About Us</h1>
              <p  className=" text-base md:text-lg py-2">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div>
              <h1  className=" lg:text-center text-lg md:text-xl lg:text-2xl">Quick Links</h1>
              <ul className="list-disc pl-6 lg:pl-48 text-base md:text-lg py-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1 className=" text-lg md:text-xl lg:text-2xl">Subscribe</h1>
              <p className=" text-base md:text-lg py-2">Subscribe to our newsletter for the latest updates.</p>
              <div className="">
                <input className="lg:py-2 lg:px-3 rounded-xl md:rounded-l-xl text-center " type="text" placeholder="Enter your email"></input>
                <button className="px-14 md:px-8 lg:py-2 lg:px-4 bg rounded-xl md:rounded-r-xl 
                bg-gradient-to-r from-[#CC6EA6] to-[#E8CB7B]
                ">Subscribe </button>
              </div>
            </div>
          </div>
        </section>
        <hr className="border border-gray-500"></hr>
        <p className="text-sm text-white py-6 text-center font-bold">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  </div>


    
  )
}
