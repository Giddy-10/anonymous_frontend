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
    <Link href={href} className={`p-2 rounded-lg transition-colors duration-300 ${style}`}>
      {children}
    </Link>
  )
}

export default Button