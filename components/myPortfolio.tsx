import Image from 'next/image'
import { NextPage } from 'next'
import { useCallback, useRef } from 'react'

import styles from './../styles/myPortFolio.module.scss'
import BackgroundTextContent from './backgroundTextContent'

//import { url } from 'inspector'

const MyPortfolio: NextPage = () => {

    const listProjects = useRef([
        {
            name: 'Project 1',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 2',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 3',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 4',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 5',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 6',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 7',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 8',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
        {
            name: 'Project 9',
            image: 'https://via.placeholder.com/350x350/18191c/9c9e9e.jpeg?text=Under+construction',
        },
    ])

    const RenderProjects = useCallback(() => (

        <>
            {
                listProjects.current.map((project, index) => (
                    <div key={index} className={styles.itemProject}>
                        <div className={styles.imageBackground}>
                            <Image src={project.image} alt={project.name} width="450px" height="450px" />
                        </div>
                        <div className={styles.contentName}>
                            <h2 hidden>{project.name}</h2>
                        </div>

                    </div>
                ))
            }
        </>

    ), [])

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
            </section>
        </>
    )
}

export default MyPortfolio;