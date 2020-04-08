import React from 'react';
import 'materialize-css';
import { Navbar, Icon, NavItem } from 'react-materialize';
import logo  from '../../../assets/mnlhl-logo.png';

const NavBar = () => (
    <>
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/"><img src={logo} /></a>}
            centerChildren
            className="grey darken-4"
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                outDuration: 200,
                preventScrolling: true
            }}>
            <NavItem href="http://stats.mnlhl.com">
                Stats
            </NavItem>
            <NavItem href="calendar">
                Calendar
            </NavItem>
            <NavItem href="http://shop.mnlhl.com">
                Shop
            </NavItem>
            <NavItem href="http://rules.mnlhl.com">
                Rules
            </NavItem>
            <NavItem href="http://news.mnlhl.com">
                News
            </NavItem>
            <NavItem href="http://mnlhl.slack.com">
                Chat
            </NavItem>
            <NavItem href="http://photos.mnlhl.com">
                Photos
            </NavItem>
            <NavItem href="podcast">
                Podcast
            </NavItem>
        </Navbar>
    </>
);

export default NavBar;
