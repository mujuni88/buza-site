import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitterSquare, FaMedium, FaSlideshare } from 'react-icons/fa'
import media from 'styled-media-query'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Name = styled.div`
  font-family: 'Tangerine', serif;
  font-size: 15em;
  ${media.lessThan('medium')`
    
  `}
`

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const SocialMediaLink = styled.a`
  font-size: 1.8em;
  margin: 0 1em;
`

const links = [
  {
    icon: (color) => <FaGithub color={color} />,
    label: 'Github',
    color: '#333',
    url: 'https://github.com/mujuni88'
  }, 
  {
    icon: (color) => <FaSlideshare color={color} />,
    label: 'Slides',
    color: '#E5637C',
    url: 'https://slides.com/joebuza#'
  }, 
  {
    icon: (color) => <FaTwitterSquare color={color} />,
    label: 'Twitter',
    color: '#0077b5',
    url: 'https://twitter.com/cantfindaname88'
  },
  {
    icon: (color) => <FaMedium color={color} />,
    label: 'Medium',
    color: '#00ab6c',
    url: 'https://medium.com/@joebuza'
  },
  {
    icon: (color) => <FaLinkedin color={color} />,
    label: 'Linkedin',
    color: '#0077b5',
    url: 'https://linkedin.com/in/joebuza/'
  },
  {
    icon: (color) => <FaEnvelope color={color} />,
    label: 'Mail',
    color: '#333',
    url: 'mailto:joebm08+psite@gmail.com'
  }, 
]

const IndexPage = () => (
  <Container>
    <Name>Joe Buza.</Name>
    <SocialMediaWrapper>
      {links.map(({icon, label, color, url}) => 
          <SocialMediaLink title={label} href={url} key={label}>
            {icon(color)}
          </SocialMediaLink>
        )}
    </SocialMediaWrapper>
  </Container>
)

export default IndexPage
