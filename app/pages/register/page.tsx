import Section from '@/components/ui/section'
import React from 'react'
import FormComponent from '@/components/ui/form'
import Button from '@/components/ui/button';
import { MdOutlineMail } from 'react-icons/md';
import { LuCircleUserRound } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdContentCopy } from "react-icons/md";
import RegisterImage from '@/public/assets/privacy3.gif'
import Image from 'next/image';

const formFields = [
  { icon: <LuCircleUserRound className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Your Name', type: 'text' },
  { icon: <MdOutlineMail className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Your Email', type: 'email' },
  { icon: <LiaTelegramPlane className="w-5 h-5 text-gray-500 dark:text-gray-400" />, placeholder: 'Subject Issue', type: 'text' },
];

const page = () => {
  return (
    <Section color='' width='[80%]' style='flex justify-center items-center'>
      <div className="mt-20 p-10 flex items-center justify-center w-full gap-4">
        <div className="">
          <Image src={RegisterImage} alt=''/>
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
              <Button style='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white' href=''>
                Contact Us
              </Button>
            </div>
          </FormComponent>
      </div>
    </Section>
  )
}

export default page