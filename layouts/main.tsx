import styles from './../styles/layouts/main.module.scss'

import type { NextPage } from 'next';
interface Props {
    children: JSX.Element|JSX.Element[];
}

const Main: NextPage<Props> = ({ children }) => {

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