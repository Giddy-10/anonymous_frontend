'use client';
import React from 'react';
import Section from '../ui/section';
import Button from '../ui/button';
import { IoIosMicrophone } from "react-icons/io";
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
        <Section style="grid grid-cols-3 justify-center items-center gap-6 mb-2 text-zinc-300" width="9%" color="bg-red-800">
            {/* Logo Section */}
            <div className="flex justify-center items-center gap-2">
                <IoIosMicrophone className="text-4xl" />
                <h3 className="h3 font-bold">Anonymous</h3>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-4 justify-center items-center gap-3">
                {landingLinks.map((link, index) => (
                    <Link 
                        key={index} 
                        href={link.href} 
                        className="hover:text-white transition-colors duration-300"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* buttons */}
            <div className="flex justify-center items-center gap-4">
                <Button href='' style='bg-emerald-800 hover:bg-emerald-700'>
                    Register
                </Button>
                <Button href='' style='bg-cyan-800 hover:bg-cyan-700'>
                    Log in
                </Button>
            </div>
        </Section>
    );
};

export default Navbar;
