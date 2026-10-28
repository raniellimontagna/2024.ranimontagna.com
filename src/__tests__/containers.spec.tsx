import { act, fireEvent, render, screen } from './test-utils'
import enMessages from '../../messages/en.json'

import {
  About,
  Contact,
  Experiences,
  Header,
  Hero,
  Projects,
  Repos,
  Technologies,
} from '@/containers'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { email } from '@/shared/links'
import { useAppContext } from '@/contexts/app.context'
import { mockMoreThen9Repos, mockRepos } from './mocks'

vi.mock('@/hooks/useMediaQuery')
vi.mock('@/contexts/app.context')

describe('Containers', () => {
  beforeEach(() => {
    vi.mocked(useMediaQuery).mockReturnValue(true)
  })

  describe('About', () => {
    it('should render the about page with english locale', () => {
      render(<About />, { locale: 'en' })

      screen.getByText('About')
    })

    it('should render the about page with portuguese locale', () => {
      render(<About />, { locale: 'pt' })

      screen.getByText('Sobre')
    })

    it('should be render on mobile', () => {
      // Mocking the useMediaQuery to return false to simulate a mobile device
      vi.mocked(useMediaQuery).mockReturnValue(false)

      render(<About />, { locale: 'en' })

      screen.getByText('About')
    })
  })

  describe('Contact', () => {
    it('should render the contact page with english locale', () => {
      render(<Contact />, { locale: 'en' })

      screen.getByText('Contact')
    })

    it('should render the contact page with portuguese locale', () => {
      render(<Contact />, { locale: 'pt' })

      screen.getByText('Contato')
    })

    it('should open the email link', () => {
      vi.spyOn(window, 'open').mockImplementation(() => null)

      render(<Contact />, { locale: 'en' })

      act(() => {
        fireEvent.click(screen.getByText('Send me an email'))
      })

      expect(window.open).toHaveBeenCalledWith(email)
    })
  })

  describe('Experiences', () => {
    it('should render the experiences page with english locale', () => {
      render(<Experiences />, { locale: 'en' })

      screen.getByText('Experiences')
    })

    it('should render the experiences page with portuguese locale', () => {
      render(<Experiences />, { locale: 'pt' })

      screen.getByText('Experiências')
    })

    it('should be able to open company links', () => {
      vi.spyOn(window, 'open').mockImplementation(() => null)

      render(<Experiences />, { locale: 'en' })

      const companyNameExample = enMessages.Experiences.experiences[0].company
      const companyLink = enMessages.Experiences.experiences[0].companyLink

      act(() => {
        fireEvent.click(screen.getByText(companyNameExample))
      })

      expect(window.open).toHaveBeenCalledWith(companyLink, '_blank')
    })
  })

  describe('Header', () => {
    it('should render the header with english locale', () => {
      render(<Header />, { locale: 'en' })

      screen.getByAltText('Logo')
    })

    it('should render the header with portuguese locale', () => {
      render(<Header />, { locale: 'pt' })

      screen.getByAltText('Logo')
    })

    it('should be able to scroll to the top of the page', () => {
      vi.spyOn(window, 'scrollTo').mockImplementation(() => null)

      render(<Header />, { locale: 'en' })

      act(() => {
        fireEvent.click(screen.getByAltText('Logo'))
      })

      expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    })
  })

  describe('Hero', () => {
    it('should render the hero with english locale', () => {
      render(<Hero />, { locale: 'en' })

      screen.getByText('Front-end Developer')
    })

    it('should render the hero with portuguese locale', () => {
      render(<Hero />, { locale: 'pt' })

      screen.getByText('Desenvolvedor Front-end')
    })

    it('should be able to scroll to the about section', () => {
      vi.spyOn(window, 'scrollTo')

      vi.spyOn(document, 'querySelector').mockReturnValue({
        //@ts-expect-error - Mocking the getBoundingClientRect function
        getBoundingClientRect: () => ({ top: 100 }),
      })

      render(
        <div>
          <About />
          <Hero />
        </div>,
        { locale: 'en' },
      )

      act(() => {
        fireEvent.click(screen.getByTestId('hero-button-About'))
      })

      expect(window.scrollTo).toHaveBeenCalledOnce()
    })
  })

  describe('Projects', () => {
    it('should render the projects page with english locale', () => {
      render(<Projects />, { locale: 'en' })

      screen.getByText('Professional Projects')
    })

    it('should render the projects page with portuguese locale', () => {
      render(<Projects />, { locale: 'pt' })

      screen.getByText('Projetos Profissionais')
    })
  })

  describe('Repos', () => {
    it('should render the repos page with english locale and show more repos', () => {
      vi.mocked(useAppContext).mockReturnValue({ repos: mockRepos, reposIsLoading: false })

      render(<Repos />, { locale: 'en' })

      screen.getByText('Public Repositories')
    })

    it('should render the repos page with portuguese locale', () => {
      vi.mocked(useAppContext).mockReturnValue({ repos: [], reposIsLoading: false })

      render(<Repos />, { locale: 'pt' })

      screen.getByText('Repositórios Públicos')
    })

    it('should be able to show more repos', () => {
      vi.mocked(useAppContext).mockReturnValue({ repos: mockMoreThen9Repos, reposIsLoading: false })

      render(<Repos />, { locale: 'en' })

      act(() => {
        fireEvent.click(screen.getByTestId('show-more-or-less-button'))
      })

      screen.getByText('Public Repositories')
    })

    it('should be able to render loading state', () => {
      vi.mocked(useAppContext).mockReturnValue({ repos: [], reposIsLoading: true })

      render(<Repos />, { locale: 'en' })

      screen.getByTestId('div-loading-0')
    })
  })

  describe('Technologies', () => {
    it('should render the technologies page with english locale', () => {
      render(<Technologies />, { locale: 'en' })

      screen.getByText('Technologies')
    })

    it('should render the technologies page with portuguese locale', () => {
      render(<Technologies />, { locale: 'pt' })

      screen.getByText('Tecnologias')
    })

    it('should be able to open technology links', () => {
      vi.spyOn(window, 'open').mockImplementation(() => null)

      render(<Technologies />, { locale: 'en' })

      act(() => {
        fireEvent.click(screen.getByTestId('card-tech-React'))
      })

      expect(window.open).toHaveBeenCalledWith('https://reactjs.org/', '_blank')
    })
  })
})
