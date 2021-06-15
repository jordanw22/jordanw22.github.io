import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'


export default function Links() {
    return(
<>
  <div className="jumbotron my-5 mx-5 rounded">
    <Link href="/About">
      <a className="text-center mx-auto h1 nav-link text-dark">About Me</a>
    </Link>
  </div>
  <div className="jumbotron my-5 mx-5 rounded">
    <Link href="/Projects">
      <a className="text-center mx-auto h1 nav-link text-dark">Projects</a>
    </Link>
  </div>
  <div className="jumbotron my-5 mx-5 rounded">
    <Link href="/Contact">
      <a className="text-center mx-auto h1 nav-link text-dark">Contact Me</a>
    </Link>
  </div>
</>
    )
}