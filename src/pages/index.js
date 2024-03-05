import * as React from "react";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import animgif from "../images/Layer06.gif";


const pageStyles = {
  color: "#000000",
  padding: 196,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const PageBackground = () => {
  return (
    <MouseParallaxContainer globalFactorX={1} globalFactorY={0} inverted useWindowMouseEvents className="parallax_container"
      style={{ overflow: "visible" }}>

      <MouseParallaxChild factorX={0.02} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer6"></div>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.05} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer5"></div>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.1} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer4"></div>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.15} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer3"></div>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.3} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer2"></div>
      </MouseParallaxChild>
      
      <MouseParallaxChild factorX={0.5} factorY={0} style={{ position: "absolute", top: 0, left: 0 }}>
        <div className="parallax_layer" id="layer1"></div>
      </MouseParallaxChild>
  
    </MouseParallaxContainer>
  );
}

function PageImage() {
  return (
    
    <MouseParallaxContainer globalFactorX={1} globalFactorY={0} inverted useWindowMouseEvents className="containerStyle" style={{overflow:"visible !important"}}>

      <MouseParallaxChild factorX={0} factorY={0} className="parallaxChild" style={{position:"relative", zIndex:-1 }}>
        <StaticImage src="../images/Layer0.png" className="imageStyle" />
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0} factorY={0} className="parallaxChild" style={{ zIndex:10}}>
        <StaticImage src="../images/Title.png" className="imageStyle" />
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.02} factorY={0} className="parallaxChild" style={{zIndex:0}}>
        <StaticImage src="../images/Layer01.png" className="imageStyle" />
      </MouseParallaxChild>
        
      <MouseParallaxChild factorX={0.05} factorY={0} className="parallaxChild" style={{zIndex:1}}>
        <StaticImage src="../images/Layer02.png" className="imageStyle"/>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.1} factorY={0} className="parallaxChild" style={{zIndex:2}}>
        <StaticImage src="../images/Layer03.png" className="imageStyle" />
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.15} factorY={0} className="parallaxChild" style={{zIndex:3}}>
        <StaticImage src="../images/Layer04.png" className="imageStyle" />
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.3} factorY={0} className="parallaxChild" style={{zIndex:4}}>
        <StaticImage src="../images/Layer05.png" className="imageStyle" />
      </MouseParallaxChild>
  
      <MouseParallaxChild factorX={0.5} factorY={0} className="parallaxChild" style={{zIndex:5}}>
        {/* <StaticImage src="../images/Layer06.png" className="imageStyle" /> */}
        <img src={animgif} className="imageStyle" /> 
      </MouseParallaxChild>
  
    </MouseParallaxContainer>
  );
}


const IndexPage = () => {

  return (
    <div>

      <div className="headerLinks">
        <a href="https://www.youtube.com/@ScribeRPG" target="_blank">
          <StaticImage src="../images/youtube.png" className="logoImage" /></a>
        <a href="https://www.instagram.com/scriberpg/?fbclid=IwAR3hhAwQkKOqasY7Wjo-_sWvOxqzB23Ry0NXigAHagKKaBgfk7zvRTljrp8" target="_blank">
          <StaticImage src="../images/Instagram.png" className="logoImage" /></a>
        <a href="https://www.facebook.com/profile.php?id=61552530251263" target="_blank">
          <StaticImage src="../images/facebook.png" className="fbImage" style={{}} /></a>
      </div>

      {/* <div className="parallax_layer" id="title" style={{ position: "absolute", top: 0, left: 0, zIndex: "10" }}></div> */}
      
      {/* <div className="parallax_layer" id="layer7"style={{ position: "absolute", top: 0, left: 0, zIndex: "-3" }}></div>  */}

      <div className="containerWrap">
        {PageImage()}
      </div>


    </div>
  )
}

export default IndexPage

export const Head = () => <title>Scribe RPG</title>


