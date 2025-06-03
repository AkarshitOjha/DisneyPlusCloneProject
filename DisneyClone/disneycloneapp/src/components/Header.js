import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import { useDispatch ,useSelector } from 'react-redux';
import {useNavigate } from "react-router-dom";  //useHistory-> useNavigate (latest Version)
import { auth , provider} from "../firebase";
import{selectUserName  ,setUserLoginDetails, setUserSignOut } from "../features/user/userSlice";


export default function Header(props) {

const dispatch=useDispatch();
const navigate =useNavigate ();
const userName = useSelector(selectUserName);
// const userPhoto = useSelector(selectUserPhoto);
// const userEmail = useSelector(selectUserEmail);


useEffect(()=>{
  auth.onAuthStateChanged(async(user)=>{
    if(user){
      setUser(user);
      navigate("/home")
    }
  });
},[userName]);


const handleAuth = ()=>{
  if(!userName){
  auth.signInWithPopup(provider).then((result) =>{
    setUser(result.user);
  }).catch((error)=>{
    alert(error.messgae)
  });

} else if(userName){
  auth.signOut().then(() =>{
    dispatch(setUserSignOut());
    navigate("/");
  }).catch((err)=>alert(err.message))
}
}

const setUser = (user)=>{
  dispatch(
    setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    })
  )
};



  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt='Disney+' />
        </Logo>

         {
          !userName ? <Login onClick={handleAuth}>Login</Login> :
          <> 
        <NavMenu>
           <a href='/home'>
            <img src='/images/home-icon.svg' alt='home' />
             <span>HOME</span>  </a>

             <a href='/search'>
            <img src='/images/search-icon.svg' alt='search' />
             <span>SEARCH</span>  </a>

             <a href='/watchlist'>
            <img src='/images/watchlist-icon.svg' alt='watchlist' />
             <span>WATCHLIST</span>  </a>

             <a href='/original'>
            <img src='/images/original-icon.svg' alt='original' />
             <span>ORIGINAL</span>  </a>

             <a href='/movie'>
            <img src='/images/movie-icon.svg' alt='movie' />
             <span>MOVIES</span>  </a>

             <a href='/series'>
            <img src='/images/series-icon.svg' alt='series' />
             <span>SERIES</span>  </a>
        </NavMenu>
        <SignOutt>
        <UserImg src={"/images/me.jpg"} alt={userName}></UserImg>
        <Dropdownn>
          <span onClick={handleAuth}>Sign out</span>
        </Dropdownn>
        </SignOutt>
         </>}
    </Nav>
  )
}



const Nav = styled.nav`
position: fixed;
top:0;
left:0;
right:0;
height:80px;
background-color: #090b13;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 36px;
// letter-spacing:16px;
z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:0;
display: inline-block;

img{
display:block;
width:100%;
}
`;

const NavMenu = styled.div`
align-items:cener;
display:flex;
flex-row: row nowrap;
height:100%;        // yaha check krenege baad me
justify-content: flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left:25px;

a{
display:flex;
align-items:center;
padding: 0 20px;

img{
height:20px;
min-width:20px;
width:20px;
z-index: auto;
}

span{
color: rgb(249,249,249);
font-size:15px;
line-height:1.08;
padding:2px 0px;
white-space:nowrap;
position:relative;
letter-spacing-1.42px;

&:before{
 background-color:rgb(249,249,249);
 border-radius: 0px 0px 4px 4px;
 bottom:-6px;
 content:"";
 height:2px;
 left:0px;
 opacity:0px;
 position:absolute;
 right:0px;
 transform-origin:left center;
 tranform: scaleX(0);
 transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 visibility:hidden;
 width:auto;
}
}

&:hover{
  
   span:before{
   transform:scaleX(1.1);
   visibility:visible;
   opacity: 1 !important;

   }
}
}




// @media(max-width: 768px){
// display:none;
// }
`;

const Login = styled.a`
background-color:rgba(0,0,0,0.6);
cursor: pointer; 
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 0.2s ease 0s;

&:hover{
background-color:#f9f9f9;
color:#000;
border-color: transparent;
}

`;

const UserImg = styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50%;    
  object-fit: cover;       
  border: 2px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15); 
  cursor: pointer;      
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);  // Slight zoom on hover
`;

const Dropdownn = styled.div`
postion:absolute;
top:48px;
right:0px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
padding: 10px;
font-size:14px;
letter-spacing:1px;
width:100px;
cursor:pointer;
opacity:0;
`;

const SignOutt = styled.div`
position:relative;
height:48px;
width:48px;
// display:flex;
// justify-content:center;
// align-items:center;

${UserImg}{
border-radius:50%;
width:100%;
height:100%;
}

&:hover{
${Dropdownn}{
opacity:1;
transition-duration:1s
}
}

`;