import { Laptop, Logo, Title, SubTitle } from '@/components/pages/index'
import styles from '@/styles/index.module.scss'

const Index = () => (
	<>
		<section className='main_content index'>
			<span className='colored_circle' />
			<div className={styles.row}>
				<div className={styles.content}>
					<div className={styles.textWrapper}>
						<Logo />
						<Title />
						<SubTitle />
					</div>
					<Laptop />
				</div>
			</div>
		</section>
	</>
)

export default Index
