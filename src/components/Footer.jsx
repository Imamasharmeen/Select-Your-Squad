//import logo-footer from '../assets/logo-footer.png'


export default function Footer() {
  return (
  <div className="absolute-full mx-auto  border border-red-600">
    <div className="relative top-20 border-4  border-green-500">
      
      <div className="static bottom-10  w-10/12 md:w-9/12 lg:w-8/12 mx-auto p-5 text-center rounded-2xl bg-[#00000009] overlay border border-red-600">
        <div className="p-5 md:p-12 lg:p-24 rounded-2xl bg-gradient-to-tr from-[#CAEDF7] via-[#FFFFFF] to-[#FADCA1] border border-blue-500">
          <div className="w-1/2 mx-auto text-center rounded-2xl border border-red-600">
          
          
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Subscribe to our Newsletter</h1>
            <p className="py-4 text-base md:text-lg lg:text-xl">Get the latest updates and news right in your inbox!</p>
            <div className="flex justify-center border border-red-500">
              <input className="border border-gray-300 lg:py-2 lg:px-3 rounded-l-xl" type="text" placeholder="Enter your email"></input>
              <button className="py-2 px-4 bg rounded-r-xl bg-gradient-to-r from-[#CC6EA6] to-[#E8CB7B]">Subscribe </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className=" border-green-500">
      <div className=" bg-[#06091A] text-white border border-red-500">
        <section className="container mx-auto border border-white mt-48 py-20">
          <div>
            <img></img>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:">
            <div className="border border-white">
              <h1  className=" text-lg md:text-xl lg:text-2xl">About Us</h1>
              <p  className=" text-base md:text-lg py-2">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className="border border-white">
              <h1  className=" text-lg md:text-xl lg:text-2xl">Quick Links</h1>
              <ul className="list-disc pl-4 text-base md:text-lg py-2">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="border border-white">
              <h1 className=" text-lg md:text-xl lg:text-2xl">Subscribe</h1>
              <p className=" text-base md:text-lg py-2">Subscribe to our newsletter for the latest updates.</p>
              <div className="">
                <input className="py-2 px-3 rounded-l-xl" type="text" placeholder="Enter your email"></input>
                <button className="py-2 px-4 bg rounded-r-xl
                bg-gradient-to-r from-[#CC6EA6] to-[#E8CB7B]
                ">Subscribe </button>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>

      </div>
    </div>
  </div>


    
  )
}
