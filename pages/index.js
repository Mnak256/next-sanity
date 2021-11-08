import Head from 'next/head'
import Link from 'next/link'
import { routes } from '../src/common/constants'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next Sanity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <center>
        <h3>Next Sanity</h3>
        <Link href={routes.messageBoard}>
          <a>Message board</a>
        </Link>
      </center>
    </div>
  )
}

export default Home
