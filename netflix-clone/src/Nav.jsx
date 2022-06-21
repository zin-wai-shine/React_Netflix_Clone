import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(()=>{
            
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200){
                setShow(true);
            }else{
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll",null);
        };

    },[])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <p className='nav__logo'>NETFLIX</p>
      <img className='nav__avatar' src="data:image/jpeg;base64,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" alt="convatar" />
    </div>
  );
}

export default Nav;
