'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navigateToId = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    
      }
    

    return (
        <nav className="w-full flex justify-around items-center text-2xl pt-6  font-semibold ">
            <h2 className="text-mainBlue">ALQUILEANDO</h2>
            <ul className="flex gap-x-8 ">
                <li className='hover:text-mainBlue transition-colors duration-200'><button onClick={() => navigateToId('home')}>HOME</button></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><button onClick={() => navigateToId('aboutUs')}>ABOUT</button></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><Link href={'/about'}>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar