import { Icon } from '@iconify/react';
import { NextPage } from "next";
import Link from 'next/link';
import styles from './../styles/socialMedia.module.scss';


const SocialMedia: NextPage = () => {

    return (
        <>
            <section className={styles.content}>
                <ul>
                    <li>
                        <Link
                            href="https://github.com/Arthur-bl-dev"
                            passHref>
                            <a
                                title='Github'
                                target='_blank' rel="noreferrer" >
                                <Icon icon="icon-park-outline:github-one" width={30} />
                            </a>
                        </Link>

                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/arthur-bl-703807170/"
                            passHref>
                            <a
                                title='Linkedin'
                                target='_blank'
                                rel="noreferrer">
                                <Icon icon="lucide:linkedin" width={30} />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.instagram.com/arthur.b.l/" passHref>
                            <a
                                title='Instagram'
                                target="_blank" rel="noreferrer">
                                <Icon icon="akar-icons:instagram-fill" width={30} />
                            </a>
                        </Link>

                    </li>
                    <li>
                        <Link href="https://twitter.com/Arthurblmusic" passHref>
                            <a
                                title="Twitter"
                                target='_blank' rel="noreferrer"
                            >
                                <Icon icon="lucide:twitter" width={30} />
                            </a>
                        </Link>
                    </li>
                </ul>

                <ul className={styles.emailLink}>
                    <li >
                        <Link href="mailto:arthurbldev@gmail.com" passHref>
                            <a
                                title="Github"
                                target='_blank'
                                rel="noreferrer"
                            >arthurbldev@gmail.com
                            </a>
                        </Link>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default SocialMedia;