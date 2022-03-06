import { useRef } from "react";

import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Lottie from 'react-lottie'

//Animation
import * as animationData from './../../public/animations/save_file.json'

//Styles
import styles from './../../styles/demo/emptyList.module.scss';

interface EmptyListProps {
    title?: string;
    description?: string;
}
//save_file.json
const EmptyList: NextPage<EmptyListProps> = ({ children, title, description }) => {



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
            <div className={styles.contentEmptyList}>
                <h1>{title ? title : 'Você não possui nenhum card'} <Icon icon="emojione:sad-but-relieved-face" /></h1>
                <p>{description ? description : 'Crie um novo card e ganhe tempo para o seu dia a dia.'}</p>
                <div className={styles.contentAnimation}>
                    <Lottie
                        options={defaultOptions.current}
                        height={'20rem'}
                        width={'20rem'}
                        isClickToPauseDisabled={true}
                        speed={0.35}
                    />
                </div>
            </div>
        </>
    )
}


export default EmptyList;