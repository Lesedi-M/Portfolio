import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/Who";
import './style.css';




const Container = styled.div`
  height: 100vh;
 
   scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("/img/bg.jpeg");
  &::-webkit-scrollbar{
    display:none;
  }

`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      
    </Container>
  )
}

export default App
