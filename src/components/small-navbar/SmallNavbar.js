import React from "react";
import { Button } from "../";
import { Link, useNavigate } from "react-router-dom";
import localData from "../../localData";

export default function SmallNavbar({ className = "" }) {
    const { anglesLeft } = localData.svgs;
    const { whiteLogo } = localData.images;

    const navigate = useNavigate();

    return (
        <nav className={`small-navbar ${className}`}>
            <div className="container-fluid">
                {/* <Link to="/">
                    <Button startIcon={anglesLeft} name="return" color="light" />
                </Link> */}
                <Button  startIcon={anglesLeft} name="return"  color="light" onClick={() => navigate(-1)} />
                <Link to="/" className="small-navbar-brand">
                    <img src={whiteLogo} alt="" />
                </Link>
            </div>
        </nav>
    );
}
