import React from 'react'
import Section from '../ui/section'
import Image from 'next/image'
import ContactImage from '@/public/assets/contact.jpeg'
import FormComponent from '../ui/form'
import { MdOutlineMail } from 'react-icons/md'
import { MdContentCopy } from "react-icons/md";
import { LuCircleUserRound } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import {Button} from '../ui/button'

const formFields = [
  { icon: <LuCircleUserRound className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Your Name', type: 'text' },
  { icon: <MdOutlineMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Your Email', type: 'email' },
  { icon: <LiaTelegramPlane className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Subject Issue', type: 'text' },
];

const Contact = () => {
  return (
    <Section color='p-0' width='screen' id="contact" style='relative flex flex-col justify-center items-center'>
      <div className="h-[30rem] overflow-hidden relative">
        <Image src={ContactImage} alt='' className='w-screen opacity-30'/>
      </div>
      <div className="absolute w-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[80%] md:w-[50%] bg-slate-700 bg-opacity-30 p-6 rounded-xl">
          <div className="text-black flex justify-center items-center gap-4 p-6 italic text-4xl md:text-5xl">
              <span className="">Contact </span>
              <span className='text-red-500'>Us</span>
          </div>
          <div className="text-slate-500 w-full text-center leading-10 mt-3 mb-3">
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est molestias consectetur atque harum accusantium sit. Qui officiis facilis, consequuntur omnis magni labore deserunt amet ut at soluta magnam aut.
            </p>
          </div>
          <FormComponent formFields={formFields} className={'w-full'}>
            <div className="relative flex justify-center items-center mt-3">
                <div className="absolute inset-y-0 left-0 flex pl-3 pointer-events-none">
                  <MdContentCopy className='text-slate-400 text-xl mt-3'/>
                </div>
                <textarea
                  placeholder='Describe The Issue'
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[10rem] pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="flex justify-center items-center p-4">
              <Button className='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white'>
                Contact Us
              </Button>
            </div>
          </FormComponent>
        </div>
      </div>
      <div className="h-[25rem] relative"></div>
    </Section>
  )
}

export default Contact