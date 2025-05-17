import './css/App.css'
import { Start } from './pages/Start'
import { DemonstrationArea } from './pages/Demonstration-area'
import { Casters } from './pages/Casters'
import { Apartments } from './pages/apartments'
import { Test } from './pages/Test'
import { ApartmentDecoration } from './pages/Apartment-decoration'
import { AboutUs } from './pages/About-us'
import { Footer } from './pages/footer'

function App() {
  return (
    <>
      <main className="main">
        <Start />
        <DemonstrationArea />
        <Casters />
        <Apartments />
        <Test />
        <ApartmentDecoration />
        <AboutUs />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}

export default App
