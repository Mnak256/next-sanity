import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { getGqlData } from '../../src/common/apolloClient'
import { arrayToObject } from '../../src/common/utils'
import { routes, contentKeys } from '../../src/common/constants'
import MessageBoard from '../../src/MessageBoard'
import MessageInput from '../../src/MessageInput'
import styles from '../../styles/MessageBoard.module.css'
import MessageDelete from '../../src/MessageDelete'
import { ContextProvider } from '../../src/common/context'

const Home = ({ data: { allContent } }) => {
  const [messages, setMessages] = useState([])

  const content = arrayToObject(allContent)

  return (
    <div>
      <Head>
        <title>{content[contentKeys.messageBoardHeader]}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContextProvider value={{ messages, setMessages }}>
        <center>
          <h3>{content[contentKeys.messageBoardHeader]}</h3>
          <Link href={routes.home}>
            <a className={styles.button}>
              {content[contentKeys.backButtonLabel]}
            </a>
          </Link>
          <MessageBoard />
          <div style={{ display: 'flex', maxWidth: '800px' }}>
            <MessageInput />
            <MessageDelete />
          </div>
        </center>
      </ContextProvider>
    </div>
  )
}

export const getStaticProps = async () => {
  return await getGqlData()
}

export default Home
