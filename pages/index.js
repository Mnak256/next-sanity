import Head from 'next/head'
import Link from 'next/link'
import { getGqlData } from '../src/common/apolloClient'
import arrayToObject from '../src/common/arraytoObject'
import { routes, contentKeys } from '../src/common/constants'
import styles from '../styles/MessageBoard.module.css'

const Home = ({ data: { allContent } }) => {
  const content = arrayToObject(allContent)
  console.log({ content })
  return (
    <div>
      <Head>
        <title>{content[contentKeys.homeHeader]}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <center>
        <h3>{content[contentKeys.homeHeader]}</h3>
        <Link href={routes.messageBoard}>
          <a className={styles.button}>
            {content[contentKeys.messageBoardButtonLabel]}
          </a>
        </Link>
      </center>
    </div>
  )
}

export const getStaticProps = async () => {
  return await getGqlData()
}

export default Home
