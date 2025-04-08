import Heading from '@/components/ui/heading'
import forStudents from '@/assets/images/forStudents.jpg'
import forInstructors from '@/assets/images/forInstructors.jpg'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Link from 'next/link'
import aboutVideo from "@/assets/images/aboutVideo.jpg"

export default function AboutUs() {
	return (
		<div className='flex flex-col items-center'>
			<section className='flex flex-col items-center mb-40'>
				<Heading
					className='mb-20'
					title={
						<>
							What is <strong className='text-highlight-1'>TOTC?</strong>
						</>
					}
					description={
						<>
							TOTC is a platform that allows educators to create online classes whereby they can
							<br /> store the course materials online; manage assignments, quizzes and exams;
							monitor
							<br />
							due dates; grade results and provide students with feedback all in one place.
						</>
					}
				/>
				<div className='grid w-fit grid-cols-2 gap-24 text-white'>
					<div className='relative w-fit rounded-3xl px-40 py-32'>
						<div>
							<h2 className='mb-8 flex flex-col items-center text-3xl font-semibold uppercase'>
								for instructors
							</h2>
							<Button
								as={Link}
								href={'/'}
								backgroundClassName='bg-white-03'
								generalClassName='rounded-full '
								className='border-4 border-white px-12 py-3 font-medium capitalize text-light'
							>
								Start a class today
							</Button>
						</div>

						<Image
							src={forInstructors}
							alt=''
							className='absolute left-0 top-0 -z-50 h-full w-full rounded-3xl object-cover brightness-50'
						/>
					</div>
					<div className='relative w-fit rounded-3xl px-40 py-32'>
						<div>
							<h2 className='mb-8 flex flex-col items-center text-3xl font-semibold uppercase'>
								for students
							</h2>
							<Button
								as={Link}
								href={'/'}
								backgroundClassName='bg-highlight-3'
								generalClassName='rounded-full '
								className='border-4 border-highlight-3 px-12 py-3 font-medium capitalize text-light'
							>
								Start a class today
							</Button>
						</div>

						<Image
							src={forStudents}
							alt=''
							className='absolute left-0 top-0 -z-50 h-full w-full rounded-3xl object-cover brightness-50'
						/>
					</div>
				</div>
			</section>
			<section className='grid grid-cols-2 items-center'>
				<div className='relative'>
					<h2 className='mb-7 text-title text-4xl font-medium'>
						Everything you can do in a physical
						<br /> classroom, <strong className='font-medium text-highlight-1'>you can do with TOTC</strong>
					</h2>
					<p className='mb-7 font-normal'>
						TOTC’s school management software helps traditional
						<br /> and online schools manage scheduling, attendance,
						<br /> payments and virtual classrooms all in one secure
						<br /> cloud-based system.
					</p>
					<Link href={'/'} className='text-2xl text-paragraph underline'>Learn more</Link>
          <span className='absolute h-[4.5rem] w-[4.5rem] bg-highlight-4 rounded-full -top-4 -left-6 -z-50'></span>
				</div>
				<Image
					src={aboutVideo}
					alt=''
				/>
			</section>
		</div>
	)
}
