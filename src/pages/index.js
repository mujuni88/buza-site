import React from 'react'
import styled from 'styled-components'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitterSquare,
  FaMedium,
  FaSlideshare,
} from 'react-icons/fa'
import media from 'styled-media-query'
import Typist from 'react-typist'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout>
    <Container>
      <Name>
        <Typist cursor={cursor}>Joe Buza.</Typist>
      </Name>
      <SocialMediaWrapper>
        {links.map(({ icon, label, color, url }) => (
          <SocialMediaLink title={label} href={url} key={label} target='_blank'>
            {icon(color)}
          </SocialMediaLink>
        ))}
      </SocialMediaWrapper>
    </Container>
  </Layout>
)

const cursor = {
  show: false,
  hideWhenDone: true,
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Name = styled.div`
  font-family: 'Tangerine', serif;
  font-size: 15em;
  text-align: center;
  ${media.lessThan('small')`
    font-size: 6em;    
  `} ${media.between('small', 'medium')`
    font-size: 11em;    
  `};
`

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${media.lessThan('medium')`
    flex-wrap: wrap;
    align-content: center;
  `};
`

const SocialMediaLink = styled.a`
  font-size: 1.8em;
  margin: 0 1em;
  ${media.between('medium', 'large')`
    font-size: 2em;    
  `} ${media.greaterThan('large')`
    font-size: 3em;    
  `};
`

const links = [
  {
    icon: color => <FaGithub color={color} />,
    label: 'Github',
    color: '#333',
    url: 'https://github.com/mujuni88',
  },
  {
    icon: color => <FaSlideshare color={color} />,
    label: 'Slides',
    color: '#E5637C',
    url: 'https://slides.com/joebuza#',
  },
  {
    icon: color => <FaTwitterSquare color={color} />,
    label: 'Twitter',
    color: '#0077b5',
    url: 'https://twitter.com/cantfindaname88',
  },
  {
    icon: color => <FaMedium color={color} />,
    label: 'Medium',
    color: '#00ab6c',
    url: 'https://medium.com/@joebuza',
  },
  {
    icon: color => <FaLinkedin color={color} />,
    label: 'Linkedin',
    color: '#0077b5',
    url: 'https://linkedin.com/in/joebuza/',
  },
  {
    icon: color => <FaEnvelope color={color} />,
    label: 'Mail',
    color: '#333',
    url: 'mailto:joebm08+psite@gmail.com',
  },
]

export default IndexPage
