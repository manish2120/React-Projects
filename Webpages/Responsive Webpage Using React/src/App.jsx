import React from 'react'
import styles from './style'
import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero } from './components/index.js'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Billing/>
        <CardDeal/>
        <Business/>
        <Clients/>
        <CTA/>
        <Stats/>
        <Footer/>
        <Testimonials/>
        </div>
      </div>
    </div>
  )
  //removed curly braces and return keyword bcoz we are passing only a single element which returns the element by default if there is only one element.

export default App