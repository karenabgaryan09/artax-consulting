import React, { useState, useEffect } from "react";
import { Dropdown, ControlledAccordion, Drawer, Button } from "../";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../../context";
import localData from "../../localData";

const menu = [
    { title: "info", link: "#info" },
    // { title: "our people", link: "#our-people" },
    // { title: "clients", link: "#partners" },
    { title: "contact", link: "#contact" },
];

const pages = [
    { title: "page 1", to: "/page/1", id: uuidv4() },
    { title: "page 2", to: "/page/2", id: uuidv4() },
    { title: "privacy policy", to: "/privacy-policy", id: uuidv4() },
];

// const pages2 = [
//     { title: "page 4", to: "/page/4", id: uuidv4() },
//     { title: "page 5", to: "/page/5", id: uuidv4() },
//     { title: "page 6", to: "/page/6", id: uuidv4() },
// ];

const DrawerChild = ({ parentCallback }) => {
    const location = useLocation();

    return (
        <>
            {menu.map(({ title, link }, index) => (
                <li className="nav-item" key={index}>
                    <a href={link} className={`nav-link`} onClick={parentCallback}>
                        <Button name={title} color="secondary" />
                    </a>
                </li>
            ))}
            {/* <ControlledAccordion
                items={[
                    {
                        buttonName: "quick links",
                        color: "secondary",
                        content: pages.map(({ title, to }, index) => (
                            <Link key={index} to={to} className="nav-link" onClick={parentCallback}>
                                {title}
                            </Link>
                        )),
                    },
                    // {
                    //     buttonName: "pages 2",
                    //     color: "secondary",
                    //     content: pages2.map(({ title, to }, index) => (
                    //         <Link key={index} to={to} className="nav-link" onClick={parentCallback}>
                    //             {title}
                    //         </Link>
                    //     )),
                    // },
                ]}
            /> */}
        </>
    );
};

export default function Navbar() {
    const location = useLocation();
    const { pageFade } = useGlobalContext().animations;
    const { bars } = localData.svgs;
    const { logo } = localData.images;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="" />
                </Link>

                <div className="navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {menu.map(({ title, link }, index) => (
                            <li className="nav-item" key={index}>
                                <a href={link} className={`nav-link`}>
                                    <Button name={title} color="dark" variant="text" />
                                </a>
                            </li>
                        ))}
                        {/* <Dropdown
                            {...{ className: "nav-link", title: "quick links", color: "dark", isInsideClick: true }}
                            items={pages}
                        /> */}

                        {/* <Dropdown
                            {...{ className: "nav-link", title: "pages 2", color: "secondary", isInsideClick: true }}
                            items={pages2}
                        /> */}
                    </ul>
                </div>
                <Link to="/schedule-a-call">
                    <Button name="Let's Talk" variant="contained" size="lg" />
                </Link>

                {/* <a href="https://calendly.com/jonathanposton09/30min" target="_blank">
                        <Button name="Let's Talk" variant="outlined" size="lg" color="dark" className="curtain-btn" />
                    </a> */}
                <Drawer
                    togglerVariant="circle"
                    togglerClassName="navbar-toggler"
                    togglerIcon={bars}
                    togglerColor="dark"
                    Child={DrawerChild}
                ></Drawer>
            </div>
        </nav>
    );
}
