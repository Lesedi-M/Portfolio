import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import {Model } from "./ModelDraco";
import styled from "styled-components";

const Desc = styled.div`
    width:250px;
    height:110px;
    padding: 10px 10px;
    outline: none;
    box-shadow: 0 0 20px rgb(192,192,192);
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top:100px;
    right:100px;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
`;

const WebDesign = () => {
    return (
        <>
        <Canvas>
            <Stage environment="city" intensity={0.6}>
            <Model/>
            </Stage>
           <OrbitControls enableZoom={false}  autoRotate /> 
        </Canvas>
        <Desc>
                Strong technical skills and a good understanding of web development principles, including HTML, CSS, JavaScript, and web frameworks/libraries, are critical for delivering quality web solutions as a proficient web developer.</Desc>
        </>
    )
}

export default WebDesign