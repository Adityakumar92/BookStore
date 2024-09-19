import React from 'react'
import { Hero, RecentlyAdded } from '../components'

function Home() {
  return (
    <div className='bg-zinc-900 text-white px-10 py-8'>
      <Hero />
      <RecentlyAdded />
    </div>
  )
}

export default Home
