import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import Link from 'next/link'
import ScrollUp from './ScrollUp'
import ScrollDown from './ScrollDown'
import Footer from './Footer'

const Home = () => {
  return (
    <div className={styles.parent}>
        <Head>
            <title>Red Light Enforcement System</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Solway:wght@400&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Open+Sans&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"/>
        </Head>
        <div className={styles.child}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Image src="/images/sidebar-trafficlight.png"  className={styles.homelogo} width='50' height='50'/>
                    <h3><span className={styles.pink}>Pink</span>
                    <span className={styles.code}>CodeX</span></h3>
                </div>
                <div className={styles.button}>
                <button className={styles.secondary}>
                    <Link href="/" className={styles.home}>Home</Link>
                </button>
                <button className={styles.secondary}>
                    <Link href="/" className={styles.about}>About</Link>
                    <ScrollDown/>
                </button>
                <button className={styles.primary}>
                    <Link href="/login" className={styles.signin}>SIGN IN</Link>
                </button>
                </div>
            </div>
            <div className={styles.container1}>
                <div className={styles.title}>
                <div className={styles.title1}>
                    <h5>WELCOME</h5>
                </div>
                <div className={styles.title2}>
                    <h1>RED LIGHT ENFORCEMENT SYSTEM</h1>
                </div>
                <div className={styles.title3}>
                    <h2>Red Light Violations</h2>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.subchild}>
            <div className={styles.container}>
                <div className={styles.div}>
                    <br/>
                    <h1>About</h1>
                    <br/>
                    <p><b>The Red Light Enforcement System</b> is a web application system developed by
                    <span className={styles.pink}> Pink</span>
                    <span className={styles.code}>CodeX</span>.<br/>
                    This is an automated system that helps traffic enforcement by automatically detecting red light violations and capturing<br/>vehicle images.
                        <br/><br/><br/><br/><br/>
                    </p>
                </div>
            </div>
        </div>
        <ScrollUp/>
        <Footer/>
    </div>
  )
}

export default Home