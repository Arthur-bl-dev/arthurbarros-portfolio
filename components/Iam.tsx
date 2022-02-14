import Lottie from 'react-lottie'
import { useRef } from 'react'

import * as animationData from '../public/animations/modern.json'
import styles from './../styles/iam.module.scss'

//import { NextPage } from 'next'
const Iam = () => {

    const defaultOptions = useRef({
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
    });

    return (
        <>
            <section className={styles.content}>
                <div className={styles.left}>
                    <h4>Hi,</h4>
                    <h1>I’m Arthur,</h1>
                    <h1>front end developer</h1>
                    <p>Creative and self-starting Front-End Developer with 3 years experience building stable websites and apps, collaborative environments.</p>
                </div>

                <div className={styles.right}>
                    <Lottie
                        options={defaultOptions.current}
                        height={'25rem'}
                        width={'25rem'}
                        isClickToPauseDisabled={true}
                        speed={0.35}
                    />
                </div>
            </section>
        </>
    )
}

export default Iam;