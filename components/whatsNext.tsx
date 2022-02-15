import { NextPage } from 'next'

import buttons from './../styles/components/buttons.module.scss'
import styles from './../styles/whatsNext.module.scss'

const WhatsNext: NextPage = () => {
    return (
        <>
            <section className={styles.contentWhatsNext}>
                <h4>What’s Next?</h4>
                <h1>Get In Touch</h1>
                {/* eslint-disable react/no-unescaped-entities */}
                <p>My inbox is always open. If you have a work offer or just want to say hi, I'll try my best to get back to you.</p>
                <button className={buttons.primary}>Say Hello</button>
            </section>
        </>
    )
}

export default WhatsNext;