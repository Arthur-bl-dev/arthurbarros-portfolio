import Image from 'next/image'
import Lottie from 'react-lottie'
import { NextPage } from 'next'
import { useRef } from 'react'
import { Icon } from '@iconify/react'

import * as animationData from '../public/animations/geometric_loop_background.json'
import styles from './../styles/aboutMe.module.scss'
import buttons from './../styles/components/buttons.module.scss'
import BackgroundTextContent from './backgroundTextContent'

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
                    <Image src="https://via.placeholder.com/500x500/18191c/9c9e9e.jpeg?text=Under+construction" alt="Arthur" width={450} height={450} />

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
                        My name is Arthur, I live in Juazeiro do Norte City, state of Ceará - Brazil, I am 26 years old, I am married and a great lover of computing. Since my adolescence, I dedicate all my free time to studies related to technology.
                        During my entire study/self-knowledge process, I had the opportunity to learn about different subjects, but only after a few years I discovered my passion for Front-end Development and Interface Design.
                        After that, I developed several projects with national companies with incredible people.
                    </p>
                    <p hidden>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>

                    <button className={buttons.primary}>Download CV <Icon color='#1e1f23' icon="akar-icons:download" /></button>
                </div>
                <BackgroundTextContent position="top right" title="I’m" />
            </section>
        </>
    )
}

export default AboutMe;