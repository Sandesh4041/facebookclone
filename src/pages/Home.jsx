import React from 'react'
import Asideleft from '../component/Asideleft'
import Homemain from '../component/Homemain'
import Asideright from '../component/Asideright'

const Home = () => {
  return (
    <div className={`flex h-screen`}>
      <div className={`flex-none hidden lg:block  `}>
     <Asideleft/>
      </div>

      <div className={`grow h-full overflow-y-auto`}>
     <Homemain/>
      </div>

      <div className={`flex-none hidden sm:block `}>
     <Asideright/>
      </div>
    </div>
  )
}

export default Home
