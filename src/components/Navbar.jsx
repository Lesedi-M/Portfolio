import React from 'react';
import styled from 'styled-components';



const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

    @media (orientation: landscape) {
        width: 100%;
     }
     @media (orientation: portrait) {
        width:100%;
     }
`;


const Container = styled.div`
    width: 1400px;
    display: flex;
   align-items: center;
    justify-content: space-between;
    padding: 17px 0px;
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 15px;
      }

      @media (orientation: landscape) {
        width: 100%;
        padding: 15px;
     }
     @media (orientation: portrait) {
        width:100%;
        padding: 10px;
     }
`;

const Links= styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    
`;

const Logo = styled.img`
    border-radius: 2px;
    height: 65px;
`;

const List = styled.ul`
  display: flex;
  gap:20px;
    list-style: none;
    @media only screen and (max-width: 768px) {
        display: none;
      }
      
     @media (orientation: portrait) {
        display: none
     }
`;

const ListItem = styled.li`
 
    cursor: pointer;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #da4ea2;
        transform: scaleX(0);
        transition: transform 0.2s ease-out;
      }
      
      &:hover::after {
        transform: scaleX(1);
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Button = styled.button` 
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    
    border-radius: 5px;
    cursor: pointer;
    
    border: 2px solid #da4ea2;
  background-color: transparent;
  &:hover {
    background-color: #da4ea2;
    border-color: white;
    color: white;
  }
`;
const emailAddress = "lesedimautsa2@gmail.com";
const Navbar = () => {
    return (

        <Section>
            <Container>
                <Links>
                <Logo src="./img/logo1.png"/>
                <List>
                <ListItem><a href="#home" class="link">Home</a></ListItem>
  <ListItem><a href="#about" class="link">About</a></ListItem>
  <ListItem><a href="#works" class="link">Works</a></ListItem>
  <ListItem><a href="#contact" class="link">Contact</a></ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <a href={`mailto:${emailAddress}`}>
                    <Button>Hire Now</Button>
                    </a>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar 