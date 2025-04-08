import clsx from "clsx"
import { ReactNode } from "react"

interface HeadingProps{
  title: ReactNode | string
  description: string | ReactNode
  className?:string
}

export default function Heading ({title,description,className}:HeadingProps){
  return (
		<div className={clsx("text-center",className)}>
			<h2 className='mb-4 text-5xl font-bold text-title'>{title}</h2>
			<p className='text-lg'>{description}</p>
		</div>
	)
}