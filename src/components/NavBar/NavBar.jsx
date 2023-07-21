import React, {useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
 
  FaStoreAlt,
  FaHouseDamage,
  FaUserTie,
  FaPhone
} from "react-icons/fa";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import ModalUser from "./ModalUser/ModalUser";
import {
  NavLi,
  NavUl,
  Navbar,
  StyledNavLink,
} from "./NavBarStyles";


const NavBar = ({ toggleMenu, setToggleMenu, toggleSearchMenu }) => {
  
  const { currentUser,} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [toggleSection, setToggleSection] = useState(false);
  const navigate = useNavigate();
  

 

  const handleMenuClick = () => {
    if (currentUser) {
      if (toggleSection) {
        setToggleSection(!toggleSection);
      }
      dispatch(toggleHiddenMenu());
    } else {
      navigate("/register");
    }
  };



  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Navbar toggleMenu={toggleMenu} toggleSearchMenu={toggleSearchMenu}>
      <NavUl>
        <NavLi onClick={handleMenu}>
        <FaHouseDamage
        size="30px"/>
          <StyledNavLink to="/">INICIO</StyledNavLink>
        </NavLi>

        <NavLi onClick={handleMenu}>
        <FaStoreAlt
        size="30px"/>
          <StyledNavLink to="/#products">PRODUCTOS</StyledNavLink>
        </NavLi>

        <NavLi onClick={handleMenu}>
        <FaPhone
        size="30px"/>
          <StyledNavLink to="/#contact">CONTACTO</StyledNavLink>
        </NavLi>
       


        <NavLi onClick={handleMenuClick}>
          <ModalUser toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          <FaUserTie
            size="22px"
            color={currentUser ? "lightgreen" : "var(--black)"}
          />
          {currentUser ? (
            <p style={{ color: "lightgreen" }}>
              {currentUser.name.toUpperCase().charAt(0) +
                currentUser.lastname.toUpperCase().charAt(0)}
            </p>
          ) : (
            "LOGIN"
          )}
        </NavLi>
      </NavUl>
    </Navbar>
  );
};

export default NavBar;
