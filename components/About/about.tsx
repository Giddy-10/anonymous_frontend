import React from 'react'
import Section from '../ui/section'
import Card from '../ui/card'
import { FcSmartphoneTablet } from "react-icons/fc";
import Image from 'next/image';
import AboutImage from '@/public/assets/about.gif'
import { FcPlus } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";

const About = () => {
  return (
    <Section style='flex flex-col justify-center items-center gap-2 p-4' color='' width='[70%]'>
      <div className="flex justify-center items-center">

      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="flex flex-col gap-3 flex-1">
            <Card style=''>
                <div className="flex justify-center items-center gap-4 p-4">
                    <FcSmartphoneTablet className='text-3xl'/>
                    <span><strong>Accessibility</strong></span>
                </div>
                <hr />
                <div className="flex justify-center items-center p-2 text-center mb-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit, doloribus ipsam eaque ea unde amet voluptatem expedita, velit pariatur odio commodi ut eum culpa sit vero nulla possimus delectus.
                    </p>
                </div>
            </Card>
            <Card style=''>
                <div className="flex justify-center items-center gap-4 p-4">
                    <FcPlus className='text-3xl'/>
                    <span><strong>Assured Solutions</strong></span>
                </div>
                <hr />
                <div className="flex justify-center items-center p-2 text-center mb-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit, doloribus ipsam eaque ea unde amet voluptatem expedita, velit pariatur odio commodi ut eum culpa sit vero nulla possimus delectus.
                    </p>
                </div>
            </Card>
        </div>

        <div className="flex flex-col gap-3 flex-1 rounded-xl overflow-hidden">
            <Image src={AboutImage} alt='' className="w-full h-[27rem] object-cover"/>
        </div>

        <div className="flex flex-col gap-3 flex-1">
            <Card style=''>
                <div className="flex justify-center items-center gap-4 p-4">
                    <FcInvite className='text-3xl'/>
                    <span><strong>Assured response</strong></span>
                </div>
                <hr />
                <div className="flex justify-center items-center p-2 text-center mb-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit, doloribus ipsam eaque ea unde amet voluptatem expedita, velit pariatur odio commodi ut eum culpa sit vero nulla possimus delectus.
                    </p>
                </div>
            </Card>
            <Card style=''>
                <div className="flex justify-center items-center gap-4 p-4">
                  <FcInvite className='text-3xl'/>
                  <span><strong>Assured response</strong></span>
                </div>
                <hr />
                <div className="flex justify-center items-center p-2 text-center mb-3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit, doloribus ipsam eaque ea unde amet voluptatem expedita, velit pariatur odio commodi ut eum culpa sit vero nulla possimus delectus.
                    </p>
                </div>
            </Card>
        </div>
      </div>
    </Section>
  )
}

export default About