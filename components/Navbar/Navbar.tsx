'use client';
import React, { useState, useEffect } from 'react';
import Section from '../ui/section';
import Button from '../ui/button';
import { IoIosMicrophone } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LandingPageLink {
    label: string;
    href: string;
}

const landingLinks: LandingPageLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/about' }
];

const Navbar = () => {
    const [isScroll, setIsScroll] = useState<boolean>(false)
    const [isRoute, setIsRoute] = useState<Boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false)

    const pathname = usePathname()

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const alertPath = () => {
                if (pathname !== '/pages/landing' && pathname !== '/') {
                    setIsRoute(true)
                } else {
                    setIsRoute(false)
                }
            }
            alertPath()
        }
    }, [pathname, mounted])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) setIsScroll(true)
            else setIsScroll(false)
        }

        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    // Render only if the component is mounted
    if (!mounted) {
        return null;
    }

    return (
        <Section
            style="xl:grid xl:grid-cols-3 justify-center items-center gap-6 mb-2 md:flex md:justify-even"
            width="[90%]"
            color={`fixed top-0 left-0 ${isRoute ? 'bg-red-600' : isScroll ? 'bg-neutral-50 shadow-md z-50' : 'bg-transparent z-50'}`}
        >
            {/* Logo Section */}
            <div className={`flex justify-center items-center gap-2 ${isScroll ? 'text-black' : isRoute ? 'text-white' : 'text-white'}`}>
                <IoIosMicrophone className="text-4xl" />
                <h3 className="h3 font-bold">Anonymous</h3>
            </div>

            {/* Navigation Links */}
            <div className={`grid grid-cols-4 justify-center items-center gap-3 ${isScroll ? 'text-black' : isRoute ? 'text-white' : 'text-white'}`}>
                {landingLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`${isScroll ? 'hover:text-red-600 cursor-pointer' : isRoute ? 'text-white hover:text-white' : 'hover:text-slate-700'} transition-colors duration-300 xl:block md:hidden cursor-pointer`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* buttons */}
            <div className="flex justify-center items-center gap-4 ">
                <Button href='' style={`${isRoute ? 'bg-white text-black' : isScroll ? 'border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white' : 'bg-white text-slate-700 '} font-bold xl:block md:hidden`}>
                    Log in
                </Button>
                <Button href='' style='border-red-800 border-2 text-white border-none text-2xl xl:hidden md:block'>
                    <TiThMenu />
                </Button>
            </div>

        </Section>
    );
};

export default Navbar;
