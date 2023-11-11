import React from 'react';
import {motion} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import images from './Images'
import './Slider.css';


function Slider(){
    
const [width, setWidth] = useState(0);
const carousel = useRef();

useEffect(() => {

setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
}, []);

    return (
        <>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing" }}>
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
               {images.map(image => {
                return(
                    <motion.div className="item">
                        <img src={image} alt=""/>
                    </motion.div>
                );
               })}
            </motion.div>
        </motion.div>
        
        
        
        </>

    );
}

export default Slider