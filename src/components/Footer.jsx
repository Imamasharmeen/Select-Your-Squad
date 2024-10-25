//import logo-footer from '../assets/logo-footer.png'


export default function Footer() {
  return (
  <div>
    <div >
      <div className="container mx-auto p-14 text-center border border-red-600"
       
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">Subscribe to our Newsletter</h1>
        <p className=" text-base md:text-lg lg:text-x3">Get the latest updates and news right in your inbox!</p>
        <div className="">
          <input type="text" placeholder="Enter your email"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </div>

    <div>
      <div className="bg-[#06091A] text-white border border-red-500">
        <section className="container mx-auto border border-white py-20">
          <div>
            <img></img>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:">
            <div className="border border-white">
              <h1>About Us</h1>
              <p>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className="border border-white">
              <h1 className="border border-white">Quick Links</h1>
              <ul className="list-disc pl-4">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="border border-white">
              <h1>Subscribe</h1>
              <p>Subscribe to our newsletter for the latest updates.</p>
              <div>
                <input type="text" placeholder="Enter your email"></input>
                <button>Subscribe</button>
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
