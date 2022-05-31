import React from "react";
import logo from '../../assets/images/verdeLogo.png';
import { IconContext } from "react-icons";
import {
    FaUserCircle
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
    return (
        <div style={{flex:1, flexDirection: 'row'}}>
            <AccountIconContainer>
                <FaUserCircle />
            </AccountIconContainer>
            <Logo src={logo} width={165} height={83} style={{position: 'absolute', top: 0, left: 30}}/>
            <SmallButtonsContainer>
                <SmallMenuitem>INICIO</SmallMenuitem>
                <SmallMenuitem>PRODUCTOS</SmallMenuitem>
                <SmallMenuitem>TALLERES</SmallMenuitem>
                <SmallMenuitem>ACERCA DE NOSOTROS</SmallMenuitem>
                <SmallMenuitem>CONTACTANOS</SmallMenuitem>
            </SmallButtonsContainer>
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