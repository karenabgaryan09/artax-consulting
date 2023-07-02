import React from "react";

export default function OurPeopleCard({ image, name, position, biography, ourPeopleInView, index, delay }) {
    return (
        <div
            className={`card our-people-card ${ourPeopleInView ? "lazy-animate" : ""}`}
            data-lazy="fade-up"
            style={{ transitionDelay: (delay || index * 0.1) + "s" }}
        >
                <img className="card-image" src={image} alt="" />
                <h4 className="card-title display-4">{name}</h4>
                <p className="card-position">{position}</p>
                <div className="divider"></div>
                <p className="card-description">{biography}</p>
        </div>
    );
}
