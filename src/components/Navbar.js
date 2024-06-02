import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollDetector from '../utils/useScrollDetector';

const Navbar = (props) => {

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
        };
        scrollToTop();
    }, []);

    const isScrolled = useScrollDetector();

    const { scrollYProgress } = useScroll();

    const navDisplay = useTransform(
        scrollYProgress,
        [0, 0.1],
        [0, 1],
    );

    return (
        <>
            {isScrolled && (
                <motion.div
                    id="navigation"
                    style={{
                        opacity: navDisplay
                    }}
                    >
                        <div className="logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="hexagon">
                                <rect width="256" height="256" fill="none"></rect>
                                <path fill="none" style={{ stroke: "var(--secondColor)"}} strokeLinecap="round" strokeLinejoin="round" strokeWidth="13" d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z"></path>
                            </svg>
                            <span className="initial">J</span>
                        </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;