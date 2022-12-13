import styles from './laptop.module.scss'
import laptopSvg from '../../../../public/images/items/laptop.svg'
import Image from 'next/image'

const laptop: React.FC = () => {
    return (
        <div className={styles.laptop}>
            <Image alt='Svg' src={laptopSvg} width={582} height={795.58} />
        </div>
    )
}

export default laptop
