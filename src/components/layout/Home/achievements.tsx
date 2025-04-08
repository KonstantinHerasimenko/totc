import Heading from "@/components/ui/heading"

interface achievement {
	title: string
	label: string
}

export default function Achievements() {
	const achievements: achievement[] = [
		{
			title: '15k+',
			label: 'students',
		},
		{
			title: '75%',
			label: 'total success',
		},
		{
			title: '35',
			label: 'main questions',
		},
		{
			title: '26',
			label: 'chief experts',
		},
		{
			title: '16',
			label: 'years of experience',
		},
	]

	return (
		<section className='flex flex-col items-center text-center'>
			<Heading
				className='mb-[6.25rem]'
				title='Our Success'
				description={
					<>
						Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
						<br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl
						orci.
					</>
				}
			/>
			<ul className='flex gap-24'>
				{achievements.map(({ title, label }: achievement) => {
					return (
						<li
							className='text-center'
							key={'achievements-' + label.replace(' ', '-')}
						>
							<h1 className='bg-gradient-to-r from-[#136CB5] to-[#49BBBD] bg-clip-text text-8xl uppercase text-transparent'>
								{title}
							</h1>
							<h3 className='text-3xl'>{label}</h3>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
