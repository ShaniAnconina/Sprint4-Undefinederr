import './assets/scss/styles.scss'

import React, { useEffect, useRef } from 'react'
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
import { UserProfile } from './pages/user-profile'
import { socketService } from './services/socket.service'
import { showSuccessMsg } from './services/event-bus.service'


export function App() {
  const elApp = useRef(null)

  useEffect(() => {
    socketService.on('first-event', (msg)=> {
      showSuccessMsg(msg)
    })

    socketService.on('ON_INCOMING_ORDER', () => {
      showSuccessMsg('You have a new order!')
    })
  }, [])

  return (
    <Provider store={store}>

      <Router>
        <section ref={elApp} className="app main-layout full">
          <AppHeader elApp={elApp} />

          <main className="full">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<GigIndex />} path="/gig" />
              <Route element={<GigDetails elApp={elApp} />} path="/gig/:gigId" />
              <Route element={<GigEdit />} path="/gig/edit" />
              <Route element={<GigPayment />} path="/gig/payment/:gigId" />
              <Route element={<UserProfile />} path="/user/:userId" />
            </Routes>
          </main>

          <AppFooter />
          <UserMsg />
        </section>
      </Router>
    </Provider>

  )
}