import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'

const index = () => {
  return (
    <div>
      <Head>
        <title>Red Light Enforcement System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  )
}

export default index