import React from 'react'
import LayoutSection from './LayoutSection'
import Gallery from './gallery/Gallery'
import Profile from './profile/Profile'
// import Services from './services/Services'
import Contact from './contact/Contact'

export const Main = ({ mainRef }) => {
    // console.log('jalan componenet main')


    return (
        <main ref={mainRef} id='main-container' className='transition-all duration-500 relative'>
            <LayoutSection id='gallery'>
                <Gallery />
            </LayoutSection>
            <LayoutSection id='profile'>
                <Profile />
            </LayoutSection>
            {/* <LayoutSection id='services'>
                <Services />
            </LayoutSection> */}
            <LayoutSection id='contact'>
                <Contact />
            </LayoutSection>
        </main>
    )
}

export default Main
