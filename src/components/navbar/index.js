import React from "react";
import logo from '../../assets/images/verdeLogo.png';
import { IconContext } from "react-icons";
import {
    FaUserCircle,
    FaAlignJustify
  } from "react-icons/fa";
import {
    Menuitem, 
    Logo, 
    SmallContainer, 
    BigContainer, 
    SmallMenuitem, 
    BigButtonsContainer, 
    SmallButtonsContainer, 
    AccountIconContainer
} from "./stylecomponents";

const MaxNavbar = () => {
    return (
        <div style={{justifyContent: 'center', textAlign: 'center'}}>
            <AccountIconContainer>
                <FaUserCircle />
            </AccountIconContainer>
            <Logo src={logo} />
            <BigButtonsContainer>
                <Menuitem>INICIO</Menuitem>
                <Menuitem>PRODUCTOS</Menuitem>
                <Menuitem>TALLERES</Menuitem>
                <Menuitem>ACERCA DE NOSOTROS</Menuitem>
                <Menuitem>CONTACTANOS</Menuitem>
            </BigButtonsContainer>
        </div>
    )
}

const MinNavbar = () => {
    return(
        <div>
            <nav className="bg-green h-24 p-2">
                <div className="flex justify-between sm:hidden">
                    <AccountIconContainer>
                        <FaAlignJustify />
                    </AccountIconContainer>
                    <h2 className="font-bold text-black my-6">Verde interior</h2>
                </div>
                <div className="hidden sm:inline">
                    <div className="flex justify-between">
                        <div>
                            <img className="inline h-24" src={logo}/>
                            <a href="#" className="font-bold text-black hover:bg-green-light p-1 rounded-md">Inicio</a>
                            <a href="#" className="font-bold text-black hover:bg-green-light p-1 rounded-md ml-4">Talleres</a>
                            <a href="#" className="font-bold text-black hover:bg-green-light p-1 rounded-md ml-4">Acerca de nosotros</a>
                            <a href="#" className="font-bold text-black hover:bg-green-light p-1 rounded-md ml-4">Contactanos</a>
                        </div>
                        <AccountIconContainer>
                            <FaUserCircle />
                        </AccountIconContainer>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const Navbar = ({scroll}) => {
    return (
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
            {scroll ? <SmallContainer> <MinNavbar /> </SmallContainer> : <BigContainer> <MaxNavbar /> </BigContainer>}
        </IconContext.Provider>
    );
}

export default Navbar;