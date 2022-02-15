import Lottie from 'react-lottie'
import { NextPage } from 'next'
import { useRef } from 'react'

import * as animationData from '../public/animations/modern.json'
import styles from './../styles/iamDev.module.scss'

const IamDev: NextPage = () => {

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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>I’m Arthur,</h1>
                    <h1>Front-end developer</h1>
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

export default IamDev;