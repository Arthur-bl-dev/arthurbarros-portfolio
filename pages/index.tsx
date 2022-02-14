import { NextPage } from 'next'

import CEO from '../components/ceo'
import ForkMe from '../components/forkme'
import MyPortfolio from '../components/myPortfolio'
import SocialMedia from '../components/socialMedia'
import Main from '../layouts/main'

// import Iam from '../components/iam'
const Home: NextPage = () => {
  return (
    <Main>
      <CEO />
      <ForkMe />
      <SocialMedia />
      {/* <Iam /> */}
      <MyPortfolio />
    </Main>
  )
}

export default Home
