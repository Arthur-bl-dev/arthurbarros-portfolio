import { NextPage } from 'next'

import AboutMe from '../components/aboutMe'
import CEO from '../components/ceo'
import ForkMe from '../components/forkme'
import IamDev from '../components/iamDev'
import MyPortfolio from '../components/myPortfolio'
import SocialMedia from '../components/socialMedia'
import Main from '../layouts/main'

const Home: NextPage = () => {
  return (
    <Main>
      <CEO />
      <ForkMe />
      <SocialMedia />
      <IamDev />
      <MyPortfolio />
      <AboutMe/>
    </Main>
  )
}

export default Home
