import { Laptop, Logo, Title, SubTitle } from '@/components/pages/index'
const Index = () => (
	<>
		<section className='main_content index'>
			<span className='colored_circle' />
			<div className='row'>
				<div className='content'>
					<Logo />
					<Title />
					<SubTitle />
					<Laptop />
				</div>
			</div>
		</section>
	</>
)

export default Index
