import { NextPage } from 'next'

import styles from './../styles/footer.module.scss'

const Footer: NextPage = () => {
    return (
        <section className={styles.contentFooter}>
            <p>Designed & built with ❤️  <span>by Arthur Barros</span> </p>
        </section>
    )
}

export default Footer;