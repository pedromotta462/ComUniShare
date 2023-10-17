import MapContainer from '@/components/map/Maps'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-50 items-center justify-center p-5'>
      <div className='flex items-center justify-center shadow-[0_10px_20px_rgba(0,_0,_0,_0.7)] h-full w-full ml-10 border border-4 border-orange-300 rounded-3xl'>
        <MapContainer />
      </div>
      <p className='w-[90%] ml-5 mr-5 text-center text-[#E26E44] text-3xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quidem iure, perspiciatis officia quis quae incidunt maxime repudiandae culpa alias.
      </p>
    </div>
  )
}
