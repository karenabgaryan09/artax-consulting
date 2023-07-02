import React, { useState } from "react";
import { useEffect } from "react";

export default function RippleButton({
    name = "",
    variant = "",
    color = "primary",
    size = "md",
    className = "",
    children,
    onClick = () => {},
    icon,
    endIcon,
    startIcon,
    style = {},
    tabIndex = 0,
    disabled = false,
}) {
    const [showRipple, setShowRipple] = useState(false);
    const [rippleStyle, setRippleStyle] = useState({});

    const animate = (event) => {
        if (event.type === "keydown" && event.keyCode !== 32) return;
        const button = event.currentTarget;
        const btnRect = button.getBoundingClientRect();

        const diameter = Math.max(btnRect.width, btnRect.height);
        const radius = diameter / 2;

        const width = diameter + "px";
        const height = diameter + "px";
        const left = event.clientX - btnRect.left - radius + "px";
        const top = event.clientY - btnRect.top - radius + "px";
        setShowRipple(false);
        setRippleStyle({ width, height, left, top });
    };

    useEffect(() => {
        Object.keys(rippleStyle).length && setShowRipple(true);
    }, [rippleStyle]);

    const getVariant = (variant) => {
        switch (variant) {
            case "outlined":
                return "-outline";
            case "contained":
                return "";
            case "circle":
                return "-circle";
            default:
                return "-text";
        }
    };

    const [filteredVariant, setFilteredVariant] = useState(getVariant(variant));

    return (
        <button
            tabIndex={tabIndex}
            className={`btn btn-${size} btn${filteredVariant}-${color} ${className} ${disabled ? "disabled" : ""}`}
            type="submit"
            onClick={onClick}
            onMouseDown={animate}
            onKeyDown={animate}
            style={style}
        >
            {startIcon && <span className="startIcon">{startIcon}</span>}
            {className == "curtain-btn" ? <span className="btn-name">{name}</span> : name || children}
            {icon}
            {endIcon && <span className="endIcon">{endIcon}</span>}

            {showRipple && (
                <span className="ripple" style={rippleStyle} onTransitionEnd={() => setShowRipple(false)}></span>
            )}
        </button>
    );
}
