import styles from './logo.module.scss'
import smile from '../../../../public/images/items/smile.svg'
import Image from 'next/image'

const Logo: React.FC = () => {
    return (
        <>
            <div className={styles.logoWrapper}>
                <div className={styles.text}>aws</div>
                <div className={styles.smile}>
                    <Image alt='Svg' src={smile} width={138.05} height={33.03} />
                </div>
            </div>
        </>
    )
}

export default Logo
