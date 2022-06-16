import React, { useEffect, useRef } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import NavSide from './component/NavSide'
import Footer from './component/Footer'
import { getAllGallery } from './store/slices/gallerySlice'
import { useDispatch } from 'react-redux'

function App() {
  // console.log('jalan componenet app')
  const appContainerRef = useRef()
  const menuSideRef = useRef()
  const headerRef = useRef()
  const mainRef = useRef()
  const btnToggleRef = useRef()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGallery())
  }, [dispatch])


  useEffect(() => {
    let menuSideEl = menuSideRef.current
    let appEl = appContainerRef.current
    let headerEl = headerRef.current
    let headerHeight = headerEl.offsetHeight
    let mainEl = mainRef.current
    let btnToggle = btnToggleRef.current

    widthLargeHandler(appEl, menuSideEl)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset < headerHeight) {
        menuSideEl.classList.add('opacity-0')
        if (window.innerWidth < 768) {
          menuSideEl.classList.add('-translate-x-[11.375rem]')
          setTimeout(() => {
            appEl.classList.remove('translate-x-[11.375rem]')
            btnToggle.style.pointerEvents = 'auto'
          }, 300)
        } else {
          menuSideEl.classList.add('-translate-x-[6.57rem]')
          setTimeout(() => {
            appEl.classList.remove('translate-x-[6.57rem]')
            btnToggle.style.pointerEvents = 'auto'
          }, 300)
        }
      }

      mainEl.childNodes.forEach(element => {
        let sectionId = element.getAttribute('id')

        if (
          window.pageYOffset > element.offsetTop - 50 &&
          window.pageYOffset <= element.offsetTop - 50 + element.offsetHeight
        ) {
          document
            .querySelector('#menu-side-ul a[href*=' + sectionId + ']')
            .parentNode.classList.add('text-zinc-900')
        } else {
          document
            .querySelector('#menu-side-ul a[href*=' + sectionId + ']')
            .parentNode.classList.remove('text-zinc-900')
        }
      })
    })

    window.addEventListener('resize', () => {
      appEl.classList.remove('translate-x-[11.375rem]')
      appEl.classList.remove('translate-x-[6.57rem]')
      menuSideEl.classList.add('opacity-0')
      widthLargeHandler(appEl, menuSideEl)
    })
  }, [])

  const widthLargeHandler = (appEl, menuSideEl) => {
    if (window.innerWidth >= 768) {
      appEl.classList.remove('translate-x-[11.375rem]')
      menuSideEl.classList.remove('-translate-x-[11.375rem]')
      menuSideEl.classList.add('-translate-x-[6.57rem]')
    } else {
      appEl.classList.remove('translate-x-[6.57rem]')
      menuSideEl.classList.remove('-translate-x-[6.57rem]')
      menuSideEl.classList.add('-translate-x-[11.375rem]')
    }
  }

  const getTop = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  const smoothScroll = targetEl => {
    let btnToggle = btnToggleRef.current
    let menuSide = menuSideRef.current
    let app = appContainerRef.current
    let targetId = targetEl.getAttribute('href')
    let target = document.querySelector(targetId)
    let targetPosition = target.getBoundingClientRect().top
    let startPosition = window.pageYOffset
    let startTime = null
    const duration = 1000

    //animasi scroll
    const ease = currentTime => {
      if (startTime === null) startTime = currentTime
      let timeElapsed = currentTime - startTime
      let run = getTop(timeElapsed, startPosition, targetPosition, duration)

      //ketika di klik menutup
      if (
        Math.round(run) >= target.offsetTop - 2 &&
        Math.round(run) <= target.offsetTop
      ) {
        menuSide.classList.add('opacity-0')
        if (window.innerWidth < 768) {
          menuSide.classList.add('-translate-x-[11.375rem]')
          setTimeout(() => {
            app.classList.remove('translate-x-[11.375rem]')
            btnToggle.style.pointerEvents = 'auto'
          }, 300)
        } else {
          menuSide.classList.add('-translate-x-[6.57rem]')
          setTimeout(() => {
            app.classList.remove('translate-x-[6.57rem]')
            btnToggle.style.pointerEvents = 'auto'
          }, 300)
        }
      } else {
        btnToggle.style.pointerEvents = 'none'
      }

      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(ease)
    }

    requestAnimationFrame(ease)
  }

  //------------end script tampilan-------------///




  return (
    <>
      <NavSide
        btnToggleRef={btnToggleRef}
        menuSideRef={menuSideRef}
        appContainerRef={appContainerRef}
        smoothScroll={smoothScroll}
      />
      <div
        ref={appContainerRef}
        className='bg-zinc-50 transition-all duration-500 lg:px-28 md:px-28 px-3'
      >
        <Header headerRef={headerRef} smoothScroll={smoothScroll} />
        <Main mainRef={mainRef} />
        <Footer />
      </div>
    </>
  )
}

export default App
