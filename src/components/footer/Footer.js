import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import localData from "../../localData";

export default function Footer() {
    const { pageFade } = useGlobalContext().animations;
    const { linkedin, facebook, twitter } = localData.svgs;
    const { whiteLogo } = localData.images;
    return (
        <motion.footer {...pageFade} className="footer bg-dark">
            <div className="container">
                <div className="wrapper">
                <iframe width="360" height="360" src="https://shareables.clutch.co/share/badges/1269855/14434?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Consulting Company Durham 2023"></iframe>
                    <Link to="/" className="footer-brand">
                        <img src={whiteLogo} alt="" />
                    </Link>
                </div>
                <div className="footer-content">
                    <div className="quick-links">
                        <h5 className="display-4 quick-links-title">quick links</h5>
                        <ul className="quick-links-list">
                            <a href="#info" className="quick-links-link solid-link">
                                info
                            </a>
                            {/* <a href="#our-people" className="quick-links-link solid-link">
                             our people
                         </a> */}

                            <a href="#contact" className="quick-links-link solid-link">
                                contact
                            </a>
                            <Link to="/privacy-policy" className="quick-links-link solid-link">
                                Privacy policy
                            </Link>
                            <Link to="/calculators" className="quick-links-link solid-link">
                                Calculators
                            </Link>
                        </ul>
                    </div>

                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/company/artax-consulting/"
                            className="solid-link"
                            target="_blank"
                        >
                            {linkedin}
                        </a>
                        <a href="#/" className="solid-link" target="_blank">
                            {facebook}
                        </a>
                        <a
                            href="https://twitter.com/ArtaxConsulting"
                            className="solid-link"
                            target="_blank"
                        >
                            {twitter}
                        </a>
                    </div>
                </div>
                <p className="footer-copyright">© 2023 Artax Consulting</p>
            </div>
        </motion.footer>
    );
}
