import Image from 'next/image'
import Lightbox, { ImagesListType } from 'react-spring-lightbox'
import { NextPage } from 'next'
import { useCallback, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

import styles from './../styles/myPortFolio.module.scss'
import BackgroundTextContent from './backgroundTextContent'

//import { url } from 'inspector'

interface PropsHeader {
    data: {
        src: string;
        alt: string;
        caption: string;
        width: number;
        height: number;
        loading: string;
    }[];
}

const listProjects: ImagesListType = [
    {
        src: '/images/projects/LP_Example_1.png',
        loading: 'lazy',
        alt: 'Prototype of a website for a company.',
    },
    {
        src: '/images/projects/LP_SuperGeeks_1.png',
        loading: 'lazy',
        alt: 'SuperGeeks - a company that provides a platform for childrens,youngs and adults to learn about the latest technologies and trends in the industry.',
    },
    {
        src: '/images/projects/LP_SuperGeeks_2_Franquias.png',
        loading: 'lazy',
        alt: 'SuperGeeks - This time a static page for your trade networks of franchise',
    },
    {
        src: '/images/projects/CRM_SprintHub.png',
        loading: 'lazy',
        alt: 'SprintHub: CRM - SprintHub is an All-in-One Marketing/Service/Sales platform that integrates various tools for lead attraction, marketing automation, omnichannel service, sales, social media management and advertising, and much more'
    },
    {
        src: '/images/projects/SAC_ominichannel_SprintHub.png',
        loading: 'lazy',
        alt: 'SprintHub: SAC Omnichannel - SprintHub is an All-in-One Marketing/Service/Sales platform that integrates various tools for lead attraction, marketing automation, omnichannel service, sales, social media management and advertising, and much more'
    },
]

const MyPortfolio: NextPage = () => {
    const [currentImageIndex, setCurrentIndex] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);

    const listCapeProjects = useRef([
        {
            src: '/images/projects/cape_LP_Example_1.png',
        },
        {
            src: '/images/projects/cape_LP_Example_2.png',
        },
        {
            src: '/images/projects/cape_LP_Example_3.png',
        },
        {
            src: '/images/projects/cape_sprinthub_RGB.png',
        },
        {
            src: '/images/projects/cape_sprinthub_RGB.png',
        },
    ])

    const RenderProjects = useCallback(() => (

        <>
            {
                listCapeProjects.current.map((project, index) => (
                    <div onClick={() => {
                        setCurrentIndex(index);
                        setIsOpen(true);
                    }} key={index} className={styles.itemProject}>
                        <div className={styles.imageBackground}>
                            <Image src={project.src} alt={`Project - ${index}`} width="450px" height="450px" objectFit="cover" />
                        </div>
                    </div>
                ))
            }
        </>

    ), [])

    const gotoPrevious = useCallback(() => {
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1)
    }, [currentImageIndex]);

    const gotoNext = useCallback(() => {
        currentImageIndex + 1 < listProjects.length && setCurrentIndex(currentImageIndex + 1)
    }, [currentImageIndex]);

    const Header: NextPage = useCallback(() => {
        let data = listProjects[currentImageIndex]

        return (
            <header className={styles.header}>
                <div className={styles.headerContent}>

                    <div className={styles.contentTitle}>
                        <p>{data.alt}</p>
                        <button title="Close Modal" onClick={() => setIsOpen(false)}><Icon color='#fff' width={25} icon="fa:close" /></button>
                    </div>

                </div>
            </header>
        )
    }, [currentImageIndex])

    return (
        <>
            <section className={styles.content}>
                <BackgroundTextContent position="top right" title="Work" />
                <header>

                    <h1>My Portfolio</h1>

                    <p>A small part of projects I developed chosen by me.</p>
                </header>

                <div className={styles.projects}>
                    <RenderProjects />
                </div>

                <Lightbox
                    isOpen={isOpen}
                    onPrev={gotoPrevious}
                    onNext={gotoNext}
                    images={listProjects}
                    singleClickToZoom
                    currentIndex={currentImageIndex}
                    onClose={() => setIsOpen(false)}
                    renderHeader={() => <Header />}
                />
            </section>
        </>
    )
}

export default MyPortfolio;