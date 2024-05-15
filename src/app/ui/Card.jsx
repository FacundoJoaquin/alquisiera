import Image from "next/image";
import React from "react";
import { Link } from "../components/icons/Link";

const Card = ({ data }) => {
  return (
    <div className="h-[27rem] w-80 border border-gray-300 shadow-md shadow-lightBlue bg-lightBlue rounded-3xl p-4 flex flex-col gap-y-2 hover:scale-[1.03] transition-all duration-200 cursor-default xs:w-full xs:h-max">
      <div className="w-full flex justify-center">
        <div className="size-40 rounded-full  overflow-hidden border border-white outline-1 outline outline-gray-400">
          <Image
            src={data.imgUrl || imgNotFound}
            alt={`Alquiler Puerto Madryn, en la dirección ${data.location} y ${data.title}`}
            height={1000}
            width={1000}
            className="aspect-square"
          />
        </div>
      </div>
      <div className="text-start px-1 mt-2 flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl">{data.title}</h3>
        <p className="text-gray-400 text-lg">{data.location}</p>
      </div>
      <div className="flex mt-auto justify-between text-lg">
        <span className="">
          <p className="text-sm text-gray-400">{data.company}</p>
          <p className="font-semibold">
            {data.price ? `$${data.price}` : "Sin precio"}
          </p>
        </span>
        <a
          href={data.link}
          target="__BLANK"
          className="size-12 rounded-lg text-2xl grid place-items-center border border-strongMainBlue hover:bg-mainBlue hover:text-white transition-all duration-300"
        >
          <Link />
        </a>
      </div>
    </div>
  );
};


export default Card;

/* import Image from "next/image";
import React from "react";
import { Link } from "../components/icons/Link";

const Card = ({ data }) => {
  return (
    <div className="h-[27rem] w-80 border border-gray-300 shadow-md shadow-lightBlue bg-lightBlue rounded-3xl p-4 flex flex-col gap-y-2 hover:scale-[1.03] transition-all duration-200 cursor-default xs:w-full">
      <div className="w-full flex justify-center">
        <div className="size-40 rounded-full  overflow-hidden border border-white outline-1 outline outline-gray-400">
          <Image
            src={data.imgUrl || imgNotFound}
            alt={`Alquiler Puerto Madryn, en la dirección ${data.location} y ${data.title}`}
            height={1000}
            width={1000}
            className="aspect-square"
          />
        </div>
      </div>
      <div className="text-start px-1 mt-2 flex flex-col gap-y-2">
        <h3 className="font-semibold text-xl">{data.title}</h3>
        <p className="text-gray-400 text-lg">{data.location}</p>
      </div>
      <div className="flex mt-auto justify-between text-lg">
        <span className="">
          <p className="text-sm text-gray-400">{data.company}</p>
          <p className="font-semibold">
            {data.price ? `$${data.price}` : "Sin precio"}
          </p>
        </span>
        <a
          href={data.link}
          target="__BLANK"
          className="size-12 rounded-lg text-2xl grid place-items-center border border-strongMainBlue hover:bg-mainBlue hover:text-white transition-all duration-300"
        >
          <Link />
        </a>
      </div>
    </div>
  );
};

export default Card;
 */

/* import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import { Link } from '../components/icons/Link';
import imgNotFound from '@/../public/imgNotFound.webp'
import { motion, useScroll } from "framer-motion"

const Card = ({ data }) => {
    return (
        <div
            className='size-64 rounded-3xl border relative flex flex-col justify-between h-full py-2 shadow-md bg-lightBlue hover:scale-[1.03] transition-all duration-200 cursor-default'>
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
                   <p className='font-semibold'>{data.price ? `$${data.price}` : 'Sin precio'}</p>
                </span>
                <a href={data.link} target='__BLANK' className='size-8 rounded-lg text-2xl grid place-items-center border border-strongMainBlue hover:bg-mainBlue hover:text-white transition-all duration-300'><Link /></a>
            </div>
        </div>
    )
}

export default Card
 */
