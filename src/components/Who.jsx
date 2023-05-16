import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;
const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
    flex:1;
    @media only screen and (max-width: 768px) {
        display: none;
      }
`;

const Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px) {
        font-size: 50px;
      }
`;


const WhatWeDo = styled.div`
    display: flex;
    align-items:center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle= styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
        font-size: 18px;
      }
`;

const Button = styled.button`
width: 120px;
font-weight: 500;
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
const Right = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        align-items: center;
        text-align: center;
      }
`;



const Who = () =>{
    return (


        <Section id="about"> 
          
            <Container>
                <Left>
                <Canvas camera={{fov:25, position: [5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate  />
            <ambientLight intensity={1}  />
            <directionalLight position={[3,2,1]} />
              <Cube/>
            </Canvas>
                </Left>
                <Right>
                 
                    <Title>Think outside the square space </Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>Who I am</Subtitle>
                    </WhatWeDo>
                    <Desc>My name is Lesedi,Between 2019 and 2022, I taught myself how to code, using resources such as Code Academy,YouTube, and FreeCodeCamp. Through the projects
                        I have uploaded on my GitHub account, I have demonstrated my knowledge and passion for programming. I am currently working as a Junior Web Developer at a company called FGX Studios, where I have gained valuable experience in the industry.
                        I am always eager to learn and enjoy the challenge of constructing programs, 
                        which constantly expands my understanding of both the problem and solution. I've been learning about the importance of integrating HTML, CSS, and JavaScript to build 
                            effective applications. I've came across a variety of technologies and tools that could be
                             useful in this process, including React, Next.js, Node.js, TypeScript, JSON, REST, 
                             MySQL, Web API, and Git.
                        </Desc>
                        <Desc>By understanding how these technologies work together, I hope to 
                             create scalable and efficient web applications that meet the needs of users.</Desc>
                    <Button><a href="https://github.com/Lesedi-M?tab=repositories" class="link" target="_blank">See my works</a></Button>
                   
                </Right>
            </Container>
        </Section>
    )
}

export default Who