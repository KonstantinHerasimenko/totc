'use client'
import LogoLight from '@/assets/icons/logo-light.svg'
import LogoDark from '@/assets/icons/logo-dark.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import onAction from '@/utils/onAction'
import Button from '../ui/button'

interface NavigationProps {
	isBgLight: boolean
}

interface link {
	href: string
	caption: string
}

export default function Navigation({ isBgLight, ...props }: NavigationProps) {
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		setToken(localStorage.getItem('token'))
	}, [])

	const Logo = () => (!isBgLight ? <LogoDark /> : <LogoLight />)

	const links: link[] = [
		{ href: '/', caption: 'home' },
		{ href: '/', caption: 'courses' },
		{ href: '/', caption: 'careers' },
		{ href: '/', caption: 'blog' },
		{ href: '/', caption: 'about us' },
	]

	return (
		<nav
			className={clsx('flex items-center justify-between px-[7.5rem] pt-7 text-2xl', {
				'text-light': isBgLight,
			})}
		>
			<Logo />
			<div className='flex items-center'>
				<ul className='flex gap-10'>
					{links.map(({ href, caption }: link) => {
						return (
							<Link
								href={href}
								key={'link-' + caption.replace(' ', '-')}
								className='capitalize'
							>
								{caption}
							</Link>
						)
					})}
				</ul>
				{token === null ? (
					//TODO: add profile Link and Icon
					<div className='ml-20 flex items-center gap-7'>
						<Button
							as={Link}
							href={'/auth'}
							backgroundClassName={clsx({ 'bg-white': isBgLight, 'bg-highlight-1': !isBgLight })}
							generalClassName='rounded-full '
							className={clsx('border-4 px-12 py-3 font-medium capitalize', {
								'border-white text-normal hover:text-light': isBgLight,
								'border-highlight-1 text-light hover:text-normal': !isBgLight,
							})}
						>
							login
						</Button>
						<Button
							as={Link}
							href={'/auth'}
							backgroundClassName='bg-white-03'
							generalClassName='rounded-full '
							className={clsx('border-4 px-12 py-3 font-medium capitalize text-light', {
								'border-white-03': isBgLight,
								'border-highlight-2 hover:text-normal': !isBgLight,
							})}
						>
							sign up
						</Button>
					</div>
				) : (
					<div className='mn-16'>{token}</div>
				)}
			</div>
		</nav>
	)
}
/*
colors:{
        text:"#010514",
        "text-highlight-1":"#00CBB8",
        "text-highlight-2":"#F48C06",
        title:"#2F327D",
      :"#fff",
        -highlight-1":"#49BBBD",
        -highlight-2":"#252641",
        -highlight-3":"#29B9E7",
        icon:"#fff",
        "white-03":"rgba(255,255,255,0.3)"
      }
        */
