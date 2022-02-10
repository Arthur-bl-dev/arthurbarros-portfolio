import { Icon } from '@iconify/react';
import { NextPage } from "next";
import styles from './../styles/socialMedia.module.scss';

const SocialMedia: NextPage = () => {

    return (
        <>
            <section className={styles.content}>
                <ul>
                    <li><a title="Github" href=""><Icon icon="icon-park-outline:github-one" width={30} /></a></li>
                    <li><a title="Linkedin" href=""><Icon icon="lucide:linkedin" width={30} /></a></li>
                    <li><a title="Instagram" href=""><Icon icon="akar-icons:instagram-fill" width={30} /></a></li>
                    <li><a title="Twitter" href=""><Icon icon="lucide:twitter" width={30} /></a></li>
                </ul>

                <ul className={styles.emailLink}>
                    <li ><a title="Github" href="">arthurbldev@gmail.com</a></li>
                </ul>
            </section>
        </>
    )
}

export default SocialMedia;