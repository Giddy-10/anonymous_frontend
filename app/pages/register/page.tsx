import Section from '@/components/ui/section'
import React from 'react'
import FormComponent from '@/components/ui/form'
import Button from '@/components/ui/button';
import { MdOutlineMail } from 'react-icons/md';
import { MdPassword } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import RegisterImage from '@/public/assets/privacy3.gif'
import Image from 'next/image';

const formFields = [
  { icon: <MdOutlineMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Your Email', type: 'email' },
  { icon: <MdPassword className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Enter Password', type: 'password' },
  { icon: <MdPassword className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Re-enter Password', type: 'password' },
  { icon: <FaUserSecret className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Enter security phrase eg pet\s name', type: 'text' },
];

const page = () => {
  return (
    <Section color='' width='[80%]' style='flex justify-center items-center'>
      <div className="mt-40 p-10 grid grid-cols-2 items-center justify-center gap-4 shadow-2xl	bg-slate-100 rounded-xl px-10 w-[70%]">
        <div className="h-[100%]">
          <Image src={RegisterImage} alt='' className='h-[100%]'/>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-4">
            <span className='text-2xl italic'>
              <strong>Sign Up</strong>
            </span>
          </div>
          <FormComponent formFields={formFields} className={'w-full'}>
            <div className="flex justify-center items-center p-4 gap-4">
              <Button style='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white' href=''>
                Sign Up
              </Button>
              <Button style='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white ' href=''>
                Log In
              </Button>
            </div>
          </FormComponent>
        </div>
      </div>
    </Section>
  )
}

export default page