import React from 'react'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
import styles from './layout.module.css'


const roboto = Roboto({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
})

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Kevin&apos;s tools</title>
        <meta name="description" content="A sandbox to play with TikTok APIs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <h1 className={styles.title}>TikTok API Dev</h1>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </>
  )
}
