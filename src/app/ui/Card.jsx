import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import { Link } from '../components/icons/Link';
import imgNotFound from '@/../public/imgNotFound.webp'
import { motion, useScroll } from "framer-motion"

const Card = ({ data }) => {

    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className='size-64 rounded-3xl border relative flex flex-col justify-between py-2 shadow-md bg-lightBlue hover:scale-[1.03] transition-all duration-200 cursor-default'>
            <div className='size-36 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-white outline-1 outline outline-gray-400'>
                <Image src={data.imgUrl || imgNotFound} alt='askljdajksd' height={1000} width={1000} className='aspect-square' />
            </div>
            <div className="mt-20 text-center px-1 flex flex-col gap-y-2">
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-gray-400'>{data.location}</p>
            </div>
            <div className='flex justify-between px-4'>
                <span className=''>
                    <p className='text-sm text-gray-400'>{data.company}</p>
                    <p className='font-semibold'>{data.price ? `${data.company == 'Arnoldi Propiedades' ? `$${data.price}` : `$ ${data.price}`}` : 'Sin precio'}</p>
                </span>
                <a href={data.link || 'http://www.bounospropiedades.com.ar/#/search/alquiler'} className='size-8 rounded-lg text-2xl grid place-items-center border border-strongMainBlue hover:bg-mainBlue hover:text-white transition-all duration-300'><Link /></a>
            </div>
        </motion.div>
    )
}

export default Card
