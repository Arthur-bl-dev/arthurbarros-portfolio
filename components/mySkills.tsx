import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { NextPage } from 'next'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './../styles/mySkills.module.scss'

// Import Swiper styles
const MySkills: NextPage = () => {
    return (
        <>
            <section className={styles.contentMySkills}>
                <header>
                    <h1>My Skills</h1>
                    <p>These are some of the libraries, languages and technologies I use to create my projects</p>
                </header>

                <div className={styles.contentListSkills}>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        effect="creative"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,

                        }}
                        breakpoints={
                            {
                                // when window width is >= 600px
                                400: {
                                    slidesPerView: 3,
                                    spaceBetween: 10
                                },
                                // when window width is >= 600px
                                600: {
                                    slidesPerView: 3.75,
                                    spaceBetween: 0
                                },
                                // when window width is >= 801px
                                801: {
                                    slidesPerView: 4.15,
                                    spaceBetween: 0
                                },
                                // when window width is >= 801px
                                1125: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 0
                                },
                                // when window width is >= 1440px
                                1440: {
                                    slidesPerView: 5.65,
                                    spaceBetween: 0
                                }
                            }
                        }
                        breakpointsBase="container"
                        allowTouchMove={false}
                    >
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/gatsbyJS.png" alt="gatsbyJS" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/react.png" alt="React" width={110} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/nextJS.png" alt="nextJS" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/javascript.png" alt="javascript" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/illustrator.png" alt="illustrator" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/adobeXD.png" alt="adobeXD" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/babel.png" alt="babel" width={100} height={70} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/sass.png" alt="sass" width={100} height={70} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.contentListSkillsItem}>
                                <Image src="/images/skills/lodash.png" alt="lodash" width={100} height={100} />
                            </div>
                        </SwiperSlide>
                    </Swiper>



                </div>
            </section>
        </>
    )
}

export default MySkills;