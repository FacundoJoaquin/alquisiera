import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full flex justify-around items-center text-2xl pt-6  font-semibold ">
            <h2 className="text-mainBlue">ALQUILEANDO</h2>
            <ul className="flex gap-x-8 ">
                <li className='hover:text-mainBlue transition-colors duration-200'><Link href={'/'}>HOME</Link></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><Link href={'/about'}>ABOUT</Link></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><Link href={'/about'}>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar