import './assets/scss/styles.scss'

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { AppFooter } from './cmps/app-footer'
import { AppHeader } from './cmps/app-header'
import { GigIndex } from './pages/gig-index'
import { GuestHomeIndex } from './pages/guest-home-index'
import { HomePage } from './pages/home-page'
import { GigDetails } from './pages/gig-details'


export function App() {
  return (
    <div className="App">
      <Router>
        <section className="app">
          <AppHeader />

          <main className="full">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<GuestHomeIndex />} path="/guest" /> 
              <Route element={<GigIndex />} path="/gig" />
              <Route element={<GigDetails />} path="/gig/:gigId" />
            </Routes>
          </main>

          <AppFooter />
        </section>
      </Router>
    </div>
  )
}