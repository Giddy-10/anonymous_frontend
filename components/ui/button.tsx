import React, {ReactNode} from 'react'
import Link from 'next/link';

// define type for props
interface ButtonProps {
  style: string; 
  href: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({style, href, children}) => {
  return (
    <Link href={href} className={`px-10 py-2 rounded-3xl transition-colors duration-300 ${style}`}>
      {children}
    </Link>
  )
}

export default Button