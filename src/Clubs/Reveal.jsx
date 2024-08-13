import React, {useEffect,useRef} from "react";  
import {motion, useInView,useAnimation} from "framer-motion";

export const Reveal =({children,width="fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once: true});
    const mainControls=useAnimation();
    const slideControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView,mainControls,slideControls]);

    return(
        <div ref={ref} style={{position:"relative",width:"100%",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0,x:-75},
                    visible:{opacity:1,x:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5,delay: 0.25}}
            >{children}
            </motion.div>
            <motion.div 
                variants={{
                    hidden:{left:0},
                    visible:{left:"100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration:0.5,ease: "easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background: "#5b21b6",
                    zIndex:20,
                }}
            />

             
        </div>
    );
}
export const Reveal2 =({children,width="fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once: true});
    const mainControls=useAnimation();
    const slideControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView,mainControls,slideControls]);

    return(
        <div ref={ref} style={{position:"relative",width:"100%",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0,x:-75},
                    visible:{opacity:1,x:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5,delay: 0.25}}
            >{children}
            </motion.div>
            <motion.div 
                variants={{
                    hidden:{left:0},
                    visible:{left:"100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration:0.5,ease: "easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background: "#3ab09e",
                    zIndex:20,
                }}
            />

             
        </div>
    );
}



export const Reverse =({children,width="fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once: true});
    const mainControls=useAnimation();
    const slideControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView,mainControls,slideControls]);

    return(
        <div ref={ref} style={{position:"relative",width:"100%",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0,y:75},
                    visible:{opacity:1,y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5,delay: 0.25}}
            >{children}
            </motion.div>
            <motion.div 
                 variants={{
                    hidden:{top:0},
                    visible:{top:"100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration:0.5,ease: "easeIn"}}
                style={{
                    position:"absolute",
                    top:4,
                    bottom:4,
                    left:0,
                    right:0,
                    background: "#5b21b6",
                    zIndex:20,
                }}
            />

             
        </div>
    );
}

export const Hover=({children,width="fit-content"})=>{
    return (
        <motion.div
            whileHover={{scale:1.3,originX:'40%'}}
            transition={{type:'spring',stiffness:300}}

        >
            {children}
        </motion.div>
    );
}

export const Basic =({children,width="fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once: true});
    const mainControls=useAnimation();
    const slideControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView,mainControls,slideControls]);

    return(
        <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0,y:75},
                    visible:{opacity:1,y:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5,delay: 0.25}}
            >{children}
            </motion.div>
          

             
        </div>
    );
}


export const Basic2 =({children,width="fit-content"})=>{
    const ref=useRef(null);
    const isInView=useInView(ref,{once: true});
    const mainControls=useAnimation();
    const slideControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView,mainControls,slideControls]);

    return(
        <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
            <motion.div
                variants={{
                    hidden:{opacity:0,x:-100},
                    visible:{opacity:1,x:0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.5,delay: 0.25}}
            >{children}
            </motion.div>
          

             
        </div>
    );
}
