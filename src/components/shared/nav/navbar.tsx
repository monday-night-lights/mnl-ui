import React from 'react';
import 'materialize-css';
import { Navbar, Icon, NavItem, Dropdown, Divider } from 'react-materialize';
import photo from '../../../assets/mnlhl-logo.png';

const NavBar = () => (
    <>
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/"><img src={photo} /></a>}
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
            <div className="logo side-nav-logo">
                <a href="#" className="brand-logo">
                    <img src={photo} className="responsive-img" />
                </a>
            </div>
            <Dropdown
                id="stats-dropdown"
                options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    outDuration: 250
                }}
                trigger={<a href="#!"><Icon left>format_list_numbered</Icon>Stats{' '}<Icon right>arrow_drop_down</Icon></a>}
            >
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1txfiFqoekWQFO1yJDyV1sgTzereo_cNBm-V6OIJ0Nww">
                    <Icon left>ac_unit</Icon>
                    2020-2021 Fall/Winter
                </NavItem>
                <Divider />
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1A6nfa8iL5cmBVSXDXL3uf-Va0i_EvJdmZuTa_32v6l0">
                    <Icon left>ac_unit</Icon>
                    2019-2020 Fall/Winter
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/11HKFGPgWCA3g8auTNNSqVtyKk6WBuV7UeRYarVTBHvk">
                    <Icon left>local_florist</Icon>
                    2019 Spring
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1MWKxBdUF8HegOtyjkznthRbGB42F2xrUD_Iryzv7ShQ">
                    <Icon left>ac_unit</Icon>
                    2018-2019 Fall/Winter
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1WClOUoLELrxeNaM1RsbCmuuvXLOymLpHrcTpEqiKTJw">
                    <Icon left>local_florist</Icon>
                    2018 Spring
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1RIyVc1_oHFueUpZbnrFtMGXraZfEh-bEkbz24GHr9OU">
                    <Icon left>ac_unit</Icon>
                    2017-2018 Fall/Winter
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1Lo65fOUp1ZTWTYhYUeZYf6CivhsDegq9-4z4xgZbBO8">
                    <Icon left>local_florist</Icon>
                    2017 Spring
                </NavItem>
                <NavItem
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1JcjwMdsjzPI-WesV6l4O0eThWGVUAvN7-Z7lTrUG_iY">
                    <Icon left>ac_unit</Icon>
                    2016-2017 Fall/Winter
                </NavItem>
            </Dropdown>
            <NavItem href="calendar">
                <Icon left>event</Icon>
                Calendar
            </NavItem>
            <NavItem href="http://shop.mnlhl.com">
                <Icon left>shopping_cart</Icon>
                Shop
            </NavItem>
            <NavItem href="http://rules.mnlhl.com">
                <Icon left>book</Icon>
                Rules
            </NavItem>
            <NavItem href="http://news.mnlhl.com">
                <Icon left>ballot</Icon>
                News
            </NavItem>
            <NavItem href="http://mnlhl.slack.com">
                <Icon left>message</Icon>
                Chat
            </NavItem>
            <NavItem href="http://photos.mnlhl.com">
                <Icon left>photo_library</Icon>
                Photos
            </NavItem>
            <NavItem href="podcast">
                <Icon left>headset</Icon>
                Podcast
            </NavItem>

        </Navbar>
    </>
);

export default NavBar;
