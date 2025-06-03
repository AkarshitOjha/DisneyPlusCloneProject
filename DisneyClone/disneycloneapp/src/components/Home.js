 
import React from "react";
import styled from "styled-components";
import ImgSlider from "./imageSlider";
import Viewers from "./Viewers";
import Recomends from "./Recomends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) =>{
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(()=>{
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
        db.collection("movie").onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch (doc.data().type) {
                    case "recommend":
                    recommends = [ ...recommends, ({id: doc.id, ...doc.data()})]  
                    break;
                    case "new":
                        newDisneys = [ ...newDisneys, ({id: doc.id, ...doc.data()})]
                    break;
                    case "original":
                        originals = [ ...originals, ({id: doc.id, ...doc.data()})]
                    break;
                    case "trending":
                    trending = [ ...trending, ({id: doc.id, ...doc.data()})]
                    break;
                }
            })
       
        dispatch(setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
        })
    );
     });
    },[userName] );


    return (
        <Container>
        <ImgSlider />
        <Viewers />
        <Recomends />
        <NewDisney />
        <Originals />
        <Trending />
        </Container>
    )
};

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display:block;
 padding: 80px calc(3.5vw + 4px) 0;
// top:72px;
// padding: 0 calc(3.5vw + 4px);

&:after{
background:url("/images/home-bg.png") center center / cover 
no-repeat fixed;
content: "";
position: absolute;
inset: 0px;
opacity: 1;
z-index: -1;
}
`;



export default Home;

