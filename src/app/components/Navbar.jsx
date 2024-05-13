import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full flex justify-around items-center text-2xl py-6  font-semibold ">
            <h2 className="text-mainBlue">ALQUILEANDO</h2>
            <ul className="flex gap-x-8 ">
                <li className='hover:text-mainBlue transition-colors duration-200'><button>HOME</button></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><button>ABOUT</button></li>
                <li className='hover:text-mainBlue transition-colors duration-200'><button>CONTACT</button></li>
            </ul>
        </nav>
    )
}

export default Navbar