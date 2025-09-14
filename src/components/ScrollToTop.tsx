import { useState, useEffect, useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { HiOutlineArrowUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollY = useRef(0);

  const toggleVisibility = () => {
    const currentScrollY = window.pageYOffset;

    // Check if the user is scrolling down and has passed the viewport height
    if (
      currentScrollY > window.innerHeight &&
      currentScrollY < prevScrollY.current
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    // Update previous scroll position
    prevScrollY.current = currentScrollY;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            zIndex: 800,
          }}
          className="fixed md:bottom-8 md:right-8 bottom-4 right-4 md:text-base text-sm md:p-4 p-2 mix-blend-difference bg-white rounded-full"
        >
          <HiOutlineArrowUp className="mix-blend-difference" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
