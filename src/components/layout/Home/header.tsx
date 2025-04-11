import Image from 'next/image'
import background from '@/assets/images/header-bg.jpg'
import background2 from "@/assets/images/header-bg-2.png"
import Navigation from '../navigation'
import Button from '@/components/ui/button'
import Link from 'next/link'
import PlayButton from "@/assets/icons/play-button.svg"

export default function Header() {
	return (
		<header className='relative min-h-screen'>
			<Navigation isBgLight={true} />
			<div className='ml-[7.5rem] pt-48 text-light'>
				<h1 className='mb-8 text-[3.375rem] font-bold leading-[3.875rem]'>
					<strong className='font-bold text-highlight-2'>Studying</strong> Online is now
					<br /> much easier
				</h1>
				<p className='mb-14 text-white'>
					TOTC is an interesting platform that will teach
					<br /> you in more an interactive way
				</p>
				<div className='flex items-center gap-10'>
					<Button
						as={Link}
						href={'/auth'}
						backgroundClassName='bg-white-03'
						generalClassName='rounded-full '
						className='border-4 border-white-03 px-12 py-3 font-medium capitalize text-light'
					>
						Join for free
					</Button>
					<div className='flex items-center gap-6'>
						<Link
							href={'/'}
							className='text-xs'
						>
							<PlayButton className='h-20' />
						</Link>
						<h4>Watch how it works</h4>
					</div>
				</div>
			</div>
			<Image
				src={background}
				alt=''
				className='absolute left-0 top-0 -z-50 h-full w-full object-cover object-left-bottom'
			/>
		</header>
	)
}
