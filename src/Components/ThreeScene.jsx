import React from "react";
//threjs
import {Canvas}  from '@react-three/fiber'

const ThreeScene = ({children}) =>{
    return (
        <Canvas>{children}</Canvas>
    );
}

export default ThreeScene;