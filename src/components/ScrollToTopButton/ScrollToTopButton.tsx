import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { projects } from "../../data/data";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation();
  const pathnameParts = location.pathname.split("/");
  const id: string = pathnameParts[pathnameParts.length - 1];
  const selectedProject = projects.find((project) => project.id === id);

  const fontColor = selectedProject?.textColor === '#fff' ? "text-[#000]" : "text-[#fff]";

  const handleScrollView = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    setIsVisible(scrollTop > 100)
  }

  const scrollToTop = () => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollView)

    return () => {
      window.removeEventListener('scroll', handleScrollView)
    }
  }, []);

  return (
    <>
      <button
        className={`${isVisible ? 'opacity-1 scale-1' : 'opacity-0 scale-0'} transition-all duration-500
            fixed bottom-8 right-2 md:right-6 ${fontColor} ${fontColor === 'text-[#fff]' ? 'bg-[#222]' : 'bg-[#fff]'} text-[0.875em] md:text-[1em] w-[2rem] h-[2rem] z-[40]
            md:w-[3.125rem] md:h-[3.125rem] rounded-full`}
        onClick={scrollToTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>

  )
}

export default ScrollToTopButton