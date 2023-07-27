import AnimationBody1 from "./landingPage/AnimationBody1";
import MainText from "./landingPage/AnimationBody2/MainText";
import Contact from "./landingPage/Contact";
import FooterPag from "./landingPage/FooterPag";
import Header from "./landingPage/Header"
import Navigation from "./landingPage/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
function LandingComponets() {

    return (
        <div>
            <Navigation />
            <Header />
            <AnimationBody1/>
            <MainText/>
            <Contact/>
            <FooterPag/>
            
        </div>
    )
}

export default LandingComponets