import Hero from '../components/Hero'
import Features from '../components/Features'
import Courses from '../components/Courses'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <Gallery />
      <Testimonials />
      <Team />
      <Blog />
      <Newsletter />
    </>
  )
}