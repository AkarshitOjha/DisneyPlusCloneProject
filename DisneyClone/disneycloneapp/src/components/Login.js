import React from 'react'
import styled from 'styled-components'
export default function Login() {
  return (
    <Container>
      <Content>
      <CTA>
       <CTALogoOne src ="/images/cta-logo-one.svg" alt="" />
       <SignUp>GET ALL THERE</SignUp>
       <Description>Subscribe And Enjoy Unlimted Movies , Show & Live Show</Description>
       <CTALogoTwo  src = "/images/cta-logo-two.png" alt =""  />
      </CTA>
      <BgImages /></Content>
    </Container>
  )
}

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
align-items:center;
height: 100vh
`;

const Content = styled.div`
margin-bottom:10vw;
width: 100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 80px 40px;
height:100%;
`;

const BgImages = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url('/images/login.png');
position: absolute;
top:0;
left:0;
right:0;
z-index:-1;
`; 

const CTA = styled.div`
max-width:650px;
width:100%;
display:flex;
flex-direction:column;
`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%
`;

const SignUp = styled.a`
font-weight:bold;
text-align: center;
color: #f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:24px;
border:1px solid transparent;
border-radius:4px;

&:hover{
background-color:#0483ee;
}
`;

const Description = styled.p`
text-align: center;
color: hsla(0,0%,95.3%,1);
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`;

const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
verticall-align:bottom;
width:100%;

`;