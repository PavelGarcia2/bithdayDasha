import React,{useEffect , useState} from "react"; 
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [ windowDimension , setDimension] = useState({width: window.innerWidth-10, height:window.innerHeight-10})
    const [ Btn , setBtn] = useState(true)
    const detectSize = () =>{
        setDimension({width: window.innerWidth-10, height:window.innerHeight-10})
    }

    useEffect(()=>{
        window.addEventListener('resize',detectSize);
        return ()=>{
            window.removeEventListener('resize',detectSize);
        }
    },[windowDimension])

    return (
        <>
            {/*<button onClick={()=> setBtn(!Btn)}></button>*/}
            {Btn && <ReactConfetti
                width={windowDimension.width}
                height={windowDimension.height}
                tweenDuration={1000}
            />}
        </>
    )
}

export default Confetti