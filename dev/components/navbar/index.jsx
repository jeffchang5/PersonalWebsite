import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import DropDownIcon from 'components/common/dropdown';
import { slideUp, slideDown } from 'theme/animations';
import devices from 'theme/devices';
import Logo from 'resources/images/redbluelogo.png';
import Resume from 'resources/pdfs/Resume.pdf';
import NavItem from './nav_item';
import MenuDropDown from './menu_dropdown';


const fun = (props) => {
  if (props.isFirstChildScrolled) {
    return (props.isDownScroll ? slideUp : slideDown);
  } return '';
};

const NavWrapper = styled.div`
  display: flex;
  position: ${props => (props.isFirstChildScrolled ? 'fixed' : 'inline-block')};
  width: 100%;
  z-index: 99999;
  flex-direction: column;
  background-color: white;
  border-bottom: 1px solid #ccc;
  animation: ${props => fun(props)} .7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  
  ${devices.desktop`
    font-size: 4.0em;
    min-height: 100px;
 `};
`;

const NavBarWrapper = styled.nav`
  width: 100%;
  margin: 20px 0;
  display: flex;
  ${devices.desktop`
    align-items: center;
    justify-content: center;
  `}; 
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  width: 75px;
  min-width: auto;
  min-height: auto;
  margin: 0 20px;
  flex-direction: column;
  align-items: center;
  
  ${devices.desktop`
    width: 100px;
    min-width: auto;
    min-height: auto;
    margin: 0 20px;
  `}; 
`;

const Divider = styled.div`
  height: 50px;
  width: 1px;
  margin-left: 20px;
  background: #ccc;
`;

const MenuCenter = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${props => props.theme.font.sanserif};
  font-size: 2em;
  flex-grow: 1;
`;

const MenuTitleWrapper = styled.div`
  display: inline-block;
`;

const DropDownWrapper = styled.div`
  width: 25px;
  height: 25px;
  margin: 2px 15px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-self: center;
`;

const NavBar = props => (
  <NavWrapper
    isFirstChildScrolled={props.isFirstChildScrolled}
    isDownScroll={props.isDownScroll}
  >
    <MediaQuery maxDeviceWidth={974}>
      <NavBarWrapper>
        <LogoWrapper>
          <LogoImage alt="logo" src={Logo} />
        </LogoWrapper>
        <Divider />
        <MenuCenter>
          <MenuWrapper onClick={e => openMenu(e)}>
            <MenuTitleWrapper>Hello World</MenuTitleWrapper>
            <DropDownWrapper>
              <DropDownIcon />
            </DropDownWrapper>
          </MenuWrapper>
        </MenuCenter>
      </NavBarWrapper>
      <MenuDropDown isVisible />
    </MediaQuery>
    <MediaQuery minDeviceWidth={975}>
      <NavBarWrapper>
        {props.navBarItems.slice(1).map(navBarItem =>
          (<NavItem
            key={navBarItem.title}
            scrollTop={navBarItem.scroll.top}
            text={navBarItem.title}
          />))
        }
        <LogoWrapper>
          <LogoImage alt="logo" src={Logo} />
        </LogoWrapper>
        <NavItem url={Resume} isDownload="true" text="RESUME" />
        <NavItem
          url="mailto:me@jeffchang.io?Subject=Hey,%20I%20saw%20your%20website!"
          text="CONTACT"
        />
      </NavBarWrapper>
    </MediaQuery>
  </NavWrapper>);

NavBar.propTypes = {
  isFirstChildScrolled: PropTypes.bool,
  isDownScroll: PropTypes.bool,
  navBarItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    scroll: PropTypes.shape({
      top: PropTypes.number,
      height: PropTypes.number,
    }),
  })),
};
export default NavBar;
