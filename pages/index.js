import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header1 from '../components/Header1.jsx'
import Bio from '../components/Bio.jsx'
import Links from'../components/Links.jsx'

export default function Home() {
  return (

    <div>
      <Header1 />
      <Bio />
      <Links />
    </div>
    
  )
}
