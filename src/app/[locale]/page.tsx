'use client'

import {
  About,
  Contact,
  Experiences,
  Header,
  Hero,
  Projects,
  Technologies,
  Repos,
} from '@/containers'
import { Footer } from '@/components/footer/footer'
import { NewSiteBanner } from '@/components/newSiteBanner/newSiteBanner'
import { AppProvider } from '@/contexts/app.context'

export default function Index() {
  return (
    <AppProvider>
      <div className="snap-y snap-mandatory">
        <NewSiteBanner />
        <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="technologies">
          <Technologies />
        </section>

        <section id="experiences">
          <Experiences />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="repos">
          <Repos />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </AppProvider>
  )
}
