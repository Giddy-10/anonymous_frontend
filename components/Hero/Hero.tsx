import React from "react"
import Section from "../ui/section"
import {Button} from "../ui/button"
import Card from "../ui/card"
import { FcDataProtection } from "react-icons/fc"
import { FcCustomerSupport } from "react-icons/fc"
import { FcSynchronize } from "react-icons/fc"

const Hero = () => {
    return (
        <>
            <Section
                width="[80%]"
                color="bg-red-600"
                style="w-screen md:w-[80%] flex justify-center items-center text-white"
            >
                <div className="mt-20 p-10 px-0 md:px-10 flex flex-col items-center justify-center relative">
                    <div className="italic text-2xl md:text-4xl lg:text-5xl text-slate-100 w-[80%] md:w-[60%] text-center pt-20 md:pt-5 p-5 leading-loose">
                        <p>
                            <strong>
                                Welcome to anonymous, a modern solution for USIU
                                students to
                            </strong>
                        </p>
                        <p>demand accountability</p>
                    </div>
                    <div className="leading-10 text-center mt-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat facilis praesentium nihil dolor,
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat facilis,
                        </p>
                    </div>
                    <div className="mt-8 mb-20 flex justify-center items-center gap-4">
                        <Button
                            className="bg-white font-bold text-slate-700 xl:block md:hidden"
                        >
                            Get Started
                        </Button>
                        <Button
                            className="bg-white font-bold text-slate-700 xl:block md:hidden"
                        >
                            Contact us
                        </Button>
                    </div>
                </div>
            </Section>
            <div className="hero-card-container h-fit px-2 text-black grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 md:justify-center items-center">
                <Card style="">
                    <div className="flex justify-center items-center gap-4 p-4">
                        <FcDataProtection className="text-3xl" />
                        <span>Anonimity</span>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center p-2 text-center mb-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex reprehenderit, doloribus ipsam eaque ea
                            unde amet voluptatem expedita, velit pariatur odio
                            commodi ut eum culpa sit vero nulla possimus
                            delectus.
                        </p>
                    </div>
                </Card>
                <Card style="">
                    <div className="flex justify-center items-center gap-4 p-4">
                        <FcSynchronize className="text-3xl" />
                        <span>Live Tracking</span>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center p-2 text-center mb-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex reprehenderit, doloribus ipsam eaque ea
                            unde amet voluptatem expedita, velit pariatur odio
                            commodi ut eum culpa sit vero nulla possimus
                            delectus.
                        </p>
                    </div>
                </Card>
                <Card style="">
                    <div className="flex justify-center items-center gap-4 p-4">
                        <FcCustomerSupport className="text-3xl" />
                        <span>
                            {" "}
                            <strong>24/7</strong> Support
                        </span>
                    </div>
                    <hr />
                    <div className="flex justify-center items-center p-2 text-center mb-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex reprehenderit, doloribus ipsam eaque ea
                            unde amet voluptatem expedita, velit pariatur odio
                            commodi ut eum culpa sit vero nulla possimus
                            delectus.
                        </p>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Hero
