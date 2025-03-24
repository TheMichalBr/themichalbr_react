import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
    return (        
        <>
            <NavLink to="/aboutme">About me</NavLink>
            <NavLink to="/equimpent">Equipment</NavLink>
            <NavLink to="/gamesandother">Games and other</NavLink>
        </>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
    <>
        <nav className="w-1/3 flex justify-end">
            <div className="hidden w-full justify-between md:flex">
                <NavLinks />
            </div>
            <div className="md:hidden">
                <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </nav>
        {isOpen && (
            <div className="flex flex-col items-center basis-full">
                <NavLinks />
            </div>)}
        </>
    );
};

export default Nav;