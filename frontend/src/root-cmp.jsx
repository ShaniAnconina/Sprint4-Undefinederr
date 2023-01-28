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
import { SellerDashboard } from './pages/seller-dashboard'
import { socketService } from './services/socket.service'
import { showSuccessMsg } from './services/event-bus.service'


export function App() {
  const elApp = useRef(null)

  useEffect(() => {
    socketService.on('ON_INCOMING_ORDER', (msg) => {
      showSuccessMsg(msg)
      console.log('msg:', msg)
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
              <Route element={<GigIndex elApp={elApp} />} path="/gig" />
              <Route element={<GigDetails elApp={elApp} />} path="/gig/:gigId" />
              <Route element={<GigEdit />} path="/gig/edit" />
              <Route element={<GigPayment />} path="/gig/payment/:gigId" />
              {/* reroute with userID: */}
              <Route element={<SellerDashboard />} path="/user/:userId" />
            </Routes>
          </main>

          {/* <AppFooter /> */}
          <UserMsg />
        </section>
      </Router>
    </Provider>

  )
}