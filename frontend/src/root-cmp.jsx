import './assets/scss/styles.scss'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { store } from './store/gig/store'
import { Provider } from 'react-redux'

import { AppFooter } from './cmps/app-footer'
import { AppHeader } from './cmps/app-header'
import { GigIndex } from './pages/gig-index'
import { HomePage } from './pages/home-page'
import { GigDetails } from './pages/gig-details'
import { UserMsg } from './cmps/user-msg'
import { GigPayment } from './pages/gig-payment'


export function App() {
  return (
    <Provider store={store}>

      <Router>
        <section className="app main-layout">
          <AppHeader />

          {/* <main className="full"> */}
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<GigIndex />} path="/gig" />
              <Route element={<GigDetails />} path="/gig/:gigId" />
              <Route element={<GigPayment />} path="/gig/payment/:gigId" />
            </Routes>
          </main>

          {/* <AppFooter />
          <UserMsg /> */}
        </section>
      </Router>
    </Provider>

  )
}