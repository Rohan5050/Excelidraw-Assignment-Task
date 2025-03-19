"use client";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//import Logo from "../images/thumbnail.jpg";
//import { FaBars } from "react-icons/fa6";
//import { AiOutlineClose } from "react-icons/ai";
import { Menu } from "lucide-react"
//import "../index.css";

const Header: React.FC = () => {

    const [isNavShowing, setIsNavShowing] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth > 800 : false);

    const closeNavHandler = () => {
        if (window.innerWidth > 800) {
            setIsNavShowing(true);
        } else {
            setIsNavShowing(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", closeNavHandler);
            return () => window.removeEventListener("resize", closeNavHandler);
        }
    }, []);

    return (
        <Router>
        <nav>
            <div className="container nav_container">
               {/* <Link to="/" className="nav_logo">
                 {/* <img src={Logo} alt="Navbar Logo" /> }
                </Link> */}
                {isNavShowing && (
                    <div className="nav_menu">
                        <nav className="hidden md:block">
                            <ul className="flex space-x-6">
                                <li>
                                    <a className="text-gray-600 hover:text-blue-600">How It Works</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-600">Benefits</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-600">Testimonials</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-blue-600">Contact Us</a>
                                </li>

                            </ul>
                          
                        </nav>
                    </div>
                )}
               <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsNavShowing(!isNavShowing)}
                    aria-label="Toggle navigation menu"
                >
                    <Menu className="h-6 w-6 text-gray-600" />
                </button>
            </div>
        </nav>
        </Router>
    );
};

export default Header;
