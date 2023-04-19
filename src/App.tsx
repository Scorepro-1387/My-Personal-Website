import {useState,useEffect} from "react";
import "./App.css";
import { motion } from "framer-motion"
import Navbar from "./Components/NavigationBar/navbar";
import Skillmeter from "./Components/SkillMeter/Skillmeter";

function App() {
  function Cursor(){
    const [mouseposition, setMouseposition] = useState({
        x:0,
        y:0
    });
    useEffect(() => {
        const mouseMove = (e:any) => {
            setMouseposition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, [])

    const varients = {
        default: {
            x: mouseposition.x -17,
            y: mouseposition.y -16
        }
    }
    return(
        <motion.div
            className="cursor"
            variants={varients}
            animate="default"
        ><p className="letter">S</p></motion.div>
    );
}
  return (
    <div className="App" style={{marginBottom:"50px"}}>
      <Navbar/>
      <Cursor/>
      <div className="main-home-div" style={{marginTop:"100px"}}>
        <div className="main-page-skeleton" style={{textAlign: "center"}}>
            <div className="About-div">
                <h2>About</h2>
              <p>Test about?</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
