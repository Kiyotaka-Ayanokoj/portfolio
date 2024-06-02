import React from "react";
import '../styles/backToTopButton.css';
import { useScroll, useTransform } from "framer-motion";
import useScrollDetector from '../utils/useScrollDetector';

const BackToTopButton = (props) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    const isScrolled = useScrollDetector(250);

    const { scrollYProgress } = useScroll();

    const displayB = useTransform(
        scrollYProgress,
        [0, 0.5],
        [0, 1],
    );

    return (
        <>
            {isScrolled && 
                <svg
                    className="backToTopButton"
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        opacity: displayB,
                    }}
                    onClick={scrollToTop}
                >
                    <path d="M7 20.6621C4.01099 18.933 2 15.7013 2 11.9999C2 6.47703 6.47715 1.99988 12 1.99988C17.5228 1.99988 22 6.47703 22 11.9999C22 15.7013 19.989 18.933 17 20.6621M16 11.9999L12 7.99995M12 7.99995L8 11.9999M12 7.99995V21.9999" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </>
    );
};

export default BackToTopButton;