import React from 'react'
import Image from 'next/image'
import whale from '@/../public/whale.png'

const Home = () => {
  return (
    <div className="flex-1 flex">
    <div className="w-1/3 p-4  flex flex-col  justify-center gap-y-4">
      <h3 className="text-4xl font-semibold">
        Encontra tu <span className="text-mainBlue font-bold">próximo hogar</span> acá!

      </h3>
      <p className="text-gray-400 text-st">Alquileando es una contribución a la comunidad de Puerto Madryn. <br /> En estos tiempos difíciles, encontrar nuestro próximo hogar es realmente desafiante. <br /> Espero que ahora sea un poco más fácil.</p>
      <button className="bg-mainBlue rounded-full w-36 py-2 border text-white hover:bg-strongMainBlue transition-colors duration-300">Ver alquileres</button>
    </div>


    <div className="w-2/3 p-10 flex justify-center items-center">
      <Image src={whale} alt='whale' />
    </div>
  </div>
  )
}

export default Home