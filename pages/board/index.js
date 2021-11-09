import Head from 'next/head'
import Link from 'next/link'
import { getGqlData } from '../../src/common/apolloClient'
import arrayToObject from '../../src/common/arraytoObject'
import { routes, contentKeys } from '../../src/common/constants'
import MessageBoard from '../../src/MessageBoard'
import MessageInput from '../../src/MessageInput'
import styles from '../../styles/MessageBoard.module.css'

const Home = ({ data: { allContent } }) => {
  const content = arrayToObject(allContent)
  return (
    <div>
      <Head>
        <title>{content[contentKeys.messageBoardHeader]}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <center>
        <h3>{content[contentKeys.messageBoardHeader]}</h3>
        <Link href={routes.home}>
          <a className={styles.button}>
            {content[contentKeys.backButtonLabel]}
          </a>
        </Link>
        <MessageBoard />
        <MessageInput />
      </center>
    </div>
  )
}

export const getStaticProps = async () => {
  return await getGqlData()
}

export default Home
