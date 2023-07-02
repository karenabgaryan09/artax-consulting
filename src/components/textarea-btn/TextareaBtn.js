import React, { useState } from "react";
import { Button } from "..";

export default function TextareaBtn({
    label,
    name,
    placeholder = "",
    type,
    required,
    callback = () => {},
    value = "",
    className = "",
    variant,
    color,
    errorMessage,
}) {
    const [_value, _setValue] = useState(value);

    const onChange = (e) => {
        _setValue(e.target.value);
        callback(e);
    };

    return (
        <div className={`textarea-btn ${className}`}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label} {required && "*"}
                </label>
            )}
            <div className="input-group">
                <Button variant={variant} color={color} className={`${errorMessage ? "is-invalid" : "is-valid"}`}>
                    <textarea
                        type={type}
                        name={name}
                        id={name}
                        className="form-control"
                        onChange={onChange}
                        placeholder={placeholder}
                        value={_value}
                    />
                </Button>
                <div className="feedback valid-feedback">looks good.</div>
                <div className="feedback invalid-feedback">{errorMessage}</div>
            </div>
        </div>
    );
}
