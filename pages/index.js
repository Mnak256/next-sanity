import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getGqlData } from '../src/common/apolloClient'
import arrayToObject from '../src/common/arraytoObject'
import { routes, contentKeys } from '../src/common/constants'
import styles from '../styles/MessageBoard.module.css'
import apolloClient from '../src/common/apolloClient'

const Home = ({ data: { allContent } }) => {
  // TODO: handle apollo cache properly to avoid reset cache:
  useEffect(() => {
    window.resetApolloClientCache = () => {
      apolloClient
        .resetStore()
        .then(() => console.log('store reset success'))
        .catch(() => console.log('store reset error'))
    }
  }, [])
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
