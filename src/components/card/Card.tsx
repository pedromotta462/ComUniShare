import React from 'react'
import { Button } from '../ui/button'

function Card({imgurl, title, description}: { imgurl: string; title: string; description: string }) {
  return (
    <div className="w-[200px] h-[300px] bg-neutral-800 rounded-3xl text-neutral-300 p-4 m-2 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-gray-400 transition-shadow">
        <img className='w-52 h-[120px] bg-gray-300 rounded-2xl' src={imgurl} alt="pedreiro" />
        <h1 className="text-xl font-extrabold">{title}</h1>
        <p className='text-sm'>{description}</p>
        <Button className="bg-gray-700 font-extrabold p-2 px-6 rounded-xl hover:bg-gray-500 transition-colors">
            Detalhes
        </Button>
    </div>
  )
}

export default Card