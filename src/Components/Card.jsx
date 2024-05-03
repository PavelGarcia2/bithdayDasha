import React,{useEffect , useState} from "react"; 
import "./Card.css";

const Card = ({children,cwidth,cheight}) => {

    return (
        <div style={{width:{cwidth}, height:{cheight}}} className="hb-card">
            {children}
        </div>
    )
}

export default Card