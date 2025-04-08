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
		<section className='text-center flex flex-col items-center'>
			<h2 className='mb-4 text-5xl font-bold text-title'>Our Success</h2>
			<p className='mb-[6.25rem] text-lg'>
				Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
				<br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl
				orci.
			</p>
			<ul className='flex gap-24'>
				{achievements.map(({ title, label }: achievement) => {
					return (
						<li
							className=''
							key={'achievements-' + label.replace(' ', '-')}
						>
							<h1 className='bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text text-8xl uppercase'>
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
