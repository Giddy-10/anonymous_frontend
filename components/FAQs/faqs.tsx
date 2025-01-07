import React from 'react';
import Section from '../ui/section';
import Card from '../ui/card';
import { BsFillPatchQuestionFill } from "react-icons/bs";

const FAQs = () => {
  return (
    <Section color="" style="flex flex-col justify-center items-center" width="full">
      <div className="flex flex-col md:flex-row justify-center items-center md:w-[80%] border shadow-xl rounded-xl">
        <div className="flex flex-col p-6 gap-3 md:w-[40%] md:mt-[-22rem]">
          <div className="text-3xl md:text-5xl italic">
            <span>frequently </span>
            <span className="text-red-600"> asked</span>
            <span> questions</span>
          </div>
          <div className="leading-10 text-slate-400">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et esse deleniti tempora modi assumenda dicta cum minus sequi saepe!
            </p>
          </div>
        </div>

        <div className="w-[80%] md:w-[60%] p-4 flex flex-col justify-center items-center gap-2">
          <Card style="shadow-xl rounded-xl text-black">
            <div className="flex justify-between items-center text-2xl p-4">
              <span className='italic'>What is anonymous</span>
              <BsFillPatchQuestionFill/>
            </div>
            <div className="leading-10 text-slate-400 p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et esse deleniti tempora modi assumenda dicta cum minus sequi saepe!
              </p>
            </div>
          </Card>
          <Card style="shadow-xl rounded-xl text-black">
            <div className="flex justify-between items-center text-2xl p-4">
              <span className='italic'>Is my identity protected</span>
              <BsFillPatchQuestionFill/>
            </div>
            <div className="leading-10 text-slate-400 p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et esse deleniti tempora modi assumenda dicta cum minus sequi saepe!
              </p>
            </div>
          </Card>
          <Card style="shadow-xl rounded-xl text-black">
            <div className="flex justify-between items-center text-2xl p-4">
              <span className='italic'>How long does the response take</span>
              <BsFillPatchQuestionFill/>
            </div>
            <div className="leading-10 text-slate-400 p-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et esse deleniti tempora modi assumenda dicta cum minus sequi saepe!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default FAQs;
