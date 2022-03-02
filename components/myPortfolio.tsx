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
        width: 1440,
        height: 1024
    },
    {
        src: '/images/projects/SuperGeeks.png',
        loading: 'lazy',
        alt: 'SuperGeeks - a company that provides a platform for childrens,youngs and adults to learn about the latest technologies and trends in the industry.',
        width: 1920,
        height: 2916
    },
    {
        src: '/images/projects/Franquias_SuperGeeks.png',
        loading: 'lazy',
        alt: 'SuperGeeks - This time a static page for your trade networks of franchise',
        width: 1920,
        height: 5292
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
    {
        src: 'https://via.placeholder.com/1920x2916/18191c/9c9e9e.jpeg?text=Under+construction',
        loading: 'lazy',
        alt: 'Under Construction',
        width: 1920,
        height: 2916
    },
]

const MyPortfolio: NextPage = () => {
    const [currentImageIndex, setCurrentIndex] = useState(-1);
    const [isOpen, setIsOpen] = useState(false);



    const RenderProjects = useCallback(() => (

        <>
            {
                listProjects.map((project, index) => (
                    <div onClick={() => {
                        setCurrentIndex(index);
                        setIsOpen(true);
                    }} key={index} className={styles.itemProject}>
                        <div className={styles.imageBackground}>
                            <Image src={project.src} alt={project.alt} width="450px" height="450px" objectFit="cover" />
                        </div>
                        <div className={styles.contentName}>
                            <h2 hidden>{project.alt}</h2>
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