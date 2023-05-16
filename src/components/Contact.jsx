import React, {useRef, useState } from "react";
import styled from "styled-components";
import emailjs from  "@emailjs/browser";
import Map from "./Map";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`;

const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   gap: 50px;

   @media only screen and (max-width: 768px) {
    
  }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media only screen and (max-width: 768px) {
        justify-content: center;
      }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none ;
  }
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Input = styled.input`
    padding: 20px;
    background-color: #e8e6e6;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: #e8e6e6;
`;

const Button = styled.button`

font-weight: bold;
padding: 20px;
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

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media only screen and (max-width: 768px) {
        width: 300px;
      }
`;



const Contact = () =>{
    
    const ref = useRef()
    const [success, setSuccess] = useState(null)
    
    const handleSubmit =e=>{
        e.preventDefault()
    
        emailjs.sendForm('service_yigziwa', 'template_hv0egf1', ref.current, 'Eb-iG0cfa8L0fCOW_')
          .then((result) => {
              console.log(result.text);
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
              setSuccess(false)
          });
    }

    return (
        <Section id="contact">
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact Me</Title>
                        <Input placeholder="Name" name="name"/>
                        <Input placeholder="Email" name="email"/>
                        <TextArea placeholder="Write you message" name="message" rows={10} />
                        <Button type="submit">Send</Button>
                        {success && "Your message has been sent"}
                    </Form>
                </Left>
                <Right>
                    <Map/>
                </Right>
            </Container>
        </Section>
    );
}

export default Contact