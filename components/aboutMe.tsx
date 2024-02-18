import Image from 'next/image'
import Lottie from 'react-lottie'
import { NextPage } from 'next'
import { useRef } from 'react'
import { Icon } from '@iconify/react'

import * as animationData from '../public/animations/geometric_loop_background.json'
import styles from './../styles/aboutMe.module.scss'
import buttons from './../styles/components/buttons.module.scss'
import BackgroundTextContent from './backgroundTextContent'
import Link from 'next/link'

const AboutMe: NextPage = () => {

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
            <section className={styles.contentAboutMe}>


                <div className={styles.left}>
                    <Image src="/images/iam/1.jpg" alt="Arthur" width={550} height={550} />

                    <div className={styles.contentAnimationAboutMe}>
                        <Lottie
                            options={defaultOptions.current}
                            height={'100% '}
                            width={'100%'}
                            isClickToPauseDisabled={true}
                            speed={0.35}
                        />
                    </div>
                </div>
                <div className={styles.right}>

                    <h1>About me</h1>
                    <p>
                        My name is Arthur Barros, I am 28 years old and I live in the city of Juazeiro do Norte,
                        state of Ceará - Brazil. I am married and a great enthusiast of technology.
                        Since my adolescence, I dedicate all my free time to studies related to technology and programming.
                        Throughout my study process, I had the opportunity to learn about different subjects, but
                        it was when I discovered my passion for Front-end Development and Interface Design that
                        I really found myself. Since then, I have developed several projects with national companies
                        along with incredible people, always seeking to improve my skills and knowledge.
                        My passion for technology and programming is what motivates me to continue learning and growing in my career.
                    </p>

                    <a
                        href='/docs/CV.pdf'
                        download="CV.pdf"
                        title='Download CV'
                        target='_blank' rel="noreferrer" >
                        <button className={buttons.primary}>Download CV <Icon color='#1e1f23' icon="akar-icons:download" /></button>
                    </a>


                </div>
                <BackgroundTextContent position="top right" title="I’m" />
            </section>
        </>
    )
}

export default AboutMe;