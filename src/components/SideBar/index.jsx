import React from 'react'
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute} from './SideBarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
                <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="about"onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover"onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="services"onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup"onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
                </SidebarWrapper>
            </Icon>
        </SideBarContainer>
    )
}

export default Sidebar
