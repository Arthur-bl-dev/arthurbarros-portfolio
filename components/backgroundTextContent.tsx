import { NextPage } from 'next'
import { useCallback, useEffect, useRef } from 'react'

import styles from './../styles/backgroundTextContent.module.scss'

interface Props {
    position: string;
    title: string;
}

const BackgroundTextContent: NextPage<Props> = ({ position, title }) => {


    const RenderTitle = useCallback(() => {

        let classTitle = ''

        switch (position) {
            case 'top left':
                classTitle = styles.topLeft
                break;
            case 'bottom right':
                classTitle = styles.bottomRight;
                break;
            case 'bottom left':
                classTitle = styles.bottomLeft;
                break;
            case 'top right':
                classTitle = styles.topRight
                break;
            default:
                break;
        }

        return (
            <section className={`${styles.contentBackgroundText} ${classTitle}`}>
                <h1 >{title}</h1>
            </section >

        )

    }, [position, title])

    return <RenderTitle />
}

export default BackgroundTextContent;
