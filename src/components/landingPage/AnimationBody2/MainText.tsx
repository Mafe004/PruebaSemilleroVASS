
import { Container } from 'react-bootstrap';
import '../../../assets/scss/MainTextStyle.scss';
import ImageOne from './ImageOne';
import ImageTwo from './ImageTwo';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ImageThree from './ImageThree';

// Resto del código...

function MainText() {

  return (
    
      <Container
        className="MainText"
        style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Parallax  className="parallax-container" pages={4}>
          <ParallaxLayer sticky={{start:0 , end:4}} offset={0} speed={0}>
            {/* Fondo de texto */} 
            <div className="text-background-container">
              <div className="word-art">Work</div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer  offset={1} speed={0.5} style={{position:"absolute", left:"5%"}}>
              <ImageOne/>
          </ParallaxLayer>
          <ParallaxLayer offset={1.8} speed={0.5} style={{position:"absolute", left:"40%"}}>
              <ImageTwo/>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={0.5}  style={{position:"absolute", left:"75%"}}>
              <ImageThree/>
          </ParallaxLayer>
        </Parallax>
      </Container>
   
  );
}

export default MainText;
