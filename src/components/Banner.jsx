import banner from '../assets/banner-main.png'
import bgImage from '../assets/bg-shadow.png';

export default function Banner() {
  return (
    <div className='container mx-auto text-center py-16 border border-red-500 bg-cover'
    style={{ backgroundImage: `url(${bgImage})`, }}>
      <div className='pb-5 flex justify-center border border-red-500'>
        <img src={banner} alt="Logo" /> 
      </div> 
      <div>
        <p className="text-2xl md:text-3xl lg:text-5xl font-extrabold">
        Assemble Your Ultimate Dream 11 Cricket Team
        </p>
        <p className="text-xl md:text-1xl lg:text-3xl font-bold py-4">Beyond Boundaries Beyond Limits</p>
        <button className='text-base md:text-lg lg:text-xl font-semibold py-5 px-8 rounded-2xl 
        bg-[#E6FD29] hover:bg-[#E6FD29] ring-4 ring-[#E6FD29] ring-offset-4 ring-offset-slate-800 hover:ring-offset-slate-500 dark:ring-offset-slate-900 '>
          Claim Free Credit
        </button>
        </div>
    </div>
  )
}
