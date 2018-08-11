import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`

const Name = styled.div`
  font-family: Madelyn;
  font-size: 10em;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const SocialMediaLink = styled.a`
  font-size: 16px;
`

const links = [
  {
    icon: (color) => <FaGithub color={color} />,
    label: 'Github',
    color: 'black',
    url: 'https://github.com/mujuni88'
  },
  {
    icon: (color) => <FaLinkedin color={color} />,
    label: 'Linkedln',
    color: '#0077b5',
    url: 'https://linkedin.com/in/joebuza/'
  }
]

const IndexPage = () => (
  <Container>
    <Name>Joe Buza.</Name>
    <SocialMediaWrapper>
      {links.map(({icon, label, color, url}) => 
          <SocialMediaLink href={url} key={label}>
            {icon(color)}
          </SocialMediaLink>
        )}
    </SocialMediaWrapper>
  </Container>
)

export default IndexPage
