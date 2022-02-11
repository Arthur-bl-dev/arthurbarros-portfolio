import { useEffect, useRef } from 'react'

import styles from './../styles/backgroundTextContent.module.scss'

const BackgroundTextContent = (position: any, title: any) => {

    //const positionTitle = useRef(position);

    // useEffect(() => {

    //     switch (position) {
    //         case 'top left':
    //             positionTitle.current = styles.topLeft
    //             break;
    //         case 'bottom right':
    //             positionTitle.current = styles.bottomRight;
    //             break;
    //         case 'bottom left':
    //             positionTitle.current = styles.bottomLeft;
    //             break;
    //         default:
    //             positionTitle.current = styles.topRight
    //             break;
    //     }

    // }, [position]);

    return (
        <>
            <section>
                <h1 className={`${position}`}>{title}</h1>
            </section>
        </>
    )
}

export default BackgroundTextContent;
