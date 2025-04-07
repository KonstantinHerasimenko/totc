/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

export default function Button({
	as,
  children,
	backgroundClassName,
	className,
  generalClassName,
	...props
}: any) {

  const Component = as

	return (
		<Component
			className={clsx(className, generalClassName, 'group relative duration-300 ease-in-out')}
			{...props}
		>
      {children}
			<div
				className={clsx(backgroundClassName, generalClassName,
					'absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out group-hover:h-0 group-hover:w-0',
				)}
			></div>
		</Component>
	)
}
