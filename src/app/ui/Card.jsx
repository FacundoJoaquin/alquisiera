import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import { Link } from '../components/icons/Link';

const Card = ({ data }) => {

    console.log(data);
    return (
        <div className='size-64 rounded-3xl border relative flex flex-col justify-between py-2 shadow-md'>
            <div className='size-36 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                <Image src={data.imgUrl} alt='askljdajksd' height={1000} width={1000} className='aspect-square' />
            </div>
            <div className="mt-20 text-center px-1 flex flex-col gap-y-2">
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-gray-400'>{data.location}</p>
            </div>
            <div className='flex justify-between px-4'>
                <span className=''>
                    <p className='text-sm text-gray-400'>{data.company}</p>
                    <p className='font-semibold'>{data.price ? data.price : 'Sin precio'}</p>
                </span>
                <a href={data.link} className='size-8 rounded-lg text-2xl grid place-items-center border border-gray-300 hover:bg-gray-300 transition-all duration-200'><Link /></a>
            </div>
        </div>
    )
}

export default Card
/*     <div className='w-[250px] h-[400px] rounded-md border shadow-mainBlue'>
      <div className="w-full h-[175px] overflow-hidden p-2 flex items-center">
        <Image
          src={data.imgUrl}
          alt={data.title}
          width={250}
          height={250}
          className="object-scale-down" // Cambiamos a object-scale-down
        />
      </div>
    </div> */