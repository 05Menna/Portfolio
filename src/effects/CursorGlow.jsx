import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [pos,setPos]=useState({x:0,y:0});

  useEffect(()=>{

    const move=e=>{
      setPos({
        x:e.clientX,
        y:e.clientY
      });
    }

    window.addEventListener("mousemove",move);

    return ()=>window.removeEventListener("mousemove",move);

  },[]);

  return(

<div

className="pointer-events-none fixed z-50 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-75"

style={{
transform:`translate(${pos.x-160}px,${pos.y-160}px)`
}}

/>

  )

}