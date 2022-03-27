import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { MdOutlineCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { NavWrapper, NavLinks, Topwrapper } from "./NavbarStyles";

const Navbar = () => {
   return (
      <>
         <Topwrapper>
            <div className="location">
               <h2>
                  <GoLocation />
               </h2>
               <div>
                  <p>4 kudirat Abiola away</p>
                  <p>Ikeja Lagos</p>
               </div>
            </div>
            <div className="phone">
               <h2>
                  <MdOutlineCall />
               </h2>
               <div>
                  <a href="tel:08031333624">08031333624</a>
                  <br />
                  <a href="tel:07054229191">07054229191</a>
               </div>
            </div>
            <div className="mail">
               <p>
                  <FiMail />
               </p>
               <a href="mailto:Yourmitechengineeringlimited@gmail.com">
                  : Send us a mail
               </a>
            </div>
         </Topwrapper>
         <NavWrapper>
            <Link to="/" className="logo">
               <div>
                  <h2>YMT</h2>
                  <span>Yourmitech</span>
               </div>
            </Link>
            <NavLinks>
               <Link to="/reviews">
                  <button>reviews</button>
               </Link>
            </NavLinks>
         </NavWrapper>
      </>
   );
};

export default Navbar;
