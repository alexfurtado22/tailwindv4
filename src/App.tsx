import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className='grid grid-cols-2 items-center justify-center'>
      <NavBar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App
