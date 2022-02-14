import CEO from '../components/ceo'
import ForkMe from '../components/forkme'
import Iam from '../components/iam'
import MyPortfolio from '../components/myPortfolio'
import SocialMedia from '../components/socialMedia'
import Main from '../layouts/main'

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <Main>
      <CEO />
      <ForkMe />
      <SocialMedia />
      <Iam />
      <MyPortfolio />
    </Main>
  )
}

export default Home
