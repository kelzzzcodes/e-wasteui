import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Process from './components/Process'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <Process/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
