import './assets/scss/styles.scss'

import React, { useRef } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'

import { AppFooter } from './cmps/app-footer'
import { AppHeader } from './cmps/app-header'
import { GigIndex } from './pages/gig-index'
import { HomePage } from './pages/home-page'
import { GigDetails } from './pages/gig-details'
import { UserMsg } from './cmps/user-msg'
import { GigPayment } from './pages/gig-payment'
import { GigEdit } from './pages/gig-edit'


export function App() {
  const elApp = useRef(null);


  // const appObserver = new IntersectionObserver(updateState, {})
  // appObserver.observe(elApp.current);

  // function updateState(entries) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       console.log('isIntersecting')
  //     }
  //   })
  // }
  // const appObserver = new IntersectionObserver(updateState, { rootMargin: '120px 0 0'  })
  // appObserver.observe(elApp.current);

  // function updateState(entries) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       console.log('isIntersecting')
  //     }
  //   })
  // }
  // const appObserver = new IntersectionObserver(updateState, {})
  // appObserver.observe(elApp.current);

  // function updateState(entries) {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       console.log('isIntersecting')
  //     }
  //   })
  // }


  return (
    <Provider store={store}>

      <Router>
        <section ref={elApp} className="app main-layout full">
          <AppHeader elApp={elApp} />

          <main className="full">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<GigIndex elApp={elApp} />} path="/gig" />
              <Route element={<GigDetails elApp={elApp} />} path="/gig/:gigId" />
              <Route element={<GigEdit />} path="/gig/edit" />
              <Route element={<GigPayment  />} path="/gig/payment/:gigId" />
            </Routes>
          </main>

          {/* <AppFooter /> */}
          <UserMsg />
        </section>
      </Router>
    </Provider>

  )
}