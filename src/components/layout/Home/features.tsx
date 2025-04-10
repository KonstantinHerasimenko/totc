import Heading from '@/components/ui/heading'
import importAll from '@/utils/importAll'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'
import Grid from '@/assets/icons/grid.svg'
import Layer from '@/assets/icons/layer.svg'
import Group from '@/assets/icons/group-blue.svg'
import clsx from 'clsx'

const images = importAll(
	require.context('../../../assets/images/features/', false, /\.(?:jpg|jpeg|png|gif|webp)$/),
)

interface feature {
	title: string | ReactNode
	content: ReactNode
}

export default function Features() {
	const features: feature[] = [
		{
			title: (
				<>
					A <strong>user interface</strong> designed for the classroom
				</>
			),
			content: (
				<ul className='flex flex-col gap-14'>
					<li className='flex gap-10'>
						<div className='grid w-fit place-content-center rounded-full p-4 shadow-[0_15px_44px_0_rgba(13,15,28,.12)]'>
							<Grid />
						</div>
						<p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
					</li>
					<li className='flex gap-10'>
						<div className='grid w-fit place-content-center rounded-full p-4 shadow-[0_15px_44px_0_rgba(13,15,28,.12)]'>
							<Layer />
						</div>
						<p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
					</li>
					<li className='flex gap-10'>
						<div className='grid w-fit place-content-center rounded-full p-4 shadow-[0_15px_44px_0_rgba(13,15,28,.12)]'>
							<Group />
						</div>
						<p>Teachers don’t get lost in the grid view and have a dedicated Podium space.</p>
					</li>
				</ul>
			),
		},
		{
			title: (
				<>
					<strong>Tools</strong> For Teachers And Learners
				</>
			),
			content: (
				<p>
					Class has a dynamic set of teaching tools built to be deployed and used during class.
					Teachers can handout assignments in real-time for students to complete and submit.
				</p>
			),
		},
		{
			title: (
				<>
					Assessments, <strong>Quizzes</strong>, Tests
				</>
			),
			content: (
				<p>
					Easily launch live assignments, quizzes, and tests. Student results are automatically
					entered in the online gradebook.
				</p>
			),
		},
		{
			title: (
				<>
					<strong>Class Management</strong> Tools for Educators
				</>
			),
			content: (
				<p>
					Class provides tools to help run and manage the class such as Class Roster, Attendance,
					and more. With the Gradebook, teachers can review and grade tests and quizzes in
					real-time.
				</p>
			),
		},
		{
			title: (
				<>
					One-on-One <strong>Discussions</strong>
				</>
			),
			content: (
				<p>
					Teachers and teacher assistants can talk with students privately without leaving the Zoom
					environment.
				</p>
			),
		},
	]

	return (
		<section>
			<Heading
				className='mb-24'
				title={
					<>
						Our <strong className='text-highlight-1'>Features</strong>
					</>
				}
				description='This very extraordinary feature, can make learning activities more efficient'
			/>
			<div className='flex w-full flex-col gap-40 px-40'>
				{features.map(({ title, content }: feature, index) => {
					return (
						<section
							key={`feature-${index}`}
							className={clsx('flex w-full items-center gap-32', { 'flex-row-reverse': index % 2 })}
						>
							<Image
								src={images[index]}
								alt=''
								className='w-1/2'
							/>
							<div className='w-1/2'>
								<h2 className='mb-12 text-[2.5rem] font-semibold leading-[3rem] text-title'>
									{title}
								</h2>
								{content}
							</div>
						</section>
					)
				})}
			</div>
		</section>
	)
}
