import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import localData from "../../localData";
import { Button } from "../";

export default function Dropdown({
    items = [],
    title = "dropdown",
    className = "",
    variant,
    color,
    startIcon,
    endIcon,
    toggleIcon,
    isInsideClick = false,
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);
    let clickWrapper = useRef();
    const { caretDown } = localData.svgs;

    useEffect(() => {
        let handler = (e) => !clickWrapper.current.contains(e.target) && setIsOpen(false);
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    });

    // prevents interaction with elements inside menu (replace "isOpen" inside dropdown with "isAnimate")
    // const [isAnimate, setIsAnimate] = useState(false); 

    // useEffect(() => {
    //     setIsAnimate(isOpen);
    // }, [isOpen]);
    // 

    return (
        <div className={`dropdown ${isOpen ? "active" : ""}  ${className}`} ref={clickWrapper}>
            <Button
                className={`dropdown-toggle`}
                data-toggle="dropdown"
                onClick={() => setIsOpen(!isOpen)}
                variant={variant}
                color={color}
            >
                <div className="wrapper">
                    {startIcon && <span className="startIcon">{startIcon}</span>}
                    <span className="dropdown-toggle-title">{title}</span>
                    {endIcon && <span className="endIcon">{endIcon}</span>}
                </div>
                <span className="endIcon dropdown-toggle-icon">{toggleIcon || caretDown}</span>
            </Button>
            
            {/* {isOpen && ( // prevents interaction with elements inside menu */}
            <div className="dropdown-menu">
                {!items.length ? (
                    <div className="dropdown-item disabled">empty.</div>
                ) : (
                    items.map(({ title, startIcon, endIcon, to, id }, index) => (
                        <Link
                            key={index}
                            id={`dropdown-item-${id}`}
                            to={to || `#/path/item-${index + 1}`}
                            className="dropdown-item"
                            tabIndex={isOpen ? 0 : -1}
                            onClick={() => isInsideClick && setIsOpen(false)}
                        >
                            {startIcon && <span className="startIcon">{startIcon}</span>}
                            <span className="dropdown-item-title">{title}</span>
                            {endIcon && <span className="endIcon">{endIcon}</span>}
                        </Link>
                    ))
                )}
                {children}
            </div>
            {/* )} */}
        </div>
    );
}
