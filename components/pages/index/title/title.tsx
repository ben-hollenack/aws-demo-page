import styles from './title.module.scss'

const Logo: React.FC = () => {
    return (
        <>
            <div className={styles.textWrapper}>
                <div className={styles.text}>
                    Welcome to a   
                    <span className={styles.orangeText}> world of opportunity...</span>
                </div>
            </div>
        </>
    )
}

export default Logo
