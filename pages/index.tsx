import type { NextPage } from 'next'
//Components
import CEO from '../components/ceo'
import Iam from '../components/Iam'
import SocialMedia from '../components/socialMedia'
//Layouts
import Main from '../layouts/main'







const Home: NextPage = () => {
  return (
    <Main>
      <CEO />
      <SocialMedia />
      <Iam />
    </Main>
  )
}

export default Home
