import Head from 'next/head'
import Link from 'next/link'
import { routes } from '../../src/common/constants'
import MessageBoard from '../../src/MessageBoard'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Message board</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <center>
        <h3>Board</h3>
        <Link href={routes.home}>
          <a>Back</a>
        </Link>
        <MessageBoard />
      </center>
    </div>
  )
}

export default Home
