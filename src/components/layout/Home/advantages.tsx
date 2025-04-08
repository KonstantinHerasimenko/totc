import { JSX, ReactNode } from 'react'

import File from '@/assets/icons/file.svg'
import Calendar from '@/assets/icons/calendar.svg'
import Group from '@/assets/icons/group.svg'
import clsx from 'clsx'
import Heading from '@/components/ui/heading'

interface advantage {
	Icon: () => JSX.Element
	iconBgColor: string
	title: ReactNode | string
	description: ReactNode | string
}

export default function Advantages() {
	const advantages: advantage[] = [
		{
			Icon: File,
			title: (
				<>
					Online Billing,
					<br /> Invoicing, & Contracts
				</>
			),
			iconBgColor: 'bg-[#5B72EE]',
			description: (
				<>
					Simple and secure control of your
					<br /> organization’s financial and legal
					<br /> transactions. Send customized
					<br /> invoices and contracts
				</>
			),
		},
		{
			Icon: Calendar,
			title: (
				<>
					Easy Scheduling &<br /> Attendance Tracking
				</>
			),
			iconBgColor: 'bg-[#00CBB8]',
			description: (
				<>
					Schedule and reserve classrooms at
					<br /> one campus or multiple campuses.
					<br /> Keep detailed records of student
					<br /> attendance
				</>
			),
		},
		{
			Icon: Group,
			title: <>Customer Tracking</>,
			iconBgColor: 'bg-[#29B9E7]',
			description: (
				<>
					Automate and track emails to
					<br /> individuals or groups. Skilline’s
					<br /> built-in system helps organize
					<br /> your organization
				</>
			),
		},
	]

	return (
		<section className='flex flex-col items-center'>
			<Heading
				className='mb-40'
				title={
					<>
						All-In-One <strong className='text-highlight-1'>Cloud Software.</strong>
					</>
				}
				description={
					<>
						TOTC is one powerful online software suite that combines all the tools
						<br /> needed to run a successful school or office.
					</>
				}
			/>
			<ul className='grid w-fit grid-cols-3 gap-x-20'>
				{advantages.map(({ Icon, title, iconBgColor, description }: advantage, index) => {
					return (
						<li
							className='relative flex w-fit flex-col items-center justify-end rounded-3xl pb-12 bg-white px-14 text-center shadow-[0_10px_60px_0_rgba(38,45,118,0.08)]'
							key={'advantage-' + index}
						>
							<div
								className={clsx(
									iconBgColor,
									'absolute -top-14 grid h-24 w-24 place-content-center rounded-full',
								)}
							>
								<Icon />
							</div>
							<h3 className='mb-6 pt-20 text-3xl font-medium text-title'>{title}</h3>
							<p>{description}</p>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
