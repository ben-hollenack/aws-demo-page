import styles from './subTitle.module.scss'

const Logo: React.FC = () => {
    return (
        <>
            <div className={styles.textWrapper}>
                <div className={styles.text}>
                Welcome to your new web app, 
                the start of something innovative, creative, 
                and exciting. The power to create is now in your hands.
                </div>
            </div>
        </>
    )
}

export default Logo
