import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const currentYear = new Date().getFullYear()

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Nice to meet you, <br /> I'm Kelok Chan.
        </BigTitle>
        <Subtitle>I develop mobile apps and website because coding is ♥️</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>What do I do?</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="GoBiz™"
            link="https://www.gobiz.com.my/"
            bg="linear-gradient(to top, #f77062 0%, #fe5196 100%)"
          >
            Core mobile developer for the upcoming e-wallet powerhouse in Malaysia.
          </ProjectCard>
          <ProjectCard
            title="AOneSchools™"
            link="https://aoneschools.com/"
            bg="linear-gradient(to top, #89f7fe 0%, #66a6ff 100%)"
          >
            An all-in-one management apps for parents to keep track of the students' progress in the tuition centre.
          </ProjectCard>
          <ProjectCard
            title="Medkad™"
            link="https://medkad.com/"
            bg="linear-gradient(to bottom, #ff0844 0%, #ffb199 100%)"
          >
            Part of the earlier development team for the medical benefits automation system.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>Who am I?</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Me" />
          <AboutSub>
            I really enjoy working with everything technology-related. Staying up-to-date with the latest front-end
            technology is mostly what I do. But to be frank, I am quite an introvert. So I will let my code do the
            talking. 😉
          </AboutSub>
        </AboutHero>
        <AboutDesc />
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Talk to me!</Title>
          <ContactText>
            Drop me an <a href="mailto:kelokchan@gmail.com">email</a> or reach me on:{' '}
            <a href="https://www.linkedin.com/in/kelokchan/">LinkedIn</a> &{' '}
            <a href="https://github.com/kelokchan">GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; {currentYear} by Gatsby Starter Portfolio Cara. All credit goes to{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
