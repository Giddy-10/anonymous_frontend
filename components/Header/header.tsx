import React from 'react'
import Section from '../ui/section'
import Button from '../ui/button'

const Header = () => {
  return (
    <Section width='90vw' style='flex justify-center items-center text-white mt-[2rem]' color=''>
      <div className="flex flex-col justify-center items-center ">
        <div className="text-black flex justify-center items-center gap-4 p-6 italic text-3xl md:text-5xl">
            <span className="">Make USIU</span>
            <span className='text-red-500'>Better, Safer, & Convinient</span>
            <span>for All</span>
        </div>
        <div className="text-slate-500 md:w-[50%] text-center leading-10">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam est molestias consectetur atque harum accusantium sit. Qui officiis facilis, consequuntur omnis magni labore deserunt amet ut at soluta magnam aut.
          </p>
        </div>
        <div className="mt-10 p-4 flex justify-center items-center gap-8">
          <Button style='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white' href=''>
            Track your issue
          </Button>
          <Button style='border-2 border-red-600 text-slate-700 hover:bg-red-500 hover:text-white' href=''>
            Report an issue
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Header