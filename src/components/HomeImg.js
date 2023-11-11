import React from "react";
import sky from './picture/sky.jpg'
import SpinCat from './picture/SpinCat.gif'
import './HomeImg.css'
import {motion} from "framer-motion"


function HomeImg() {
    const [text, setText] = React.useState("")

    // function handleText(event){
    //     const newText = event.target.value
    //     setText(newtext)
    // }
    return (
        <div className="cont">
            <div className="image-wrapper">
                    <img src={sky} alt="" className="image"/>
                    <motion.h1  className="image-text" animate={{ x:100 }}>Welcome to Pet Heaven Society</motion.h1>
                    <motion.h1 className="image-text1"  animate={{ x: 100 }} transition={{ duration: 2.2, ease: "easeInOut" }}> Where Every Paw Finds Its Paradise </motion.h1>
                    <img  className="spincat" src={SpinCat} alt="SpinCat" />


            </div>


        </div>
    );
}

export default HomeImg