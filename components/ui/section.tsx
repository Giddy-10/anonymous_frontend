import React, { ReactNode } from 'react';

// define type for props
interface SectionProps {
  width: string; 
  style: string;
  children: ReactNode;
  color: string;
  id?: string;
}

// create reusable
const Section: React.FC<SectionProps> = ({ width, style, children, color, id }) => {
  return (
    <section className={`w-screen flex items-center justify-center p-4 ${color}`} id={id}>
      <div className={`w-${width} ${style}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
