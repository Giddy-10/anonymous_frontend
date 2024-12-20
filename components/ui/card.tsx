import React, { ReactNode } from 'react'

// define type for props
interface CardProps {
  style: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({style, children}) => {
  return (
    <article className={`shadow-2xl	bg-slate-100 rounded-xl px-10 ${style}`}>
      {children}
    </article>
  )
}

export default Card