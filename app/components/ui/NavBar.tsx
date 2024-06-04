import Link from 'next/link'
import React from 'react'

const navItem = [
    {path: '/home',     text:'Home'},
    {path: '/about',    text:'About'},
    {path: '/contact',  text:'Contact'},
]


export const NavBar: React.FC = () => {
    return (
        <nav className='hidden md:flex md:flex-wrap md:p-3 md:gap-10 md:w-10/12 md:justify-end md:align-middle md:content-center rounded-lg bg-teal-600'>

            <Link href={'/home'} className='flex items-center'> EJFG </Link>

            <div className='flex flex-1'></div>
            {
                navItem.map(({path, text}) => (
                    <Link key={path} href={path} className='p-2'> {text} </Link>
                ))
            }
        </nav>
    )
}