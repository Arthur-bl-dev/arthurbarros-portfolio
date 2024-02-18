import { NextPage } from 'next'

import AboutMe from '../components/aboutMe'
import CEO from '../components/ceo'
import Footer from '../components/footer'
import ForkMe from '../components/forkme'
import IamDev from '../components/iamDev'
import MyPortfolio from '../components/myPortfolio'
import MySkills from '../components/mySkills'
import SocialMedia from '../components/socialMedia'
import WhatsNext from '../components/whatsNext'
import Main from '../layouts/main'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <CEO />
        <ForkMe />
        <IamDev />
        <AboutMe />
        <MyPortfolio />
        <MySkills />
        <WhatsNext />
        <Footer />
        <SocialMedia />
      </Main>
    </>

  )
}

export default Home
