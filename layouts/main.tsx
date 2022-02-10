import type { NextPage } from 'next';
import styles from './../styles/layouts/main.module.scss';

const Main: NextPage = ({ children }) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}


export default Main;