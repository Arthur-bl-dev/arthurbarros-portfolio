import { NextPage } from "next";
import Link from "next/link";
import { Icon } from "@iconify/react";

//styles
import styles from './../../styles/demo/header.module.scss';
import buttons from './../../styles/components/buttons.module.scss'
import forms from './../../styles/components/forms.module.scss';


const Header: NextPage = ({ children }) => {

    return (
        <>
            <div className={styles.header}>
                <Link href='/' ><a className={buttons.link}> <Icon icon="simple-icons:devdotto" />Arthur Barros</a></Link>
                <div className={styles.rightHeader}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Header;