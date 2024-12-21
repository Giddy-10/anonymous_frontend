'use client';
import React from 'react';
import Section from '../ui/section';
import Button from '../ui/button';
import { IoIosMicrophone } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import Link from 'next/link';

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
    return (
        <Section style="xl:grid xl:grid-cols-3 justify-center items-center gap-6 mb-2 md:flex md:justify-eve" width="[90%]" color="fixed">
            {/* Logo Section */}
            <div className="flex justify-center items-center gap-2 text-white">
                <IoIosMicrophone className="text-4xl" />
                <h3 className="h3 font-bold">Anonymous</h3>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-4 justify-center items-center gap-3 text-white">
                {landingLinks.map((link, index) => (
                    <Link 
                        key={index} 
                        href={link.href} 
                        className="hover:text-red-600 transition-colors duration-300 xl:block md:hidden"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* buttons */}
            <div className="flex justify-center items-center gap-4 ">
                <Button href='' style='bg-white font-bold hover:bg-red-500 text-slate-700 xl:block md:hidden'>
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
