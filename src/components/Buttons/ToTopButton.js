import { useEffect, useState } from "react";
import totop from '../../img/circle-up.svg'
import s from './Buttons.module.css'

export default function ToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        
    }, []);
    
    const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
    return (<>
     {isVisible && 
        <div className={s.totop} onClick={scrollToTop}>
            <img src={totop} alt='Go to top'/>
            </div>}
        </>
 )
};
