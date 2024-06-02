import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion'; 

const Reveal = ( {
     children, 
     duration = 0.3, 
     delay = 0.2,
     position = "y",
     initialPosition = 10, 
     finalPosition = 0, 
                        } ) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, position: initialPosition},
                    visible: { opacity: 1, position: finalPosition}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: duration, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;